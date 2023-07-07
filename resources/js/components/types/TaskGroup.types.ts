import { Task, TaskStatus } from "../../api/types";

export type TaskGroupProps = {
    status: TaskStatus;
    tasks: Task[] | [];
    isLoading: Boolean;
};
