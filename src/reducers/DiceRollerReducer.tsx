import { DiceRollerReducerActions } from "../data-types/enums/dice-roller-reducer-action-enum";
import type { DiceActionsType } from "../data-types/types/DiceActionsType";
import type { DiceCategoryType } from "../data-types/types/DiceCategoryType";
import type { DiceType } from "../data-types/types/DiceType";

const DiceRollerReducer = (diceCategories: DiceCategoryType[], action: DiceActionsType) => {
    const getRandomInt = (max: number): number => {
        return Math.floor(Math.random() * max);
    }

    const getCategoryResult = (diceList: DiceType[]): number => {
        const results = diceList
            .map((die) => die.result)
            .filter((result): result is number => result !== undefined);

        if (results.length === 0) {
            return 0;
        }

        if (results.every((result) => result === 1)) {
            return 0;
        }

        const resultCounts = new Map<number, number>();

        for (const result of results) {
            resultCounts.set(result, (resultCounts.get(result) ?? 0) + 1);
        }

        const highestResult = Math.max(...results);

        const highestDouble = Math.max(
            0,
            ...Array.from(resultCounts.entries())
                .filter(([, count]) => count >= 2)
                .map(([result]) => result * 2)
        );

        return Math.max(highestResult, highestDouble);
    };

    const getBestDiceList = (
        diceList: DiceType[],
        groupResult: number
    ): string[] => {
        const bestDice: string[] = [];

        if (groupResult === 0) {
            return bestDice;
        }

        // Individual dice matching the category result
        for (const die of diceList) {
            if (
                die.result === groupResult &&
                die.title.trim() !== ""
            ) {
                bestDice.push(die.title);
            }
        }

        // Doubles whose results add up to the category result
        for (let firstIndex = 0; firstIndex < diceList.length; firstIndex++) {
            for (let secondIndex = firstIndex + 1; secondIndex < diceList.length; secondIndex++
            ) {
                const firstDie = diceList[firstIndex];
                const secondDie = diceList[secondIndex];

                if (
                    firstDie.result !== undefined &&
                    secondDie.result !== undefined &&
                    firstDie.result === secondDie.result &&
                    firstDie.result + secondDie.result === groupResult
                ) {
                    const titles = [firstDie.title, secondDie.title]
                        .filter((title) => title.trim() !== "");

                    if (titles.length === 2) {
                        bestDice.push(titles.join(" & "));
                    }
                }
            }
        }
        return bestDice;
    };


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

                const diceList = item.diceList.map((die) => ({
                    ...die,
                    result: getRandomInt(die.rank) + 1,
                }));

                const result = getCategoryResult(diceList);
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