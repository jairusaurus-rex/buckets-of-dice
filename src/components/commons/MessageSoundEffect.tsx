import { useEffect, useRef } from "react";
import messageSoundUrl from "../../assets/sounds/message.mp3";
import { useSignalR } from "../../contexts/SignalRContext";
import { useUser } from "../../contexts/UserContext";

export const MessageSoundEffect = () => {
    const { subscribeToLiveMessages } = useSignalR();
    const { user, userOptions } = useUser();
    const userRef = useRef(user);
    const userOptionsRef = useRef(userOptions);
    userRef.current = user;
    userOptionsRef.current = userOptions;

    useEffect(() => {
        return subscribeToLiveMessages((message) => {
            if (
                !userOptionsRef.current.MessageSound ||
                message.userId === userRef.current?.id
            ) {
                return;
            }

            void new Audio(messageSoundUrl).play().catch((error: unknown) => {
                console.warn("Message sound playback failed:", error);
            });
        });
    }, [subscribeToLiveMessages]);

    return null;
};