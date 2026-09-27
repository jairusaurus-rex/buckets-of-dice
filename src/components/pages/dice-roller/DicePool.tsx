import type { DiceType } from "../../../data-types/types/DiceType";
import { AddDiceByRank } from "./AddDiceByRank";
import { DiceRollerReducerActions } from "../../../data-types/enums/dice-roller-reducer-action-enum";
import { getBestDiceList, rollDice } from "../../../utils/diceRollerUtil";
import { MessagerReducerActions } from "../../../data-types/enums/messager-reducer-action-enum";
import { useDiceRoller } from "../../../contexts/DiceRollerContext";
import { useMessager } from "../../../contexts/MessagerContext";
import { useSignalR } from "../../../contexts/SignalRContext";
import { useUser } from "../../../contexts/UserContext";
import { MessageTypeEnum } from "../../../data-types/enums/message-type-enum";
import type { MessageType } from "../../../data-types/types/MessageType";
import { useState } from "react";
import DieCard from "./DiceCard";
import styles from "./DiceRoller.module.css";

type DicePoolProps = {
    category: string
};

export const DicePool = ({ category }: DicePoolProps) => {
    const [rollTitle, setRollTitle] = useState("");
    const { dispatch, diceGroup } = useDiceRoller();
    const { messageDispatch } = useMessager();
    const { isConnected, sendMessage } = useSignalR();
    const { user } = useUser();
    const index = diceGroup.findIndex((group) => group.id === category)
    let dice: DiceType[] = [];
    let result: number | undefined = 0;
    if (index >= 0) {
        dice = diceGroup[index].diceList
        result = diceGroup[index].result
    }
    const handleRollTitleChange = (title: string) => {
        setRollTitle(title);
    }
    const handleAddDice = (rank: number) => {
        dispatch({ type: DiceRollerReducerActions.ADD, rank, category: category });
    }
    const handleClear = () => {
        dispatch({ type: DiceRollerReducerActions.CLEAR, category: category });
        setRollTitle("");
    }
    const handleRoll = async () => {
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

        const message: MessageType = {
            id: crypto.randomUUID(),
            type: MessageTypeEnum.DICE_ROLL,
            content: {
                rollTitle,
                dice: newRoll.diceList,
                result: newResult,
                bestDice,
            },
            timestamp: new Date().toISOString(),
            userId: user?.id ?? "local",
            userName: user?.name ?? "You",
        };
        console.log(message)
        console.log(message.content)
        console.log("First die:", JSON.stringify(message.content.dice[0], null, 2));

        if (isConnected) {
            try {
                await sendMessage(message);
            } catch (error) {
                console.error("SignalR dice roll message failed:", error);
            }
        } else {
            messageDispatch({ type: MessagerReducerActions.ADD_MESSAGE, message });
        }
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

                <div className="flex flex-col gap-4 p-2 md:flex-row">

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
                    <div className="w-full flex flex-col gap-2 md:w-48">

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
