import React, { useContext } from "react";
import { Button } from ".";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { deleteTaskById } from "../api";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { AuthContext } from "../context";

export default function DeletePopup({
    id,
    close,
}: {
    id: string | undefined;
    close: () => void;
}) {
    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    const { isLoading, mutate } = useMutation(deleteTaskById, {
        onSuccess: () => {
            // close model
            close();

            // return home
            navigate("/");
        },
    });

    function handleDelete() {
        mutate({
            token: token!,
            taskId: parseInt(id!),
        });
    }

    return (
        <>
            <div
                style={{
                    background: "rgba(0, 0, 0, 0.15)",
                }}
                className="absolute top-0 bottom-0 left-0 right-0"
            ></div>
            <div
                style={{
                    // transform: "translate(calc(100vw - 256px), 48px)",
                    // minWidth: "220px",
                    minHeight: "120px",
                    inset: "20% auto auto 50%",
                }}
                className="fixed z-10 trans transition-all w-60 text-sm shadow-2xl border-2 bg-white py-6 px-5 rounded-sm"
            >
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center">
                        <div className="font-semibold pb-3">Deleting...</div>
                        <Oval
                            wrapperClass="block"
                            color="black"
                            height={32}
                            width={32}
                        />
                    </div>
                ) : (
                    <>
                        Do you want to Delete this task?
                        <div className="flex items-center justify-between pt-4">
                            <p
                                className="font-bold text-gray-700 cursor-pointer mr-5"
                                onClick={close}
                            >
                                Cancel
                            </p>
                            <Button
                                color="bg-red-600"
                                onClick={handleDelete}
                                size="sm"
                            >
                                Delete
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
