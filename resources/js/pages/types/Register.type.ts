export type RegisterInput = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export type RegisterServerValidationError = {
    name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
};
