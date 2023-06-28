import React from "react";
import { Oval } from "react-loader-spinner";
import { ButtonProps } from "./types";

export default function Button({ children, loading, ...props }: ButtonProps) {
    return (
        <button
            disabled={loading}
            style={{
                width: "100%",
                height: "46px",
            }}
            className="my-6 bg-primary text-white capitalize rounded-sm flex justify-center items-center disabled:opacity-75 disabled:cursor-wait"
            {...props}
        >
            {loading ? <Oval color="white" height={16} width={16} /> : children}
        </button>
    );
}
