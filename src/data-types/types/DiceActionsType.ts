
import type { DiceType } from "./DiceType";

export type DiceActionsType = {
    type: string;
    id? : string;
    rank? : number;
    category? : string;
    title? : string;
    diceList?: DiceType[];
    result?: number;
}