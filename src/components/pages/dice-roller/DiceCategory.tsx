import type { DiceType } from "../../../data-types/types/DiceType";
import { AddDiceByRank } from "./AddDiceByRank";
import { DiceCategories } from "../../../data-types/enums/dice-categories-enum";
import { DiceRollerReducerActions } from "../../../data-types/enums/dice-roller-reducer-action-enum";
import { useDiceRoller } from "../../../contexts/DiceRollerContext";
import DieCard from "./DiceCard";
import { useUser } from "../../../contexts/UserContext";
import add_dice from "../../../assets/sounds/add_dice.mp3";


type DiceCategoryProps = {
    category: string,
    canEdit?: boolean
};

export const DiceCategory = ({ category, canEdit = true }: DiceCategoryProps) => {
    const { dispatch, diceGroup } = useDiceRoller();
    const index = diceGroup.findIndex((group) => group.id === category);
    const { userOptions } = useUser();
    let dice: DiceType[] = [];
    if (index >= 0) {
        dice = diceGroup[index].diceList
    }

    const handleAddDice = (rank: number) => {
        dispatch({ type: DiceRollerReducerActions.ADD, rank, category: category });
        if (userOptions.MessageSound) {
            const audio = new Audio(add_dice);
            void audio.play().catch((error: unknown) => {
                console.warn("Dice roll sound playback failed:", error);
            });
        }
    }
    const handleDiceClick = (rank: number, title: string) => {
        dispatch({ type: DiceRollerReducerActions.ADD, rank, title, category: DiceCategories.POOL });
        if (userOptions.MessageSound) {
            const audio = new Audio(add_dice);
            void audio.play().catch((error: unknown) => {
                console.warn("Dice roll sound playback failed:", error);
            });
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
        <div className="w-full p-1 m-0 bg-[var(--code-bg)] ">
            {
                canEdit && <div className="p-1"><AddDiceByRank addDice={handleAddDice} /></div>
            }
            <div className="flex flex-wrap items-start justify-start gap-2 md:flex-col md:items-center md:justify-center">

                {dice.map((die) => (
                    <span key={die.id} className="shrink-0">
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
