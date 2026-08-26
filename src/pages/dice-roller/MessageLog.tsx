import { useEffect, useRef, useState } from "react";
import styles from "./DiceRoller.module.css";
import { useMessager } from "../../contexts/MessagerContext";
import { MessagerReducerActions } from "../../data-types/enums/messager-reducer-action-enum";
import { MessagePost } from "./MessagePost";


export const MessageLog = () => {
    const [newMessage, setNewMessage] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const messageListRef = useRef<HTMLDivElement>(null);

    const { messageDispatch, messageGroup } = useMessager();

    useEffect(() => {
        const messageList = messageListRef.current;

        if (messageList) {
            messageList.scrollTo({
                top: messageList.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messageGroup]);

    const handleMessageChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const value = e.target.value;

        setNewMessage(value);

        const textarea = textareaRef.current;

        if (!textarea) return;

        // Reset height so it can shrink when text is deleted
        textarea.style.height = "auto";

        // Grow to fit content, but stop at max-height
        textarea.style.height = `${Math.min(
            textarea.scrollHeight,
            128
        )}px`;
    }

    function handleSend() {
        if (!newMessage.trim()) return;
        console.log('>', newMessage);
        const lines = newMessage.split(/\r?\n/);
        console.log('>>', lines)

        setNewMessage("");
        const sendMessage = (
            <div>
                {lines.map((row, index) => (
                    <div key={index}>
                        {row.length > 0 ? <p>{row}</p> : <br></br>}
                    </div>
                ))}
            </div>
        );

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }

        messageDispatch({ type: MessagerReducerActions.ADD_JSX, jsx: sendMessage });
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }


    return (
        <div className={`
        flex flex-col 
        w-full 
        p-1 
        m-0 
        ${styles.messagerBox}`}>
            <div ref={messageListRef} className="grow min-h-0 flex flex-col overflow-auto">
                {
                    messageGroup.map((message) => (
                        <div key={message.id}>
                            <MessagePost>
                                {message.jsxElement}
                            </MessagePost>
                        </div>
                    ))
                }
            </div>
            <div className="grow-0 border-t border-[var(--hover)]">


                <div className="w-full">
                    {/* Message input */}
                    <div className="px-4 py-2 border border-[var(--border)]">
                        <label htmlFor="comment" className="sr-only">
                            Enter message here
                        </label>

                        <textarea
                            ref={textareaRef}
                            id="comment"
                            rows={1}
                            value={newMessage}
                            onChange={handleMessageChange}
                            onKeyDown={handleKeyDown}
                            className="
                                    block w-full px-0 text-sm
                                    border-0 focus:ring-0
                                    placeholder:text-body
                                    text-[var(--text-h)]
                                    resize-none
                                    overflow-y-auto
                                    max-h-32
                                "
                            placeholder="Write a message..."
                            required
                        />
                    </div>

                    {/* Toolbar */}
                    <div className="flex items-center px-3 py-2 ">
                        {/* Send */}
                        <button
                            type="button"
                            onClick={handleSend}
                            className={styles.diceButton}>
                            send
                        </button>
                        {/*
                            <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                                <button
                                    type="button"
                                    className="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 9h.01M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM6.6 13a5.5 5.5 0 0 0 10.81 0H6.6Z"
                                        />
                                    </svg>

                                    <span className="sr-only">Add emoji</span>
                                </button>

                                <button
                                    type="button"
                                    className="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"
                                        />
                                    </svg>

                                    <span className="sr-only">Attach file</span>
                                </button>

                                <button
                                    type="button"
                                    className="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                        />

                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                                        />
                                    </svg>

                                    <span className="sr-only">Embed map</span>
                                </button>

                                <button
                                    type="button"
                                    className="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                                        />

                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5 0 0 1 1 0Z"
                                        />
                                    </svg>

                                    <span className="sr-only">Upload image</span>
                                </button>
                            </div>
                                */}
                    </div>
                </div>
            </div>
        </div >
    )
}