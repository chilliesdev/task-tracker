import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, Login, Logout, Register, RequireAuth } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RequireAuth />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
]);

export default function routes() {
    return <RouterProvider router={router} />;
}
