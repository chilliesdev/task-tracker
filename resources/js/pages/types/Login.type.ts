export type LoginInput = {
    email: string;
    password: string;
};

export type LoginServerValidationError = {
    email?: string[];
    password?: string[];
};

export type LoginResponseData = {
    id: number;
    email: string;
    name: string;
    email_verified_at: Date | null;
};

export type LocationState = {
    from: {
        pathname: string;
    };
};
