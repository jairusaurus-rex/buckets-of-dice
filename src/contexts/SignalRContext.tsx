import {
    createContext,
    use,
    useEffect,
    useRef,
    useState,
    type ReactNode
} from "react";
import type { HubConnection } from "@microsoft/signalr";
import { MessagerReducerActions } from "../data-types/enums/messager-reducer-action-enum";
import { MessageTypeEnum } from "../data-types/enums/message-type-enum";
import type { MessageType } from "../data-types/types/MessageType";
import { useMessager } from "./MessagerContext";
import { useUser } from "./UserContext";
import { createConnection } from "../services/signalr";

type SignalRContextValue = {
    isConnected: boolean;
    isConnecting: boolean;
    connect: (room: string, userName: string) => Promise<void>;
    disconnect: () => Promise<void>;
    sendMessage: (message: MessageType) => Promise<void>;
};

const SignalRContext = createContext<SignalRContextValue | null>(null);

const isMessageType = (value: unknown): value is MessageType => {
    if (!value || typeof value !== "object") return false;

    const message = value as Record<string, unknown>;
    if (
        typeof message.id !== "string" ||
        typeof message.timestamp !== "string" ||
        typeof message.userId !== "string" ||
        typeof message.userName !== "string" ||
        !message.content || typeof message.content !== "object"
    ) {
        return false;
    }

    const content = message.content as Record<string, unknown>;
    if (message.type === MessageTypeEnum.TEXT) {
        return typeof content.text === "string";
    }

    return message.type === MessageTypeEnum.DICE_ROLL &&
        typeof content.rollTitle === "string" &&
        typeof content.result === "number" &&
        Array.isArray(content.dice) &&
        Array.isArray(content.bestDice);
};

export const SignalRProvider = ({ children }: { children: ReactNode }) => {
    const connectionRef = useRef<HubConnection | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const { messageDispatch } = useMessager();
    const { logout } = useUser();

    const addReceivedMessages = (payload: unknown) => {
        const messages = Array.isArray(payload) ? payload : [payload];
        for (const message of messages) {
            if (!isMessageType(message)) {
                console.warn("Ignoring invalid SignalR message payload:", message);
                continue;
            }

            messageDispatch({
                type: MessagerReducerActions.ADD_MESSAGE,
                message
            });
        }
    };

    const receiveHistory = (payload: unknown) => {
        messageDispatch({ type: MessagerReducerActions.CLEAR });
        addReceivedMessages(payload);
    };

    const connect = async (room: string, userName: string) => {
        if (connectionRef.current) {
            if (connectionRef.current.state === "Connected") return;
            throw new Error("A SignalR connection is already in progress.");
        }

        const connection = createConnection(room, userName);
        connectionRef.current = connection;
        setIsConnecting(true);

        connection.on("ReceiveMessage", addReceivedMessages);
        connection.on("ReceiveHistory", receiveHistory);
        connection.onclose(() => {
            if (connectionRef.current !== connection) return;
            connectionRef.current = null;
            setIsConnected(false);
            setIsConnecting(false);
            logout();
            messageDispatch({ type: MessagerReducerActions.CLEAR });
        });

        try {
            await connection.start();
            if (connectionRef.current === connection) {
                setIsConnected(true);
            }
        } catch (error) {
            if (connectionRef.current === connection) {
                connectionRef.current = null;
            }
            await connection.stop().catch(() => undefined);
            throw error;
        } finally {
            setIsConnecting(false);
        }
    };

    const disconnect = async () => {
        const connection = connectionRef.current;
        connectionRef.current = null;
        setIsConnected(false);
        setIsConnecting(false);

        try {
            if (connection) {
                await connection.stop();
            }
        } finally {
            logout();
            messageDispatch({ type: MessagerReducerActions.CLEAR });
        }
    };

    const sendMessage = async (message: MessageType) => {
        const connection = connectionRef.current;
        if (!connection || connection.state !== "Connected") {
            throw new Error("Cannot send a message while disconnected.");
        }

        await connection.invoke("SendMessage", message);
    };

    useEffect(() => () => {
        const connection = connectionRef.current;
        connectionRef.current = null;
        if (connection) {
            void connection.stop().catch((error: unknown) => {
                console.error("SignalR shutdown failed:", error);
            });
        }
    }, []);

    return (
        <SignalRContext.Provider
            value={{ isConnected, isConnecting, connect, disconnect, sendMessage }}
        >
            {children}
        </SignalRContext.Provider>
    );
};

export const useSignalR = () => {
    const context = use(SignalRContext);
    if (!context) {
        throw new Error("useSignalR must be used inside SignalRProvider");
    }
    return context;
};