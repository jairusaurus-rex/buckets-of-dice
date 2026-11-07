
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { speak } from "../../../utils/textToSpeech";
import { faFaceAngry, faFaceFrown, faFaceSmile, faFaceGrimace, faFaceMeh, faFaceGrinStars, faFaceTired , faUserInjured, faFaceSurprise, faGhost } from "@fortawesome/free-solid-svg-icons";


export const ToolsEmotions = () => {

    const emotions = [
        { name: "Happy", color: "bg-green-400", icon: <FontAwesomeIcon icon={faFaceSmile} />   },
        { name: "Excited", color: "bg-green-400", icon: <FontAwesomeIcon icon={faFaceGrinStars} />    },
        { name: "Sad", color: "bg-blue-400", icon: <FontAwesomeIcon icon={faFaceFrown} />   },
        { name: "Bored", color: "bg-blue-400", icon: <FontAwesomeIcon icon={faFaceMeh} />   },
        { name: "Surprised", color: "bg-yellow-500", icon: <FontAwesomeIcon icon={faFaceSurprise} />   },
        { name: "Scared", color: "bg-yellow-500", icon: <FontAwesomeIcon icon={faGhost} />  },
        { name: "Anxious", color: "bg-orange-400", icon: <FontAwesomeIcon icon={faFaceGrimace} />   },
        { name: "Frustrated", color: "bg-orange-400", icon: <FontAwesomeIcon icon={faFaceTired} />   },
        { name: "Angry", color: "bg-red-400", icon: <FontAwesomeIcon icon={faFaceAngry} />   },
        { name: "Hurt", color: "bg-red-400", icon: <FontAwesomeIcon icon={faUserInjured} />  }
    ]

    return (
        <div className="h-[100svh] w-full bg-[var(--bg)]/75">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
                {emotions.map((emotion) => (
                    <button
                        key={emotion.name}
                        onClick={() => speak(emotion.name)} 
                        className={` rounded-lg flex flex-col items-center justify-center p-4 ${emotion.color} hover:opacity-80 transition-opacity`}
                    >
                        <div className="text-5xl mb-2 text-white ">{emotion.icon}</div>
                        <span className="text-white text-2xl font-bold">{emotion.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};