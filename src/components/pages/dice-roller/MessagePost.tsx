import type { ReactNode } from "react";

type MessagePostProps = {
    children: ReactNode;
}

export const MessagePost = ({ children }: MessagePostProps) => {
    return <div className="p-1 m-1 mr-3 border rounded border-[var(--border)] bg-[var(--accent-bg)] ">
        {children}
    </div>
}
