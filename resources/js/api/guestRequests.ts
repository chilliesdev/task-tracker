import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { SERVER_URL } from "../config";
import { LoginInput, LoginResponseData, RegisterInput } from "../pages/types";
import { responseSuccess, resposeWithToken } from "./types";

export async function registerRequest(
    data: RegisterInput
): Promise<AxiosResponse<responseSuccess>> {
    const config: AxiosRequestConfig<RegisterInput> = {
        baseURL: SERVER_URL,
        method: "POST",
        url: "/register",
        data,
    };

    return await axios(config);
}

export async function loginRequest(
    data: LoginInput
): Promise<AxiosResponse<resposeWithToken<LoginResponseData>>> {
    const config: AxiosRequestConfig<LoginInput> = {
        baseURL: SERVER_URL,
        method: "POST",
        url: "/login",
        data,
    };

    return await axios(config);
}
