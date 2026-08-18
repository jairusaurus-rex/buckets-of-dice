import type { DiceType } from "../../commons/types/DiceType";
import { useDiceRoller } from "../../contexts/DiceRollerContext";
import { AddDiceByRank } from "./AddDiceByRank";
import DieCard from "./DiceCard";

type DicePoolProps = {
  category: string
};

export const DicePool = ({category} : DicePoolProps) => {
    const { dispatch, diceGroup } = useDiceRoller();
    const index = diceGroup.findIndex((group) => {
        return group.id = category
    })
    let dice: DiceType[] = []
    if(index >= 0){
        dice = diceGroup[index].diceList
    }else{
        dice = []
    }

    console.log(dice);
    const handleAddDice = (rank: number) => {
        dispatch({ type: "ADD", rank, category: category });
    }
     const handleClear = () => {

     }
     const handleRoll = () => {

     }
     const handleRemoveDice = (id: string) => {
        dispatch({ type: "REMOVE", id, category: category });
     }      
     const handleUpDiceRank = (id: string) => {
        dispatch({ type: "UP_RANK", id, category: category });
     }
     const handleDownDiceRank = (id: string) => {
        dispatch({ type: "DOWN_RANK", id, category: category });
     }
     const handleChangeDiceTitle = () => {

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
                    className="w-full p-2 rounded border border-[var(--border)] bg-[var(--bg)]"
                />

                <button
                    className="w-full p-2 rounded border border-[var(--border)]"
                    onClick={handleRoll}
                >
                    Roll
                </button>

                <button
                    className="w-full p-2 rounded border border-[var(--border)]"
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
