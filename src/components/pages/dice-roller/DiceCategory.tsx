import type { DiceType } from "../../../data-types/types/DiceType";
import { useDiceRoller } from "../../../contexts/DiceRollerContext";
import { AddDiceByRank } from "./AddDiceByRank";
import DieCard from "./DiceCard";
import { DiceRollerReducerActions } from "../../../data-types/enums/dice-roller-reducer-action-enum";
import { DiceCategories } from "../../../data-types/enums/dice-categories-enum";

type DiceCategoryProps = {
    category: string,
    canEdit?: boolean
};

export const DiceCategory = ({ category, canEdit = true }: DiceCategoryProps) => {
    const { dispatch, diceGroup } = useDiceRoller();
    const index = diceGroup.findIndex((group) => group.id === category)
    let dice: DiceType[] = [];
    if (index >= 0) {
        dice = diceGroup[index].diceList
    }

    const handleAddDice = (rank: number) => {
        dispatch({ type: DiceRollerReducerActions.ADD, rank, category: category });
    }
    const handleDiceClick = (rank: number, title: string) => {
        dispatch({ type: DiceRollerReducerActions.ADD, rank, title, category: DiceCategories.POOL });
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
        <div className="w-full p-1 m-0 bg-[var(--code-bg)] ">
            {
                canEdit && <div className="p-1"><AddDiceByRank addDice={handleAddDice} /></div>
            }
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
                            onDiceClick={handleDiceClick}
                        ></DieCard>
                    </span>
                ))}
            </div>
        </div>
    );
}
