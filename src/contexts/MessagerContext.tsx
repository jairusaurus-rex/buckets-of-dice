import {
    createContext,
    use,
    useReducer,
    type Dispatch,
    type ReactNode
} from "react";
import type { MessageType } from "../data-types/types/MessageType";
import MessagerReducer from "../reducers/MessagerReducer";




type MessagerContextValue = {
    messageGroup: MessageType[];
    dispatch: Dispatch<any>;
};

const MessagerContext = createContext<MessagerContextValue | null>(null);

const initialItems: MessageType[] = [];

export const MessagerProvider = ({ children }: { children: ReactNode }) => {

    const [items, dispatch] = useReducer(
        MessagerReducer,
        initialItems
    );

    return (
        <MessagerContext.Provider
            value={{
                messageGroup: items,
                dispatch
            }}
        >
            {children}
        </MessagerContext.Provider>
    );
};

export const useMessager = () => {

    const context = use(MessagerContext);

    if (!context) {
        throw new Error(
            "useMessager must be used inside useMessagerProvider"
        );
    }

    return context;
};