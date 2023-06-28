import React from "react";
import { Header } from ".";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
