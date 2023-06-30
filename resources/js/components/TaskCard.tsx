import React from "react";
import { TaskCardProps } from "./types";
import ProfileImage from "./ProfileImage";
import { BiTask } from "react-icons/bi";

export default function TaskCard({ title, username, id }: TaskCardProps) {
    return (
        <div
            style={{
                border: "1px",
            }}
            className="w-72 shadow-lg mb-2 bg-white border-gray-950 border-r-2 p-4 hover:bg-gray-100 cursor-pointer"
        >
            <h6 className="font-light">{title}</h6>
            <div className="flex justify-between">
                <p className="flex justify-start items-center">
                    <BiTask className="text-green-600 inline mr-1" />{" "}
                    <span className="font-medium">{id}</span>
                </p>
                <ProfileImage name={username} className="border-0" size="sm" />
            </div>
        </div>
    );
}
