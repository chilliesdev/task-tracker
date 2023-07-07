import { LoginResponseData } from "../../pages/types";

export type AuthContextType = {
    token: string | null;
    user: LoginResponseData | null;
    setToken: (token: any) => void;
    setUser: (user: any) => void;
};

export type AuthProviderProps = {
    children: React.ReactNode;
};
