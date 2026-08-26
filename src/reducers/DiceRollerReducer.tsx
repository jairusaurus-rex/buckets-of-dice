import { DiceRollerReducerActions } from "../data-types/enums/dice-roller-reducer-action-enum";
import type { DiceActionsType } from "../data-types/types/DiceActionsType";
import type { DiceCategoryType } from "../data-types/types/DiceCategoryType";
import type { DiceType } from "../data-types/types/DiceType";
import { getBestDiceList, getCategoryResult } from "../utils/diceRoller";

const DiceRollerReducer = (diceCategories: DiceCategoryType[], action: DiceActionsType) => {
    switch (action.type) {
        case DiceRollerReducerActions.ADD: {
            const newDice: DiceType = {
                id: Date.now().toString(),
                title: action.title ?? "",
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
                                    rank: die.rank - 2
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
                            die.id === action.id
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

        case DiceRollerReducerActions.ROLL: {
            return diceCategories.map((item) => {
                if (item.id !== action.category) {
                    return item;
                }

                const diceList = action.diceList ?? item.diceList;
                const result = action.result ?? getCategoryResult(diceList);
                const bestDice = getBestDiceList(diceList, result);

                return {
                    ...item,
                    diceList,
                    result,
                    bestDice,
                };
            });
        }

        case DiceRollerReducerActions.CLEAR: {
            return diceCategories.map((item) => {
                if (item.id !== action.category) {
                    return item;
                }
                return {
                    ...item,
                    diceList: []
                }
            });
        }

        default:
            return diceCategories;
    }
};

export default DiceRollerReducer;