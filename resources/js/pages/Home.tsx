import React, { useContext, useEffect, useState } from "react";
import { Button, SearchBox, TaskGroup } from "../components";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Task } from "../api/types";
import { TaskContext } from "../context/task";

export default function Home() {
    const location = useLocation();

    const { data, isLoading } = useContext(TaskContext);

    const tasks: Task[] | [] = data?.data.data || [];

    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Tasks</h1>
                <Button size="sm">
                    <Link
                        to="/create"
                        state={{
                            previousLocation: location,
                        }}
                    >
                        Create
                    </Link>
                </Button>
            </div>
            <div>
                <SearchBox />
            </div>
            <div className="flex overflow-auto">
                <TaskGroup isLoading={isLoading} status="todo" tasks={tasks} />
                <TaskGroup
                    isLoading={isLoading}
                    status="in-progress"
                    tasks={tasks}
                />
                <TaskGroup
                    isLoading={isLoading}
                    status="blocked"
                    tasks={tasks}
                />
                <TaskGroup
                    isLoading={isLoading}
                    status="completed"
                    tasks={tasks}
                />
            </div>
            <Outlet />
        </>
    );
}
