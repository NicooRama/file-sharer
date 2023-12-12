import React from 'react';
import {getClassName} from "@/src/shared/components/Button/button.utils";

export interface ButtonProps {
    onClick?: (e?: any) => void;
    children: React.ReactNode;
    active?: boolean;
    className?: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
    tag?: 'button' | 'span' | any;
    [props: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
                                           tag: Component = 'button',
                                           onClick = () => {},
                                           children,
                                           active = false,
                                           className = '',
                                           disabled = false,
                                           variant = 'primary',
                                           ...props
                                       }) => {
    const handleClick = !disabled ? onClick : () => {};

    return (
        <Component
            className={getClassName({active, className, variant})}
            disabled={disabled}
            onClick={handleClick}
            type={Component === 'button' ? 'button' : undefined}
            {...props}
        >
            {children}
        </Component>
    );
};
