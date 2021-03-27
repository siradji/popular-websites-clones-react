import {ReactNode} from "react";

export type backgroundColors= 'blue' | 'red' | 'yellow';

export interface GenericButtonProps {
    onclick: () => void;
    children: ReactNode;
}

export interface ButtonFillProps extends GenericButtonProps {
    bgColor: backgroundColors; 
    color: string

}


export  interface  NormalButtonProps extends GenericButtonProps  {
    color: string
}
