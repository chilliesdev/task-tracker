import React from "react";
import { Oval } from "react-loader-spinner";
import { ButtonProps } from "./types";

export default function Button({
    children,
    size,
    loading,
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={loading}
            style={{
                width: size === "lg" ? "100%" : "100px",
                height: size === "lg" ? "46px" : "32px",
            }}
            className={` bg-primary text-white capitalize rounded-sm flex justify-center items-center font-semibold disabled:opacity-75 disabled:cursor-wait${
                size === "lg" && " my-7"
            }`}
            {...props}
        >
            {loading ? <Oval color="white" height={16} width={16} /> : children}
        </button>
    );
}
