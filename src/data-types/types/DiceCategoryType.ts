import type { DiceType } from "./DiceType";

export type DiceCategoryType = {
    id: string;
    title: string;
    diceList: DiceType[];
    canEditDiceList?: boolean;
    canEditNegativeAttribute?: boolean;
}