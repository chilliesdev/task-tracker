import React, { useContext, useEffect, useState } from "react";
import { Button, SearchBox, TaskGroup } from "../components";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "../api";
import { AuthContext } from "../context";
import { Task } from "../api/types";

export default function Home() {
    const location = useLocation();

    const { token } = useContext(AuthContext);

    const { data } = useQuery({
        queryKey: ["tasks", token!],
        queryFn: () => getAllTasks(token!),
        refetchOnWindowFocus: true,
    });

    const [tasks, setTasks] = useState<Task[] | []>([]);

    useEffect(() => {
        setTasks(data?.data.data || []);
    }, [data]);

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
                <TaskGroup status="todo" tasks={tasks} />
                <TaskGroup status="in-progress" tasks={tasks} />
                <TaskGroup status="blocked" tasks={tasks} />
                <TaskGroup status="done" tasks={tasks} />
            </div>
            <Outlet />
        </>
    );
}
