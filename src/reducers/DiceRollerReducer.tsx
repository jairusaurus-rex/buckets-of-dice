import type { DiceActionsType } from "../commons/types/DiceActionsType";
import type { DiceType } from "../commons/types/DiceType";

const DiceRollerReducer = (dice: DiceType[], action: DiceActionsType) => {

    switch (action.type) {
        case "ADD": {

            return [
                ...dice, 
                action.payload
            ];
        }

        case "REMOVE": {
            return dice.filter((item) => item.id !== action.payload.id);
        }

        

        default:
            return dice;
    }
};

export default DiceRollerReducer;