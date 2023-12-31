import React, { useEffect, useState } from "react";
import { TaskGroupProps } from "./types";
import { Task } from "../api/types";
import { TaskCard } from ".";
import Skeleton from "react-loading-skeleton";

export default function TaskGroup({
    status,
    tasks,
    isLoading,
}: TaskGroupProps) {
    const [filteredTask, setFilteredTask] = useState<Task[] | []>([]);

    useEffect(() => {
        const filtered = tasks.filter((task) => task.status === status);

        setFilteredTask(filtered);
    }, [tasks]);

    return (
        <div
            style={{
                minWidth: "312px",
                minHeight: "500px",
            }}
            className="px-3 font-bold bg-secondary border-0 border-opacity-0 rounded-sm mr-3"
        >
            {isLoading ? (
                <Skeleton className="h-full" />
            ) : (
                <>
                    <h5 className="uppercase text-sm text-gray-700 block py-5">{`${status} ${
                        filteredTask.length > 0 ? filteredTask.length : ""
                    }  TASKS`}</h5>
                    {filteredTask.map((task) => (
                        <TaskCard
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            username={task.user.name}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
