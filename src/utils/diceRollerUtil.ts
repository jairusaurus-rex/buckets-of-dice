import type { DiceType } from "../data-types/types/DiceType";

export const getCategoryResult = (diceList: DiceType[]): number => {
    const results = diceList
        .map((die) => die.result)
        .filter((result): result is number => result !== undefined);

    if (results.length === 0 || results.every((result) => result === 1)) {
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

export const getBestDiceList = (
    diceList: DiceType[],
    groupResult: number
): string[] => {
    const bestDice: string[] = [];

    if (groupResult === 0) {
        return bestDice;
    }

    for (const die of diceList) {
        if (die.result === groupResult && die.title.trim() !== "") {
            bestDice.push(die.title);
        }
    }

    for (let firstIndex = 0; firstIndex < diceList.length; firstIndex++) {
        for (
            let secondIndex = firstIndex + 1;
            secondIndex < diceList.length;
            secondIndex++
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

export const rollDice = (dice: DiceType[]) => {
    const diceList = dice.map((die) => ({
        ...die,
        result: Math.floor(Math.random() * die.rank) + 1,
    }));

    return {
        diceList,
        result: getCategoryResult(diceList),
    };
};
