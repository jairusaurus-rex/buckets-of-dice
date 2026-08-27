import type { DiceType } from "../../data-types/types/DiceType";
import { useDiceRoller } from "../../contexts/DiceRollerContext";
import { AddDiceByRank } from "./AddDiceByRank";
import DieCard from "./DiceCard";
import { DiceRollerReducerActions } from "../../data-types/enums/dice-roller-reducer-action-enum";
import styles from "./DiceRoller.module.css";
import { useState } from "react";
import { useMessager } from "../../contexts/MessagerContext";
import { MessagerReducerActions } from "../../data-types/enums/messager-reducer-action-enum";
import { getBestDiceList, rollDice } from "../../utils/diceRollerUtil";
import { AssembleDicePoolResult } from "../../utils/messageAssemblyUtil";

type DicePoolProps = {
    category: string
};

export const DicePool = ({ category }: DicePoolProps) => {
    const [rollTitle, seRollTitle] = useState("");
    const { dispatch, diceGroup } = useDiceRoller();
    const { messageDispatch } = useMessager();
    const index = diceGroup.findIndex((group) => group.id === category)
    let dice: DiceType[] = [];
    let result: number | undefined = 0;
    if (index >= 0) {
        dice = diceGroup[index].diceList
        result = diceGroup[index].result
    }
    const handleRollTitleChange = (title: string) => {
        seRollTitle(title);
    }
    const handleAddDice = (rank: number) => {
        dispatch({ type: DiceRollerReducerActions.ADD, rank, category: category });
    }
    const handleClear = () => {
        dispatch({ type: DiceRollerReducerActions.CLEAR, category: category });
        seRollTitle("");
    }
    const handleRoll = () => {
        if (dice.length === 0) {
            return
        }
        const newRoll = rollDice(dice);
        const newResult = newRoll.result;
        const bestDice = getBestDiceList(newRoll.diceList, newResult);

        dispatch({
            type: DiceRollerReducerActions.ROLL,
            category,
            diceList: newRoll.diceList,
            result: newResult,
        });

        const sendMessage = AssembleDicePoolResult(newRoll.diceList, rollTitle, newResult, bestDice);
         

        messageDispatch({ type: MessagerReducerActions.ADD_JSX, jsx: sendMessage });
    }
    const handleRemoveDice = (id: string) => {
        dispatch({ type: DiceRollerReducerActions.REMOVE, id, category: category });
    }
    const handleUpDiceRank = (id: string) => {
        dispatch({ type: DiceRollerReducerActions.UP_RANK, id, category: category });
    }
    const handleDownDiceRank = (id: string) => {
        dispatch({ type: DiceRollerReducerActions.DOWN_RANK, id, category: category });
    }
    const handleChangeDiceTitle = (id: string, title: string) => {
        dispatch({ type: DiceRollerReducerActions.CHANGE_TITLE, id, title, category: category });
    }

    return (
        <div className="w-full p-1 m-0">
            <div className="w-full rounded shadow-lg pt-0 px-2 pb-2 bg-[var(--code-bg)] border border-[var(--border)]">

                <AddDiceByRank addDice={handleAddDice} />

                <div className="flex gap-4 p-2">

                    {/* Dice */}
                    <div className="flex-1 flex flex-wrap gap-2 content-start">
                        {dice.map((die) => (
                            <span
                                key={die.id}
                            >
                                <DieCard
                                    die={die}
                                    onRemoveDice={handleRemoveDice}
                                    onUpDiceRank={handleUpDiceRank}
                                    onDownDiceRank={handleDownDiceRank}
                                    onChangeDiceTitle={handleChangeDiceTitle}
                                ></DieCard>
                            </span>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="w-48 flex flex-col gap-2">

                        <input
                            value={rollTitle}
                            type="text"
                            maxLength={50}
                            placeholder="Reason for roll..."
                            onChange={(e) => handleRollTitleChange(e.target.value)}
                            className={`
                                w-full 
                                p-2 
                                rounded 
                                border 
                                border-[var(--border)] 
                                bg-[var(--bg)] 
                                ${!rollTitle
                                    ? "text-lg"
                                    : rollTitle.length < 20
                                        ? "text-lg"
                                        : rollTitle.length < 25
                                            ? "text-base"
                                            : rollTitle.length < 30
                                                ? "text-sm"
                                                : rollTitle.length < 35
                                                    ? "text-xs"
                                                    : rollTitle.length < 40
                                                        ? "text-[0.625rem]"
                                                        : rollTitle.length < 45
                                                            ? "text-[0.5rem]"
                                                            : "text-[0.375rem]"
                                }
                                    `}
                        />

                        <button
                            className={styles.diceButton}
                            onClick={handleRoll}
                        >
                            Roll
                        </button>
                        <div className="text-center text-2xl">
                            <span className=" text-[var(--text)]">Result: </span>
                            <span className="text-[var(--hover)] font-bold">
                                {result === 0 ? `Botch! with ${dice.length} dice ` : result ?? "--"}
                            </span>
                        </div>
                        <button
                            className={styles.diceButton}
                            onClick={handleClear}
                        >
                            Clear
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
