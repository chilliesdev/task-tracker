import { FunctionComponent } from "react";
import { IconType } from "react-icons/lib";
import { TaskStatus } from "../../api/types";

export interface SelectInputProps
    extends React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    options: {
        value: TaskStatus;
        name: string;
        default?: boolean;
    }[];
    label?: string;
    error?: string | undefined;
    serverError?: string[];
}
