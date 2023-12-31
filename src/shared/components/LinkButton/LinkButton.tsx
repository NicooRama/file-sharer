import React from 'react';
import styles from './LinkButton.module.css';
import buttonStyles from '../Button/Button.module.css';
import Link, {LinkProps} from "next/link";
import {getButtonClassName} from "@/src/shared/components/Button/button.utils";


export interface LinkButtonProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    active?: boolean;
    "data-testid"?: string;
    [props: string]: any;
}

export const LinkButton = ({
                               children,
                               className = '',
                               variant = 'primary',
                               active,
                               ...props
                           }: LinkButtonProps) => {
    return (<Link className={`${styles.container} ${getButtonClassName({variant, className, active})}`}
                  data-testid={'link-button'} {...props}>
        {children}
    </Link>)
};
;
