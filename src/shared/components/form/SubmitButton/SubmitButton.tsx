import React from 'react';
import styles from './SubmitButton.module.css';
import {Button, ButtonProps} from "@/src/shared/components/Button/Button";
import {useFormikContext} from "formik";

export interface SubmitButtonProps extends ButtonProps {
    className?: string;
    children: React.ReactNode;
    waitingText?: string;
    isSubmitting: boolean;
}

export const SubmitButton = ({className= '',
                                 children,
                                 isSubmitting,
                                 waitingText = 'Cargando...',
                                 ...props}: SubmitButtonProps) => {

    return (<Button className={`${styles.container} ${className}`}
                    data-testid={'submit-button'}
                    disabled={isSubmitting}
                    type={'submit'}
                    {...props}>
        {!isSubmitting ? children : waitingText}
    </Button>)
};
;
