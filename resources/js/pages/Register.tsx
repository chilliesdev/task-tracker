import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ErrorMessage, Form, Input, Wrapper } from "../components";
import { useMutation } from "@tanstack/react-query";
import { RegisterInput, RegisterServerValidationError } from "./types";
import { registerRequest } from "../api";
import { responseError, responseSuccess } from "../api/types";
import { AxiosError, AxiosResponse } from "axios";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { registerFromResolver } from "../schema";

export default function Register() {
    let navigate = useNavigate();

    // intialize form params
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterInput>({ resolver: registerFromResolver });

    // handles login request
    const { isLoading, isError, error, mutate } = useMutation<
        AxiosResponse<responseSuccess, any>, // response type
        AxiosError<responseError<RegisterServerValidationError>, any>, // response error type
        RegisterInput // param type
    >(registerRequest, {
        onSuccess: () => {
            navigate("/login");
        },
    });

    const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
        // login request
        mutate(data);
    };

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    disabled={isLoading}
                    {...register("name")}
                    id="name"
                    type="name"
                    placeholder="Enter your name"
                    error={errors.name && errors.name.message}
                    serverError={error?.response?.data.data?.name}
                />
                <Input
                    disabled={isLoading}
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    error={errors.email && errors.email.message}
                    serverError={error?.response?.data.data?.email}
                />
                <Input
                    disabled={isLoading}
                    {...register("password")}
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    error={errors.password && errors.password.message}
                    serverError={error?.response?.data.data?.password}
                />
                <Input
                    disabled={isLoading}
                    {...register("password_confirmation")}
                    id="password_confirmation"
                    type="password"
                    placeholder="Re-enter Password"
                    error={
                        errors.password_confirmation &&
                        errors.password_confirmation.message
                    }
                    serverError={
                        error?.response?.data.data?.password_confirmation
                    }
                />
                {isError &&
                    error.response?.data.message !== "validation failed" && (
                        <ErrorMessage>
                            {error.response!.data.message}
                        </ErrorMessage>
                    )}
                <Button loading={isLoading} type="submit">
                    Register
                </Button>
            </Form>
            <div className="mb-5">
                Do you have an account?
                <Link
                    className="text-primary ml-1 hover:underline hover:cursor-pointer"
                    to="/register"
                >
                    Login
                </Link>
            </div>
        </Wrapper>
    );
}
