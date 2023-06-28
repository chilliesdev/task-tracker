import React, { useState, createContext } from "react";
import { LoginResponseData } from "../pages/types";

type AuthContextType = {
    token: string | null;
    user: LoginResponseData | null;
    setToken: (token: any) => void;
    setUser: (user: any) => void;
};

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
    token: localStorage.getItem("token"),
    user: null,
    setToken: () => {},
    setUser: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
    // app session
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
