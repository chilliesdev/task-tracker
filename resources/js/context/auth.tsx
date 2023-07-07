import React, { useState, createContext } from "react";
import { AuthContextType, AuthProviderProps } from "./types/auth.type";

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
