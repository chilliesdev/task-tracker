import React, { forwardRef } from "react";
import { SelectInputProps } from "./types";
import { ErrorMessage } from ".";

function SelectInput(
    { label, error, serverError, options, ...props }: SelectInputProps,
    ref: React.LegacyRef<HTMLSelectElement> | undefined | string
) {
    return (
        <div
            style={{
                width: "120px",
            }}
            className="mb-6"
        >
            {label && <label htmlFor={props.name}>{label}</label>}
            <select
                {...props}
                ref={ref}
                className="text-base h-9 rounded-sm bg-transparent box-border border-2 border-gray-300 px-1 border-opacity-75 focus:border-gray-300 focus:border-opacity-100"
            >
                {options.map(({ value, name }, idx) => (
                    <option key={idx} value={value}>
                        {name}
                    </option>
                ))}
            </select>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {serverError && serverError.length > 0 && (
                <ErrorMessage>{serverError[0]}</ErrorMessage>
            )}
        </div>
    );
}

export default forwardRef(SelectInput);
