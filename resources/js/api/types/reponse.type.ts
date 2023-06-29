export type responseError<T = any> = {
    message: string;
    data?: T;
};

export type responseSuccess<T = any> = {
    message: string;
    data?: T;
};

export type resposeWithToken<T = any> = {
    message: string;
    data?: T;
    token: string;
    token_type: "bearer";
};
