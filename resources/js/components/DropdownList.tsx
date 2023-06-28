import React from "react";
import { Link, LinkProps } from "react-router-dom";

export default function DropdownList({
    children,
    className,
    ...props
}: LinkProps & React.RefAttributes<HTMLAnchorElement>) {
    return (
        <Link
            className={`block w-100 h-7 pb-5 px-3 rounded-sm hover:bg-gray-200 text-base ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
}
