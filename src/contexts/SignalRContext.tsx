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
import { useMessager } from "./MessagerContext";
import { useUser } from "./UserContext";
import { createConnection } from "../services/signalr";

type SignalRContextValue = {
    isConnected: boolean;
    isConnecting: boolean;
    connect: (room: string, userName: string) => Promise<void>;
    disconnect: () => Promise<void>;
    sendMessage: (message: string) => Promise<void>;
};

const SignalRContext = createContext<SignalRContextValue | null>(null);

const formatReceivedMessage = (value: unknown): string => {
    if (typeof value === "string") {
        return value;
    }

    if (value && typeof value === "object") {
        const record = value as Record<string, unknown>;
        const message = record.message ?? record.text ?? record.content;
        if (typeof message === "string") {
            return message;
        }
    }

    try {
        return JSON.stringify(value) ?? String(value);
    } catch {
        return String(value);
    }
};

export const SignalRProvider = ({ children }: { children: ReactNode }) => {
    const connectionRef = useRef<HubConnection | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const { messageDispatch } = useMessager();
    const { logout } = useUser();

    const addReceivedMessages = (payload: unknown) => {
        const messages = Array.isArray(payload) ? payload : [payload];
        if (messages.length === 0) return;
        for(let message of messages){
            messageDispatch({
                type: MessagerReducerActions.ADD_JSX,
                jsx: (
                    <div className="whitespace-pre-wrap">
                            <p>{formatReceivedMessage(message)}</p>
                    </div>
                )
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

    const sendMessage = async (message: string) => {
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