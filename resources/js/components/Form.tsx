import React from "react";
import { FormProps } from "./types";

const Form = ({ onSubmit, children }: FormProps) => {
    return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
