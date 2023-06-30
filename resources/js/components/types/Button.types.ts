export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size: "lg" | "sm";
    children: React.ReactNode;
    loading?: boolean;
    transparent?: boolean;
    color?: string;
}
