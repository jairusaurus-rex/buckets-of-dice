import ReadMore from "../components/commons/ReadMore"
import type { DiceType } from "../data-types/types/DiceType"
import styles from "./Util.module.css";

export const assembleDicePoolResult = (
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
                                    <span>{die.rank && `d${die.rank}`}</span>
                                    <span>{die.title.trim().length > 0 && ` - ${die.title} -`}</span>
                                    <span>{die.result && ` rolled  ${die.result}`}</span>
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
                        Result:

                    </span>
                    <span className="text-[var(--hover)] ml-2">
                        {newResult === 0
                            ? `Botch! with ${dice.length} dice`
                            : newResult ?? "--"}
                    </span>
                </div>
                {bestDice.length > 0 && <div className="text-[var(--muted)]">{bestDice.join(" -or- ")}</div>}
            </div>
        </>
    );
};
