import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { SERVER_URL } from "../config";
import { responseError, responseSuccess } from "./types";

export async function logout(
    token: string
): Promise<AxiosResponse<responseSuccess>> {
    const config: AxiosRequestConfig = {
        baseURL: SERVER_URL,
        method: "GET",
        url: "/logout",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios(config);
}

export async function getUser(
    token: string
): Promise<AxiosResponse<responseSuccess>> {
    const config: AxiosRequestConfig = {
        baseURL: SERVER_URL,
        method: "GET",
        url: "/user",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios(config);
}
