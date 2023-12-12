import React from 'react';
import {getClassName} from "@/src/shared/components/Button/button.utils";

export interface ButtonProps {
    onClick?: (e?: any) => void;
    children: React.ReactNode;
    active?: boolean;
    className?: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
    subVariant?: 'normal' | 'danger';
    tag?: 'button' | 'span' | any;

    [props: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
                                                  onClick = () => {
                                                  },
                                                  children,
                                                  active = false,
                                                  className = '',
                                                  disabled = false,
                                                  variant = 'primary',
                                                  subVariant = 'normal',
                                                  ...props
                                              }) => {
    const handleClick = !disabled ? onClick : () => {
    };

    return (
        <button
            className={getClassName({active, className, variant, subVariant})}
            disabled={disabled}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};
