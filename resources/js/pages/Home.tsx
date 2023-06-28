import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Tasks</h1>
            <Link to={"/login"}>Login</Link>
        </>
    );
}
