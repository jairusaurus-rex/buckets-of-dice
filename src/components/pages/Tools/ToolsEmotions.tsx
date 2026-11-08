
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { speak } from "../../../utils/textToSpeech";
import { faFaceAngry, faFaceFrown, faFaceSmile, faFaceGrimace, faFaceMeh, faFaceGrinStars, faFaceTired, faUserInjured, faFaceSurprise, faGhost } from "@fortawesome/free-solid-svg-icons";
import { useState, type ReactNode } from "react";

type IconItem = {
    name: string;
    color: string;
    icon: ReactNode;
};


export const ToolsEmotions = () => {
    const [iconSetSelected, setIconSetSelected] = useState("emotions");

    const emotions = [
        { name: "Happy", color: "bg-green-400", icon: <FontAwesomeIcon icon={faFaceSmile} /> },
        { name: "Excited", color: "bg-green-400", icon: <FontAwesomeIcon icon={faFaceGrinStars} /> },
        { name: "Sad", color: "bg-blue-400", icon: <FontAwesomeIcon icon={faFaceFrown} /> },
        { name: "Bored", color: "bg-blue-400", icon: <FontAwesomeIcon icon={faFaceMeh} /> },
        { name: "Surprised", color: "bg-yellow-500", icon: <FontAwesomeIcon icon={faFaceSurprise} /> },
        { name: "Scared", color: "bg-yellow-500", icon: <FontAwesomeIcon icon={faGhost} /> },
        { name: "Anxious", color: "bg-orange-400", icon: <FontAwesomeIcon icon={faFaceGrimace} /> },
        { name: "Frustrated", color: "bg-orange-400", icon: <FontAwesomeIcon icon={faFaceTired} /> },
        { name: "Angry", color: "bg-red-400", icon: <FontAwesomeIcon icon={faFaceAngry} /> },
        { name: "Hurt", color: "bg-red-400", icon: <FontAwesomeIcon icon={faUserInjured} /> }
    ]

    const requests = [
        { name: "Water", color: "bg-blue-400", icon: <FontAwesomeIcon icon={faFaceSmile} /> },
        { name: "Snack", color: "bg-green-400", icon: <FontAwesomeIcon icon={faFaceGrinStars} /> },
        { name: "Bathroom", color: "bg-blue-400", icon: <FontAwesomeIcon icon={faFaceFrown} /> },
        { name: "Walk", color: "bg-green-400", icon: <FontAwesomeIcon icon={faFaceMeh} /> },
        { name: "Hug", color: "bg-yellow-500", icon: <FontAwesomeIcon icon={faFaceSurprise} /> },
        { name: "Music", color: "bg-purple-400", icon: <FontAwesomeIcon icon={faGhost} /> },
        { name: "Game", color: "bg-pink-400", icon: <FontAwesomeIcon icon={faFaceGrinStars} /> },
        { name: "Toy", color: "bg-pink-400", icon: <FontAwesomeIcon icon={faFaceSmile} /> }
    ]

    const iconSet = iconSetSelected === "emotions" ? emotions : requests;

    const handleIconSetChange = (set: string) => {
        setIconSetSelected(set);
    }

    return (
        <div className="h-[100svh] w-full bg-[var(--bg)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
                {iconSet.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => speak(item.name)}
                        className={` rounded-lg flex flex-col items-center justify-center p-4 ${item.color} hover:opacity-80 transition-opacity`}
                    >
                        <div className="text-5xl mb-2 text-white ">{item.icon}</div>
                        <span className="text-white text-2xl font-bold">{item.name}</span>
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4 p-2">
                <button
                    onClick={() => handleIconSetChange("emotions")}
                    className={` ${iconSetSelected === "emotions" ? "bg-[var(--accent)]" : "bg-[var(--muted)]"} hover:bg-[var(--accent)]/75 text-white font-bold py-2 px-4 rounded`}>
                    Emotions
                </button>
                <button
                    onClick={() => handleIconSetChange("requests")}
                    className={` ${iconSetSelected === "requests" ? "bg-[var(--accent)]" : "bg-[var(--muted)]"} hover:bg-[var(--accent)]/75 text-white font-bold py-2 px-4 rounded`}>
                    Requests
                </button>
            </div>
        </div>
    );
};