import { MouseEvent } from 'react'


export interface IButton {
    onClick?: (event: MouseEvent) => void;
    text?: string;
    isLoading?: boolean;
    disabled?: boolean;
    type?: string;
}
