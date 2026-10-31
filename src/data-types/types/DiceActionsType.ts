
import type { DiceType } from "./DiceType";
import type { DiceCategoryType } from "./DiceCategoryType";

export type DiceActionsType = {
    type: string;
    id? : string;
    rank? : number;
    category? : string;
    title? : string;
    diceList?: DiceType[];
    diceCategories?: DiceCategoryType[];
    result?: number;
}