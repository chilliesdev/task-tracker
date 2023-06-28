import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";

export default function ProfilePic(
    props: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    >
) {
    // get auth context
    const { user } = useContext(AuthContext);

    const [fullName, setFullName] = useState("");

    useEffect(() => {
        if (user && user.email)
            // replace spaces in user's name with "+"
            setFullName(user.name.replace(/ /g, "+"));
    }, [user]);

    return (
        <img
            {...props}
            className={`${props.className} h-9 w-9 border-0 hover:border-4 border-opacity-75 border-primary cursor-pointer rounded-full`}
            alt="Profile"
            src={
                user
                    ? `https://ui-avatars.com/api/?name=${fullName}&background=random&rounded=true`
                    : ""
            }
        />
    );
}
