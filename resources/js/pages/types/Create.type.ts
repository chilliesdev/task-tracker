import { TaskStatus } from "../../api/types";

export type CreateTaskInput = {
    title: string;
    description: string;
    status: TaskStatus;
};
