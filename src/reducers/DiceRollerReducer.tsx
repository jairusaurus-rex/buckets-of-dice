import { DiceRollerReducerActions } from "../data-types/enums/dice-roller-reducer-action-enum";
import type { DiceActionsType } from "../data-types/types/DiceActionsType";
import type { DiceCategoryType } from "../data-types/types/DiceCategoryType";
import type { DiceType } from "../data-types/types/DiceType";

const DiceRollerReducer = (diceCategories: DiceCategoryType[], action: DiceActionsType) => {
    const getRandomInt = (max: number): number => {
        return Math.floor(Math.random() * max);
    }

    const getCategoryResult = (diceList: DiceType[]): number => {
        return diceList.reduce((acc, die) => acc + (die.result ?? 0), 0);
    }

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
            const newDiceCategories = diceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        diceList: item.diceList.map(die => (
                            {
                                ...die,
                                result: getRandomInt(die.rank) + 1

                            })
                        ),
                    }
                    : item
            );

            return newDiceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        result: getCategoryResult(item.diceList)
                    }
                    : item
            );
        }

        default:
            return diceCategories;
    }
};

export default DiceRollerReducer;