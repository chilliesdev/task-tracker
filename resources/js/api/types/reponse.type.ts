import { CreateTaskInput } from "../../pages/types";

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

export type Task = {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    user_id: number;
    created_at: string;
    updated_at: string;
    user: User;
};

export type TaskStatus = "todo" | "in-progress" | "blocked" | "completed";

export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
};

export type CreateTasksParam = {
    token: string;
    data: CreateTaskInput;
};

export type getTaskByIdParam = {
    token: string;
    taskId: number;
};

export type deleteTaskByIdParam = {
    token: string;
    taskId: number;
};
