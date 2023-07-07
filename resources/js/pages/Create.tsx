import React, { BaseSyntheticEvent, useContext } from "react";
import {
    Form,
    Input,
    ModalWrapper,
    RichTextInput,
    SelectInput,
} from "../components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CreateTaskInput, CreateTaskValidationError } from "./types";
import { createTaskFormResolver } from "../schema";
import { useMutation } from "@tanstack/react-query";
import { createTasks } from "../api";
import { AxiosError, AxiosResponse } from "axios";
import {
    CreateTasksParam,
    responseError,
    responseSuccess,
    Task,
} from "../api/types";
import { useNavigate } from "react-router-dom";
import { AuthContext, TaskContext } from "../context";

export default function Create() {
    // get JWT token from context
    const { token } = useContext(AuthContext);
    const { refetch } = useContext(TaskContext);

    const navigate = useNavigate();

    // intialize form params
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<CreateTaskInput>({
        resolver: createTaskFormResolver,
    });

    const { error, isLoading, mutate } = useMutation<
        AxiosResponse<responseSuccess<Task>, any>,
        AxiosError<responseError<CreateTaskValidationError>, any>,
        CreateTasksParam
    >(createTasks, {
        onSuccess: (data) => {
            // refetch all tasks from Server
            refetch();

            // go to home
            navigate("/");
        },
    });

    const onSubmit: SubmitHandler<CreateTaskInput> = async (data) => {
        // send create task request
        mutate({
            data,
            token: token!,
        });
    };
    return (
        <ModalWrapper
            primaryButton={{
                onClick: handleSubmit(onSubmit),
                name: "Create",
                isLoading,
            }}
            title="Create Task"
        >
            <Form>
                <Input
                    disabled={isLoading}
                    {...register("title")}
                    label="Title"
                    id="title"
                    type="text"
                    placeholder="Enter title"
                    error={errors.title && errors.title.message}
                    serverError={error?.response?.data.data?.title}
                    width="100%"
                    className="mb-10"
                />
                <Controller
                    control={control}
                    name="description"
                    render={({ field: { value, onChange } }) => (
                        <RichTextInput
                            label="Description"
                            name="description"
                            initialValue="<p>Describe your task</p>"
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
                <SelectInput
                    disabled={isLoading}
                    {...register("status")}
                    options={[
                        {
                            name: "TODO",
                            value: "todo",
                            default: true,
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
                    label="Status"
                    id="status"
                    name="status"
                    error={errors.title && errors.title.message}
                    serverError={error?.response?.data.data?.title}
                />
            </Form>
        </ModalWrapper>
    );
}
