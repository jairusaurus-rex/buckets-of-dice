import {
    createContext,
    use,
    useState,
    type ReactNode
} from "react";
import type { UserType } from "../data-types/types/UserType";
import type { UserOptionType } from "../data-types/types/UserOptionType";

type UserContextValue = {
    user: UserType | null;
    isLoggedIn: boolean;
    login: (user: UserType) => void;
    logout: () => void;
    userOptions: UserOptionType;
    updateUserOption: (option: keyof UserOptionType, value: boolean) => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [userOptions, setUserOptions] = useState<UserOptionType>({
        MessageSound: false,
        DisplayDiceRate: false
    });

    const login = (authenticatedUser: UserType) => {
        setUser(authenticatedUser);
    };

    const logout = () => {
        setUser(null);
    };

    const updateUserOption = (option: keyof UserOptionType, value: boolean) => {
        setUserOptions((currentOptions) => ({
            ...currentOptions,
            [option]: value
        }));
    };

    return (
        <UserContext.Provider
            value={{
                user,
                isLoggedIn: user !== null,
                login,
                logout,
                userOptions,
                updateUserOption
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = use(UserContext);

    if (!context) {
        throw new Error("useUser must be used inside UserProvider");
    }

    return context;
};