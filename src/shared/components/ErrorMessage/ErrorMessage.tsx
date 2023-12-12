import React, {ReactNode} from 'react';
import styles from './ErrorMessage.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";


export interface ErrorMessageProps {
    children: ReactNode | string | any;
    "data-testid"?: string;
}

export const ErrorMessage = ({children, ...props}:ErrorMessageProps) => {
    return (<div className={styles.container} data-testid={'error-message'} {...props}>
        <FontAwesomeIcon icon={faCircleExclamation} />
        {children}
    </div>)
};
;
