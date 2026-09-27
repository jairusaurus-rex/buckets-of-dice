import {
    createContext,
    use,
    useState,
    type ReactNode
} from "react";
import type { UserType } from "../data-types/types/UserType";

type UserContextValue = {
    user: UserType | null;
    isLoggedIn: boolean;
    login: (user: UserType) => void;
    logout: () => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);

    const login = (authenticatedUser: UserType) => {
        setUser(authenticatedUser);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                isLoggedIn: user !== null,
                login,
                logout
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