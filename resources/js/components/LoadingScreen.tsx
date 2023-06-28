import React from "react";
import { Oval } from "react-loader-spinner";

export default function LoadingScreen() {
    return (
        <div className="absolute h-screen w-screen top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white">
            <Oval color="white" />
        </div>
    );
}
