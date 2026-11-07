

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useRef, useState } from "react";
import { speak } from "../../../utils/textToSpeech";

const DEFAULT_FONT_SIZE = 100;

export const ToolsMessage = () => {
    const [message, setMessage] = useState("");
    const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useLayoutEffect(() => {
        const textArea = textAreaRef.current;
        if (!textArea) return;

        const resizeText = () => {
            if (message.length === 0) {
                setFontSize(DEFAULT_FONT_SIZE);
                return;
            }

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            if (!context) {
                throw new Error("Unable to measure message text.");
            }

            const styles = window.getComputedStyle(textArea);
            const availableWidth =
                textArea.clientWidth -
                parseFloat(styles.paddingLeft) -
                parseFloat(styles.paddingRight);
            if (availableWidth <= 0) return;

            context.font = `${styles.fontStyle} ${styles.fontWeight} 100px ${styles.fontFamily}`;

            const widestLine = message
                .split("\n")
                .reduce(
                    (widest, line) =>
                        Math.max(
                            widest,
                            context.measureText(line).width +
                            Math.max(0, line.length - 1) *
                            parseFloat(styles.letterSpacing || "0"),
                        ),
                    0,
                );

            if (widestLine > 0) {
                const nextFontSize = Math.min(
                    DEFAULT_FONT_SIZE,
                    (availableWidth / widestLine) * 100,
                );
                setFontSize((currentFontSize) =>
                    Math.abs(currentFontSize - nextFontSize) < 0.1
                        ? currentFontSize
                        : nextFontSize,
                );
            } else {
                setFontSize(DEFAULT_FONT_SIZE);
            }
        };

        resizeText();
        const observer = new ResizeObserver(resizeText);
        observer.observe(textArea);
        return () => observer.disconnect();
    }, [message]);

    return (
        <div className="h-[100svh] w-full bg-[var(--bg)]/75">
            <textarea
                ref={textAreaRef}
                aria-label="Message to display"
                placeholder="..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                wrap="off"
                className="block h-8/10 w-full resize-none border-0 bg-transparent p-4 text-center leading-tight text-[var(--text-h)] outline-none placeholder:text-[var(--muted)]"
                style={{ fontSize }}
            />
            <div className="grid grid-cols-2 gap-4">
                <button 
                    onClick={() => speak(message)} 
                    className=" bg-[var(--accent)] hover:bg-[var(--accent)]/75 text-white font-bold py-2 px-4 rounded">
                    Play 
                    <FontAwesomeIcon className="ml-2 text-white" icon={faPlay} />
                </button>
                <button 
                    onClick={() => setMessage("")} 
                    className=" bg-[var(--muted)] hover:bg-[var(--muted)]/75 text-white font-bold py-2 px-4 rounded">
                    Clear
                </button>
            </div>
        </div>
    );
};