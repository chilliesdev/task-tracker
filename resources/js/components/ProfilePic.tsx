import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import ProfileImage from "./ProfileImage";

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
        <>
            <ProfileImage
                {...props}
                name={fullName}
                className={`${props.className} cursor-pointer hover:border-4`}
            />
        </>
    );
}
