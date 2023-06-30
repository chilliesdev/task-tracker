import React from "react";
import { TaskCardProps } from "./types";

export default function TaskCard({ title, username, id }: TaskCardProps) {
    return (
        <div className="w-72 shadow-sm bg-white border-2">
            <p>{title}</p>
            <p>{username}</p>
            <p>{id}</p>
        </div>
    );
}
