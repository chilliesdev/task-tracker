export type responseError<T = any> = {
    success: false;
    message: string;
    data?: T;
};

export type responseSuccess<T = any> = {
    success: true;
    message: string;
    data?: T;
};

export type resposeWithToken<T = any> = {
    success: true;
    message: string;
    data?: T;
    token: string;
    token_type: "bearer";
};
