import React, {ReactElement} from 'react';
import styles from './FormContainer.module.css';


export interface FormContainerProps {
    children: ReactElement | ReactElement[];
    "data-testid"?: string;
}

export const FormContainer = ({children,...props}:FormContainerProps) => {
    return (<div className={styles.container} data-testid={'form-container'} {...props}>
        {children}
    </div>)
};
