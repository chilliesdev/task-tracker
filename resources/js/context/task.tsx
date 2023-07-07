import React from "react";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getAllTasks } from "../api";
import { AuthContext } from ".";
import { TaskContextType, TaskProviderProps } from "./types";

export const TaskContext = createContext<TaskContextType>({
    data: undefined,
    isLoading: false,
    refetch: () => {},
});

export function TaskProvider({ children }: TaskProviderProps) {
    const { token } = useContext(AuthContext);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["tasks", token!],
        queryFn: () => getAllTasks(token!),
        refetchOnWindowFocus: false,
    });

    return (
        <TaskContext.Provider
            value={{
                data,
                isLoading,
                refetch,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
