import React from "react";
import { ProfileImageProps } from "./types/ProfileImage.types";

export default function ProfileImage({
    name,
    className,
    size = "lg",
    ...props
}: ProfileImageProps) {
    return (
        <img
            {...props}
            title={name}
            className={`${className} 
            ${size === "lg" ? "h-9 w-9" : "h-6 w-6"} 
            border-2 border-opacity-75 border-primary rounded-full`}
            alt="Profile"
            src={
                name
                    ? `https://ui-avatars.com/api/?name=${name}&background=random&rounded=true`
                    : ``
            }
        />
    );
}
