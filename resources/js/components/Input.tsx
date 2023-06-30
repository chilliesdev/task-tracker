import React, { forwardRef } from "react";
import { InputProps } from "./types";
import ErrorMessage from "./ErrorMessage";

function Input(
    {
        label,
        error,
        serverError,
        inputSize = "lg",
        Icon,
        width,
        className,
        ...props
    }: InputProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined | string
) {
    return (
        <div
            style={{
                width: width ? width : inputSize == "lg" ? "300px" : "120px",
                height: inputSize == "lg" ? "50px" : "35px",
            }}
            className={className ? className : "mb-6"}
        >
            {label && <label htmlFor={props.name}>{label}</label>}
            {Icon && (
                <Icon
                    style={{
                        marginLeft: "auto",
                        marginRight: "6px",
                        position: "relative",
                        top: "25px",
                        zIndex: "-1",
                    }}
                />
            )}
            <input
                style={{
                    width: "100%",
                    height: "100%",
                }}
                {...props}
                ref={ref}
                className="text-base rounded-sm bg-transparent box-border border-2 border-gray-300 px-1 border-opacity-75 focus:border-gray-300 focus:border-opacity-100"
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
