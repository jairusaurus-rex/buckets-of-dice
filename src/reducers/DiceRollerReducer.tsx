import type { DiceActionsType } from "../commons/types/DiceActionsType";
import type { DiceCategoryType } from "../commons/types/DiceCategoryType";
import type { DiceType } from "../commons/types/DiceType";

const DiceRollerReducer = (diceCategories: DiceCategoryType[], action: DiceActionsType) => {

    switch (action.type) {
        case "ADD": {
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

        case "REMOVE": {
            return diceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        diceList: item.diceList.filter((item) => item.id !== action.id)
                    }
                    : item
            );
        }

        case "UP_RANK": {
            return diceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        diceList: item.diceList.map(die => 
                            die.id === action.id && die.rank < 12
                                ? {
                                    ...die,
                                   rank: die.rank = die.rank + 2
                                }
                                : die
                        )
                    }
                    : item
            );
        }
        case "DOWN_RANK": {
            return diceCategories.map(item =>
                item.id === action.category
                    ? {
                        ...item,
                        diceList: item.diceList.map(die => 
                            die.id === action.id && die.rank > 4
                                ? {
                                    ...die,
                                   rank: die.rank = die.rank - 2
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