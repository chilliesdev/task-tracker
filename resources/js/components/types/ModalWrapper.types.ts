export type ModalWrapperProps = {
    children: React.ReactNode | string | undefined;
    title: string;
    primaryButton: {
        name: string;
        onClick: () => void;
        isLoading?: boolean;
    };
};
