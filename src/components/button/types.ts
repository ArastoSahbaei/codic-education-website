import { MouseEvent } from 'react'


export interface IButton {
    onClick?: (event: MouseEvent) => void;
    text?: string;
}
