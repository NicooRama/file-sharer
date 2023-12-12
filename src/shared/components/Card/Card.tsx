import React, { ReactElement } from 'react';
import styles from './Card.module.css';

export interface CardProps {
    children: ReactElement | ReactElement[] | string | string[]
    className?: string
    [props: string]: any
}

export const Card = ({ children, className = '', ...props }: CardProps) => {
    return (
        <div className={`${styles.container} ${className}`} data-testid="card" {...props}>
            {children}
        </div>
    );
};
