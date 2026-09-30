import type { ReactNode } from "react";

type MessagePostProps = {
    children: ReactNode;
    fromSelf: boolean;
}

export const MessagePost = ({ children, fromSelf }: MessagePostProps) => {
    if(fromSelf){
        return <div className="p-1 m-1 ml-5 border rounded border-[var(--border)] bg-[var(--border)] ">
            {children}
        </div>
    }

    return <div className="p-1 m-1 mr-5 border rounded border-[var(--border)] bg-[var(--accent-bg)] ">
        {children}
    </div>
    
}
