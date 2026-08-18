import {
    createContext,
    use,
    useReducer,
    type Dispatch,
    type ReactNode
} from "react";

import DiceRollerReducer from "../reducers/DiceRollerReducer";
import type { DiceCategoryType } from "../commons/types/DiceCategoryType";
import { DiceCategories } from "../commons/enums/dice-categories-enum";




type DiceContextValue = {
    diceGroup: DiceCategoryType[];
    dispatch: Dispatch<any>;
};

const DiceRollerContext = createContext<DiceContextValue | null>(null);

const initialItems: DiceCategoryType[] = [
    {
        id: DiceCategories.POOL,
        title:  DiceCategories.POOL,
        diceList: [],
    }
];

export const DiceRollerProvider = ({ children }: { children: ReactNode }) => {

    const [items, dispatch] = useReducer(
        DiceRollerReducer,
        initialItems
    );

    return (
        <DiceRollerContext.Provider
            value={{
                diceGroup: items,
                dispatch
            }}
        >
            {children}
        </DiceRollerContext.Provider>
    );
};

export const useDiceRoller = () => {

    const context = use(DiceRollerContext);

    if (!context) {
        throw new Error(
            "useDiceRoller must be used inside DiceRollerProvider"
        );
    }

    return context;
};