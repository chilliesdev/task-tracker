import React from "react";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation();

    const page = pathname.replace("/", "");

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center mx-auto w-96 my-9 px-5 shadow-lg">
                <Logo full className="mb-5 mt-3" />
                <p className="mb-4 text-base font-semibold">
                    <span className="capitalize">{page}</span> to continue
                </p>
                {children}
            </div>
        </div>
    );
}
