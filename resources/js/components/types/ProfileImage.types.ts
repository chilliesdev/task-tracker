export interface ProfileImageProps
    extends React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    name?: string;
    size?: "lg" | "sm";
}
