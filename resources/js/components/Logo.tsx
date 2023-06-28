import React from "react";
import { LogoProps } from "./types/Logo.types";
import { Link } from "react-router-dom";

export default function Logo({ full = false, className, size }: LogoProps) {
    return (
        <Link to="/" className={`flex font-bold items-center ${className}`}>
            <img
                className={size === "lg" ? "h-10" : "h-7"}
                src="/logo.svg"
                alt="logo"
            />
            <span
                className={`${size === "lg" ? "text-4xl" : "text-base"} ml-1`}
            >
                {full && `Task Tracker`}
            </span>
        </Link>
    );
}
