import { useState, type FormEvent } from "react";
import { useUser } from "../../../contexts/UserContext";
import styles from "./DiceRoller.module.css";

export const UserConnection = () => {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");
    const { user, login, logout } = useUser();


    const handleConnect = async () => {
        login({
            id: userName + Date.now,
            name: userName,
            room: room,
        })
    };

    const handleDisconnect = async () => {
        logout();
    };


    return (
        <section className="border-b border-[var(--border)] bg-[var(--bg)]/75 px-4 py-3">
            {user && user.name && user.room ? (
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
                <div>
                    <input
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
                        placeholder="Room."
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
                        disabled={!userName.trim() || !room.trim()}
                        className={styles.diceButton}
                        onClick={handleConnect}
                    >
                        Connect
                    </button>
                </div>
            )}
            {
                //connectionError && <p role="alert" className="mt-2 text-sm text-red-700">{connectionError}</p>
            }
        </section>
    );
};