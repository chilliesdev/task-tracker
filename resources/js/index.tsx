import "react-loading-skeleton/dist/skeleton.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "./routes";
import { AuthProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

// Create a react query client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </React.StrictMode>
        </AuthProvider>
    </QueryClientProvider>
);
