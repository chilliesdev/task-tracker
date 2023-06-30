import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// validation logic for create task form
const createTaskFormSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    status: Yup.string().oneOf(["todo", "in-progress", "blocked", "done"]),
});

export const createTaskFormResolver = yupResolver(createTaskFormSchema);
