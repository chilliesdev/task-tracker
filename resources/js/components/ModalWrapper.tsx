import React from "react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router";
import { ModalWrapperProps } from "./types";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function ModalWrapper({
    children,
    title,
    primaryButton,
}: ModalWrapperProps) {
    const navigate = useNavigate();

    // take the user back to the previous page
    function goBack(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
        navigate(-1);
    }

    return (
        <>
            <div
                // onClick={goBack}
                style={{
                    background: "rgba(0, 0, 0, 0.15)",
                }}
                className="absolute top-0 bottom-0 left-0 right-0"
            >
                <div
                    style={{ top: "70px" }}
                    className="absolute pt-8 w-1/2 h-3/4 left-1/4 bg-white rounded-md shadow-sm z-10"
                >
                    <div className="flex px-5 pb-4 justify-between items-center">
                        <h5 className="text-2xl font-semibold">{title}</h5>
                        <GrClose
                            className="cursor-pointer"
                            onClick={() => goBack}
                        />
                    </div>
                    <hr />
                    <div className="h-3/4 px-5 pt-5">{children}</div>
                    <hr />
                    <div className="flex pt-4 px-5 justify-end items-center">
                        <p
                            className="font-bold text-gray-700 cursor-pointer mr-5"
                            onClick={goBack}
                        >
                            Cancel
                        </p>
                        <Button
                            onClick={primaryButton.onClick}
                            loading={primaryButton.isLoading}
                            size="sm"
                        >
                            {primaryButton.name}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
