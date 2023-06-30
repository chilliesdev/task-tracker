import React, { useContext, useEffect, useState } from "react";
import {
    DeletePopup,
    ModalWrapper,
    ProfileImage,
    SelectInput,
} from "../components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "../api";
import { AuthContext } from "../context";
import { Task } from "../api/types";
import Skeleton from "react-loading-skeleton";

export default function Detail() {
    const { id } = useParams();

    const { token } = useContext(AuthContext);

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [task, setTask] = useState<Task>();

    const params = {
        token: token!,
        taskId: parseInt(id!),
    };

    const { data, isLoading } = useQuery({
        queryKey: ["task", params],
        queryFn: () => getTaskById(params),
    });

    useEffect(() => {
        setTask(data?.data.data);
    }, [data]);

    return (
        <ModalWrapper
            title=""
            footer={false}
            secondaryButton={{
                name: "Delete",
                disabled: isLoading,
                onClick: () => setShowDeletePopup(true),
            }}
        >
            {showDeletePopup && (
                <DeletePopup id={id} close={() => setShowDeletePopup(false)} />
            )}
            <h2 className="text-5xl pb-4">{task?.title || <Skeleton />}</h2>
            <div className="mb-4">
                <h2 className="font-semibold">Description</h2>
                {task?.description ? (
                    <div
                        className="bg-secondary p-4"
                        dangerouslySetInnerHTML={{
                            __html: task?.description || "",
                        }}
                    ></div>
                ) : (
                    <Skeleton />
                )}
            </div>
            <h2 className="font-semibold">Status</h2>
            {!isLoading ? (
                <>
                    {" "}
                    <SelectInput
                        disabled={true}
                        defaultValue={task?.status}
                        options={[
                            {
                                name: "TODO",
                                value: "todo",
                            },
                            {
                                name: "IN PROGRESS",
                                value: "in-progress",
                            },
                            {
                                name: "BLOCKED",
                                value: "blocked",
                            },
                            {
                                name: "DONE",
                                value: "completed",
                            },
                        ]}
                        // label="Status"
                        id="status"
                        name="status"
                    />
                </>
            ) : (
                <Skeleton />
            )}

            <div className="font-semibold">Owner</div>

            {!isLoading ? (
                <>
                    <div className="flex items-center mb-3">
                        <ProfileImage name={task?.user.name} />
                        <span className="pl-3">{task?.user.name}</span>
                    </div>
                    <div className="text-xs pt-3">
                        {task?.created_at &&
                            new Date(task!.created_at).toDateString()}
                    </div>
                </>
            ) : (
                <Skeleton />
            )}
        </ModalWrapper>
    );
}
