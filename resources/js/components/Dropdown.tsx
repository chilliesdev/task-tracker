import { useContext, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useComponentVisible from "../hooks/useComponentVisible";
import { DropdownList, ProfilePic } from ".";
import React from "react";
import { AuthContext } from "../context";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

export default function Dropdown() {
    // get auth context
    const { user } = useContext(AuthContext);

    const [links, setLinks] = useState(false);

    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    return (
        <div ref={ref}>
            <ProfilePic
                className="flex items-center"
                onClick={() => setLinks(!links)}
            />
            <span
                className="flex items-center"
                // onClick={() => setIsComponentVisible(!isComponentVisible)}
            ></span>
            {links && (
                <div
                    style={{
                        transform: "translate(calc(100vw - 256px), 48px)",
                        inset: "0px auto auto 0px",
                    }}
                    className="fixed top-10 transition-all w-60 text-sm shadow-2xl border-2 bg-white pt-7 pb-4 rounded-sm z-10"
                >
                    <div className="px-3 mb-4">
                        <h4 className="text-xs font-bold mb-4">ACCOUNT</h4>
                        <div className="flex mb-6">
                            <ProfilePic className="mr-3" />
                            <div>
                                <h6>{user?.name}</h6>
                                <p className="text-xs">{user?.email}</p>
                            </div>
                        </div>
                    </div>
                    <DropdownList to="/profile"> Manage Account</DropdownList>
                    <div className="border-b-2 mb-5"></div>
                    <div>
                        <DropdownList to="/">
                            Theme{" "}
                            {/* <BiChevronRight className="inline text-left" /> */}
                        </DropdownList>
                        <DropdownList to="/profile">Profile</DropdownList>
                        <DropdownList to="/logout">Log out</DropdownList>
                    </div>
                </div>
            )}
        </div>
    );
}
