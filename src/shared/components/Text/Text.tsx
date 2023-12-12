import React from 'react';
import styles from './Text.module.css';
import {FontSize, FontWeight} from "@/src/app/types";


export interface TextProps {
    component?: any;
    children: any;
    align?: 'center' | 'left' | 'right';
    size?: FontSize;
    weight?: FontWeight;
    "data-testid"?: string;
}

export const Text = ({
                         component: Component = 'span',
                         size = 'sm',
                         weight = 'regular',
                         children,
                         align = 'left',
                         ...props
                     }: TextProps) => {
    return (<Component
        className={`
            ${styles.container}
            ${styles[size]}
            ${styles[weight]}
            ${styles[`text-${align}`]}
        `}
        data-testid={'text'}
        {...props}>{children}</Component>)
};
;
