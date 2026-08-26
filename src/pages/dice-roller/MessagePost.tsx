import type { ReactNode } from "react";

interface MessagePostProps {
    children: ReactNode;
}

export const MessagePost = ({ children }: MessagePostProps) => {
    return <>
        {children}
    </>
}
