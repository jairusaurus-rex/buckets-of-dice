import type { DiceType } from "../../data-types/types/DiceType";
import { useDiceRoller } from "../../contexts/DiceRollerContext";
import { AddDiceByRank } from "./AddDiceByRank";
import DieCard from "./DiceCard";
import { DiceRollerReducerActions } from "../../data-types/enums/dice-roller-reducer-action-enum";
import styles from "./DiceRoller.module.css";

type DicePoolProps = {
  category: string
};

export const DicePool = ({category} : DicePoolProps) => {
    const { dispatch, diceGroup } = useDiceRoller();
    const index = diceGroup.findIndex((group) => group.id === category)
    let dice: DiceType[] = [];
    let result: number | undefined = 0;
    if(index >= 0){
        dice = diceGroup[index].diceList
        result = diceGroup[index].result
    }

    const handleAddDice = (rank: number) => {
        dispatch({ type: DiceRollerReducerActions.ADD, rank, category: category });
    }
     const handleClear = () => {

     }
     const handleRoll = () => {
        dispatch({ type: DiceRollerReducerActions.ROLL, category: category });
     }
     const handleRemoveDice = (id: string) => {
        dispatch({ type: DiceRollerReducerActions.REMOVE, id, category: category });
     }      
     const handleUpDiceRank = (id: string) => {
        dispatch({ type: DiceRollerReducerActions.UP_RANK, id, category: category });
     }
     const handleDownDiceRank = (id: string) => {
        dispatch({ type:  DiceRollerReducerActions.DOWN_RANK, id, category: category });
     }
     const handleChangeDiceTitle = (id: string, title: string) => {
        dispatch({ type:  DiceRollerReducerActions.CHANGE_TITLE, id, title, category: category });
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
                    type="text"
                    placeholder="Reason for roll..."
                    className="w-full p-2 rounded border border-[var(--border)] bg-[var(--bg)] "
                />

                <button
                    className={styles.diceButton}
                    onClick={handleRoll}
                >
                    Roll
                </button>
                <div className="text-center text-2xl">
                    <span className=" text-[var(--text)]">Result: </span>
                    <span className="text-[var(--hover)] font-bold">{result ?? "--"}</span>
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
