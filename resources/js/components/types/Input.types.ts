import { IconType } from "react-icons/lib";

export interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
    error?: string | undefined;
    serverError?: string[];
    Icon?: IconType;
    inputSize?: "lg" | "sm";
    width?: string;
    className?: string;
}
