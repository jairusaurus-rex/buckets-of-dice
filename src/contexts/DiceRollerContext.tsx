import {
    createContext,
    use,
    useReducer,
    type Dispatch,
    type ReactNode
} from "react";

import DiceRollerReducer from "../reducers/DiceRollerReducer";
import type { DiceType } from "../commons/types/DiceType";



type DiceContextValue = {
    dice: DiceType[];
    dispatch: Dispatch<any>;
};

const DiceRollerContext = createContext<DiceContextValue | null>(null);

const initialItems: DiceType[] = [];

export const DiceRollerProvider = ({ children }: { children: ReactNode }) => {

    const [items, dispatch] = useReducer(
        DiceRollerReducer,
        initialItems
    );

    return (
        <DiceRollerContext.Provider
            value={{
                dice: items,
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