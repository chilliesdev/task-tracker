export type ModalWrapperProps = {
    children: React.ReactNode | string | undefined;
    title: string;
    footer?: boolean;
    primaryButton?: {
        name: string;
        onClick: () => void;
        isLoading?: boolean;
    };
    secondaryButton?: {
        name: string;
        onClick: () => void;
        isLoading?: boolean;
        disabled?: boolean;
    };
};
