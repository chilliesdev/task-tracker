import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { SERVER_URL } from "../config";
import { CreateTasksParam, Task, responseSuccess } from "./types";
import { CreateTaskInput } from "../pages/types";

export async function createTasks({
    token,
    data,
}: CreateTasksParam): Promise<AxiosResponse<responseSuccess<Task>>> {
    const config: AxiosRequestConfig<CreateTaskInput> = {
        baseURL: SERVER_URL,
        method: "POST",
        url: "/tasks",
        data,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios(config);
}

export async function getAllTasks(
    token: string
): Promise<AxiosResponse<responseSuccess<Task[]>>> {
    const config: AxiosRequestConfig = {
        baseURL: SERVER_URL,
        method: "GET",
        url: "/tasks",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios(config);
}

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
