import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterInput } from "../pages/types";

// validation logic for register form
const registerFormSchema: Yup.ObjectSchema<RegisterInput> = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .required("Email is required")
        .email("Please enter a vail email"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Must be at least 6 char long"),
    password_confirmation: Yup.string()
        .required("Password is required")
        .min(6, "Must be at least 6 char long")
        .oneOf([Yup.ref("password")], "Passwords does not match"),
});

export const registerFromResolver = yupResolver(registerFormSchema);
