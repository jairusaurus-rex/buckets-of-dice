import ReadMore from "../components/commons/ReadMore"
import type { DiceType } from "../data-types/types/DiceType"
import styles from "../components/layouts/Layout.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from "@fortawesome/free-solid-svg-icons/faCircleRight";
import DiceText from "../components/commons/DiceText";

export const AssembleDicePoolResult = (
    dice: DiceType[],
    rollTitle: string,
    newResult: number,
    bestDice: string[]
) => {
    return (
        <>
            <div>
                <div className="pb-3">
                    <ReadMore>
                        <>
                            {dice.map((die) => (
                                <div key={die.id} className="text-xs text-[var(--text)]">

                                    <span>{die.rank && <DiceText>{die.rank}</DiceText>}</span>
                                    <span>{die.title.trim().length > 0 && ` - ${die.title}`}</span>
                                    <span>{die.result && ` =  ${die.result}`}</span>
                                </div>
                            ))}
                        </>
                    </ReadMore>
                </div>
                <div>
                    {rollTitle.trim().length > 0
                        ? <span>
                            Roll for: <span className="text-[var(--text-h)]">{rollTitle}</span>
                        </span>
                        : ""
                    }
                </div>
                <div>
                    <span className={
                        !newResult || newResult === 0
                            ? "text-[var(--text-h)]"
                            : newResult > 0 && newResult < 5
                                ? styles.textD4
                                : newResult >= 5 && newResult < 10
                                    ? styles.textD6
                                    : newResult >= 10 && newResult < 15
                                        ? styles.textD8
                                        : newResult >= 15 && newResult < 20
                                            ? styles.textD10
                                            : styles.textD12
                    }>
                        {newResult > 0 && <span className="pr-1">Result:</span>}

                    </span>
                    <span className="text-[var(--hover)] ml-2">
                        {newResult === 0
                            ? `Botch! with ${dice.length} dice`
                            : newResult ?? "--"}
                    </span>
                </div>
                {bestDice.length > 0 ?
                    (

                        bestDice.map((bestDie) => (
                            <div key={bestDie} className="text-[var(--muted)]">

                                <FontAwesomeIcon className={newResult > 0 && newResult < 5
                                    ? styles.textD4
                                    : newResult >= 5 && newResult < 10
                                        ? styles.textD6
                                        : newResult >= 10 && newResult < 15
                                            ? styles.textD8
                                            : newResult >= 15 && newResult < 20
                                                ? styles.textD10
                                                : styles.textD12} icon={faCircleRight} />
                                {bestDie}
                            </div>
                        ))
                    )
                    : <></>
                }
            </div>
        </>
    );
};
