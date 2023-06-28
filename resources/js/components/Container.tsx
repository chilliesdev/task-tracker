import React from "react";
import { Header } from ".";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <div className="px-3 pt-16">{children}</div>
        </div>
    );
}
