export interface RichTextInputProps {
    name: string;
    label: string;
    initialValue?: any;
    value: any | undefined;
    onChange: (...event: any[]) => void;
}
