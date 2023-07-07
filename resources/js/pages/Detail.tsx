import React, { useContext, useState } from "react";
import {
    DeletePopup,
    ModalWrapper,
    ProfileImage,
    SelectInput,
} from "../components";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getTaskById, updateTaskById } from "../api";
import { AuthContext } from "../context";
import { Task, TaskStatus } from "../api/types";
import Skeleton from "react-loading-skeleton";
import { useForm } from "react-hook-form";
import { UpdateStatusInput } from "./types/Detail.type";

export default function Detail() {
    // get task id from url
    const { id } = useParams();

    const { token } = useContext(AuthContext);

    const [showDeletePopup, setShowDeletePopup] = useState(false);

    // initialize form params
    const { register } = useForm<UpdateStatusInput>();

    const params = {
        token: token!,
        taskId: parseInt(id!),
    };

    // get all tasks from
    const { data, isLoading } = useQuery({
        queryKey: ["task", params],
        queryFn: () => getTaskById(params),
    });

    // update task status request
    const { isLoading: isUpdating, mutate: updateStatus } =
        useMutation(updateTaskById);

    function handleUpdate(e: any) {
        updateStatus({
            ...params,
            data: {
                status: e.target.value as TaskStatus,
            },
        });
    }

    const task: Task | undefined = data?.data.data;

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
                        {...register("status", {
                            onChange: handleUpdate,
                        })}
                        disabled={isUpdating}
                        defaultValue={task?.status}
                        isLoading={isUpdating}
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
