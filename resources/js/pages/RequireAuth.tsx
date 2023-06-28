import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { getUser } from "../api";
import { responseError, responseSuccess } from "../api/types";
import { AxiosError, AxiosResponse } from "axios";
import { LoginResponseData } from "./types";
import { Container, LoadingScreen } from "../components";

export default function RequireAuth() {
    const { token, user, setUser, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    let location = useLocation();

    const [isLoading, setIsLoading] = useState(true);

    const { mutate } = useMutation<
        AxiosResponse<responseSuccess<LoginResponseData>>, // response type
        AxiosError<responseError, any>, // response error type,
        string
    >(getUser, {
        onSuccess: (data) => {
            // if token is valid
            setIsLoading(false);
            setUser(data.data.data);
            navigate("/");
        },
        onError: () => {
            // delete expired token
            navigate("/logout");
        },
        retry: 0,
    });

    useEffect(() => {
        if (!user && token) {
            // if user basic info is null but has a token
            // get user basic info from server
            mutate(token);
        } else {
            setIsLoading(false);
        }
    }, []);

    if (!token) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return isLoading ? (
        // show loading screen user token is being validated
        <LoadingScreen />
    ) : (
        // authenticated user pages
        <Container>
            <Outlet />
        </Container>
    );
}
