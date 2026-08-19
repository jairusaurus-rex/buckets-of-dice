import { DiceRollerReducerActions } from "../data-types/enums/dice-roller-reducer-action-enum";
import type { DiceActionsType } from "../data-types/types/DiceActionsType";
import type { DiceCategoryType } from "../data-types/types/DiceCategoryType";
import type { DiceType } from "../data-types/types/DiceType";

const DiceRollerReducer = (diceCategories: DiceCategoryType[], action: DiceActionsType) => {

    switch (action.type) {
        case DiceRollerReducerActions.ADD: {
            const newDice: DiceType = {
                id: Date.now().toString(),
                title: ``,
                rank: action.rank ?? 4,
            };
            return diceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        diceList: [
                            ...item.diceList,
                            newDice
                        ]
                    }
                    : item
            );
        }

        case DiceRollerReducerActions.REMOVE: {
            return diceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        diceList: item.diceList.filter((item) => item.id !== action.id)
                    }
                    : item
            );
        }

        case DiceRollerReducerActions.UP_RANK: {
            return diceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        diceList: item.diceList.map(die => 
                            die.id === action.id && die.rank < 12
                                ? {
                                    ...die,
                                   rank: die.rank + 2
                                }
                                : die
                        )
                    }
                    : item
            );
        }
        case DiceRollerReducerActions.DOWN_RANK: {
            return diceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        diceList: item.diceList.map(die => 
                            die.id === action.id && die.rank > 4
                                ? {
                                    ...die,
                                   rank:  die.rank - 2
                                }
                                : die
                        )
                    }
                    : item
            );
        }

        case DiceRollerReducerActions.CHANGE_TITLE: {
            return diceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        diceList: item.diceList.map(die => 
                            die.id === action.id && die.rank > 4
                                ? {
                                    ...die,
                                   title: action.title ?? item.title
                                }
                                : die
                        )
                    }
                    : item
            );
        }

        default:
            return diceCategories;
    }
};

export default DiceRollerReducer;