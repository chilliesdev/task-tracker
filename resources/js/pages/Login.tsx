import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ErrorMessage, Form, Input, Wrapper } from "../components";
import { useMutation } from "@tanstack/react-query";
import {
    LocationState,
    LoginInput,
    LoginResponseData,
    LoginServerValidationError,
} from "./types";
import { loginRequest } from "../api";
import { responseError, resposeWithToken } from "../api/types";
import { AxiosError, AxiosResponse } from "axios";
import { AuthContext } from "../context";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { loginFormResolver } from "../schema";

export default function Login() {
    let navigate = useNavigate();
    let location = useLocation();
    const locationState = location.state as LocationState;

    // intialize form params
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: loginFormResolver,
    });

    // initialize auth context
    const { setToken, setUser } = useContext(AuthContext);

    // handles login request
    const { isLoading, isError, error, mutate } = useMutation<
        AxiosResponse<resposeWithToken<LoginResponseData>, any>, // response type
        AxiosError<responseError<LoginServerValidationError>, any>, // response error type
        LoginInput // param type
    >(loginRequest, {
        onSuccess: handleLogin,
    });

    function handleLogin(
        data: AxiosResponse<resposeWithToken<LoginResponseData>>
    ): void {
        const authToken = data.data.token;
        const user = data.data.data;

        // save JWT to browser local storage
        localStorage.setItem("token", authToken);

        // add token and basic user data to auth context
        setToken(authToken);
        setUser(user);

        // Send them back to the page they tried to visit when they were
        // redirected to the login page.
        if (locationState) {
            let fromState = locationState.from?.pathname || "/";
            navigate(fromState, { replace: true });
        }

        navigate("/");
    }

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        // login request
        mutate(data);
    };

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                {isError && error.response?.status === 422 && (
                    <ErrorMessage>{error.response!.data.message}</ErrorMessage>
                )}
                <Button size="lg" loading={isLoading} type="submit">
                    Login
                </Button>
            </Form>
            <Link
                className="mb-5 text-primary hover:underline hover:cursor-pointer"
                to="/register"
            >
                Create an account
            </Link>
        </Wrapper>
    );
}
