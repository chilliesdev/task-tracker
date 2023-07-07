import {
    RefetchOptions,
    RefetchQueryFilters,
    QueryObserverResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { responseSuccess, Task } from "../../api/types";

export type TaskContextType = {
    data: AxiosResponse<responseSuccess<Task[]>, any> | undefined;
    isLoading: boolean;
    refetch: any;
};

export type TaskProviderProps = {
    children: React.ReactNode;
};
