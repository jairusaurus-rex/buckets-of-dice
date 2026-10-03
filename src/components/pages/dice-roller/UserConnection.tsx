import { useState, type FormEvent } from "react";
import { useUser } from "../../../contexts/UserContext";
import { useSignalR } from "../../../contexts/SignalRContext";
import styles from "./DiceRoller.module.css";
import type { MessageType } from "../../../data-types/types/MessageType";
import { MessageTypeEnum } from "../../../data-types/enums/message-type-enum";

export const UserConnection = () => {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");
    const [connectionError, setConnectionError] = useState("");
    const { user, login } = useUser();
    const { isConnected, isConnecting, connect, disconnect, sendMessage } = useSignalR();

    const handleConnect = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedName = userName.trim();
        const trimmedRoom = room.trim();
        setConnectionError("");

        try {
            await connect(trimmedRoom, trimmedName);
            const connectedUser = {
                id: trimmedName + Date.now().toString(),
                name: trimmedName,
                room: trimmedRoom,
            };
            login(connectedUser);

            const outgoingMessage: MessageType = {
                id: crypto.randomUUID(),
                type: MessageTypeEnum.TEXT,
                content: { text: `🚀 ${connectedUser.name} joined the room.` },
                timestamp: new Date().toISOString(),
                userId: connectedUser.id,
                userName: connectedUser.name,
            };

            try {
                await sendMessage(outgoingMessage);
            } catch (error) {
                console.error("SignalR message failed:", error);
                return;
            }
        } catch (error) {
            console.error("SignalR connection failed:", error);
            setConnectionError("Unable to connect. Check the name and room, then try again.");
        }
    };

    const handleDisconnect = async () => {
        setConnectionError("");
        try {
            await disconnect();
        } catch (error) {
            console.error("SignalR disconnect failed:", error);
            setConnectionError("Unable to disconnect. Please try again.");
        }
    };


    return (
        <section className="border-b border-[var(--border)] bg-[var(--bg)]/75 px-4 py-3">
            {isConnected && user ? (
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-[var(--text-h)]">
                        Connected as <strong>{user.name}</strong> in <strong>{user.room}</strong>
                    </p>
                    <button
                        type="button"
                        onClick={handleDisconnect}
                        className={styles.diceButton}
                    >
                        Disconnect
                    </button>
                </div>
            ) : (
                <form onSubmit={handleConnect}>
                    <input
                        aria-label="User name"
                        placeholder="User name"
                        required
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                        className="
                            w-full 
                            p-2 
                            mb-2
                            rounded 
                            border 
                            border-[var(--border)] 
                            bg-[var(--bg)]"
                    />
                    <input
                        aria-label="Room"
                        placeholder="Room"
                        required
                        value={room}
                        onChange={(event) => setRoom(event.target.value)}
                        className="
                            w-full 
                            p-2 
                            mb-2
                            rounded 
                            border 
                            border-[var(--border)] 
                            bg-[var(--bg)]"
                    />
                    <button
                        type="submit"
                        disabled={isConnecting || !userName.trim() || !room.trim()}
                        className={styles.diceButton}
                    >
                        {isConnecting ? "Connecting..." : "Connect"}
                    </button>
                </form>
            )}
            {connectionError && <p role="alert" className="mt-2 text-sm text-red-700">{connectionError}</p>}
        </section>
    );
};