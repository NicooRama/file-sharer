import React from 'react';
import styles from './SubmitButton.module.css';
import {Button, ButtonProps} from "@/src/shared/components/Button/Button";
import {useFormikContext} from "formik";

export interface SubmitButtonProps extends ButtonProps {
    className?: string;
    children: React.ReactNode;
}

export const SubmitButton = ({className= '',children, ...props}: SubmitButtonProps) => {
    const {isSubmitting} = useFormikContext();

    return (<Button className={`${styles.container} ${className}`}
                    data-testid={'submit-button'}
                    disabled={isSubmitting}
                    type={'submit'}
                    {...props}>
        {!isSubmitting ? children : 'Cargando...'}
    </Button>)
};
;
