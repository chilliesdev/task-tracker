export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    loading?: boolean;
    transparent?: boolean;
}
