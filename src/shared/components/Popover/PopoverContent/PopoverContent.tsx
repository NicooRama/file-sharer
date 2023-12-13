import React from 'react';
import styles from './PopoverContent.module.css';


export interface PopoverContentProps {
    children: any;
    "data-testid"?: string;
    [props: string]: any;
}

export const PopoverContent = ({ children, className='', ...props }: PopoverContentProps) => {
    return <div className={`${styles.container} ${className}`} {...props}>{children}</div>;
};
