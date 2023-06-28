import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInput } from "../pages/types";

// validation logic for login form
const loginFormSchema: Yup.ObjectSchema<LoginInput> = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .email("Please enter a vail email"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Must be at least 6 char long"),
});

export const loginFormResolver = yupResolver(loginFormSchema);
