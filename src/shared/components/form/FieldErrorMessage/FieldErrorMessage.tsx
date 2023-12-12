import React from 'react';
import styles from './FieldErrorMessage.module.css';
import {FieldMetaProps} from "formik";


export interface FieldErrorMessageProps {
    meta: FieldMetaProps<any>;
    "data-testid"?: string;
    [props: string]: any;
}

export const FieldErrorMessage = ({meta, ...props}:FieldErrorMessageProps) => {
    return (meta.touched && meta.error ? (
            <div className={styles.container} data-testid={'field-error-message'} {...props}>{meta.error}</div>
        ) : null)
};
