import type { DiceType } from "./DiceType";

export type DiceCategoryType = {
    id: string;
    title: string;
    diceList: DiceType[];
    result?: number;
    canEditDiceList?: boolean;
    canEditNegativeAttribute?: boolean;
    bestDice?: string[];
}