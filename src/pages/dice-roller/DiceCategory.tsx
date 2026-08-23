import type { DiceType } from "../../data-types/types/DiceType";
import { useDiceRoller } from "../../contexts/DiceRollerContext";
import { AddDiceByRank } from "./AddDiceByRank";
import DieCard from "./DiceCard";
import { DiceRollerReducerActions } from "../../data-types/enums/dice-roller-reducer-action-enum";

type DiceCategoryProps = {
    category: string,
    canEdit?: boolean
};

export const DiceCategory = ({ category, canEdit = true }: DiceCategoryProps) => {
    const { dispatch, diceGroup } = useDiceRoller();
    const index = diceGroup.findIndex((group) => group.id === category)
    let dice: DiceType[] = [];
    let title: string= ""
    if (index >= 0) {
        dice = diceGroup[index].diceList
        title = diceGroup[index].title
    }

    const handleAddDice = (rank: number) => {
        dispatch({ type: DiceRollerReducerActions.ADD, rank, category: category });
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
                {
                    canEdit && <AddDiceByRank addDice={handleAddDice} />
                }

                <div className="text-left text-2xl my-4">
                    {title}
                </div>
                <div className="flex flex-col items-center justify-center gap-2">

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
            </div>
        </div>
    );
}
