import React from "react";
import { Dropdown, Logo, ProfilePic } from ".";

export default function Header() {
    return (
        <header className="flex justify-between py-2 px-3 shadow-lg">
            <Logo full size="sm" />
            <Dropdown />
        </header>
    );
}
