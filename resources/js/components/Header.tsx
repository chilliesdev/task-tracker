import React from "react";
import { Dropdown, Logo, ProfilePic } from ".";

export default function Header() {
    return (
        <header className="flex fixed w-screen justify-between bg-white py-2 px-3 shadow-lg z-10">
            <Logo full size="sm" />
            <Dropdown />
        </header>
    );
}
