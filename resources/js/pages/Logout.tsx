import React, { useContext, useEffect } from "react";
import { LoadingScreen } from "../components";
import { logout } from "../api";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { responseSuccess, responseError } from "../api/types";
import { AuthContext } from "../context";
import { useNavigate } from "react-router";

export default function Logout() {
    const { token, setUser, setToken } = useContext(AuthContext);

    const navigate = useNavigate();

    function handleLogout(): void {
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);

        navigate("/login");
    }

    // logout request to server to revoke token
    const { mutate } = useMutation<
        AxiosResponse<responseSuccess, any>, // response type
        AxiosError<responseError, any>, // response error type,
        string
    >(logout, {
        onSuccess: () => {
            // token has be revoked
            // delete token from client
            handleLogout();
        },
        onError: () => {
            // delete expired token
            handleLogout();
        },
    });

    useEffect(() => {
        if (token) mutate(token);
    }, []);

    return <LoadingScreen />;
}
