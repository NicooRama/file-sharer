import React from 'react';
import styles from './Input.module.css';


export interface InputProps {
    "data-testid"?: string;
    [props: string] : any;
}

export const Input = ({...props}:InputProps) => {
    return (<input className={`${styles.input} border`} data-testid={'input'} {...props}>

    </input>)
};
