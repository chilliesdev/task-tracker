import React, { forwardRef } from "react";
import { SelectInputProps } from "./types";
import { ErrorMessage } from ".";
import { Oval } from "react-loader-spinner";

function SelectInput(
    {
        label,
        error,
        serverError,
        options,
        isLoading,
        ...props
    }: SelectInputProps,
    ref: React.LegacyRef<HTMLSelectElement> | undefined | string
) {
    return (
        <div
            style={{
                width: "200px",
            }}
            className="mb-6"
        >
            {label && <label htmlFor={props.name}>{label}</label>}
            <div className="flex justify-start items-center">
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
                {isLoading && (
                    <Oval
                        wrapperStyle={{
                            paddingLeft: "13px",
                        }}
                        wrapperClass="pl-5"
                        color="#F4F5F7"
                        secondaryColor="#0052CC"
                        strokeWidth={5}
                        height={24}
                        width={24}
                    />
                )}
            </div>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {serverError && serverError.length > 0 && (
                <ErrorMessage>{serverError[0]}</ErrorMessage>
            )}
        </div>
    );
}

export default forwardRef(SelectInput);
