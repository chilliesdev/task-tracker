import React from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import {
    Create,
    Detail,
    ErrorPage,
    Home,
    Login,
    Logout,
    Register,
    RequireAuth,
} from "./pages";

const routes = () => {
    const location = useLocation();
    const previousLocation = location.state?.previousLocation;

    return (
        <>
            <Routes location={previousLocation || location}>
                <Route path="/" element={<RequireAuth />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/task/:id" element={<Detail />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            {previousLocation && (
                <Routes>
                    {/* Modal routes */}
                    <Route path="/create" element={<Create />} />
                    <Route path="/task/:id" element={<Detail />} />
                </Routes>
            )}
        </>
    );
};

export default routes;
