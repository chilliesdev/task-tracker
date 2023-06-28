import React, { forwardRef } from "react";
import { InputProps } from "./types";
import ErrorMessage from "./ErrorMessage";

function Input(
    { label, error, serverError, ...props }: InputProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined | string
) {
    return (
        <div>
            {label && <label htmlFor={props.name}>{label}</label>}
            <input
                {...props}
                ref={ref}
                style={{
                    width: "300px",
                    height: "50px",
                }}
                className="text-base rounded-sm mb-2 bg-transparent box-border border-2 border-gray-300 px-1 focus:border-gray-300 focus:border-opacity-100 border-opacity-75"
            />
            {/* handle input field errors */}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {serverError && serverError.length > 0 && (
                <ErrorMessage>{serverError[0]}</ErrorMessage>
            )}
        </div>
    );
}

export default forwardRef(Input);
