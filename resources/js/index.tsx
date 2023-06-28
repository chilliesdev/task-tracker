import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context";
import Routes from "./routes";

// Create a react query client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <React.StrictMode>
                <Routes />
            </React.StrictMode>
        </AuthProvider>
    </QueryClientProvider>
);
