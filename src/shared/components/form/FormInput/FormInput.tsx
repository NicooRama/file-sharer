import React from 'react';
import styles from './FormInput.module.css';
import {Field, FieldProps} from "formik";
import {Input} from "@/src/shared/components/Input/Input";
import {FieldErrorMessage} from "@/src/shared/components/form/FieldErrorMessage/FieldErrorMessage";


export interface FormInputProps {
    name: string;
    "data-testid"?: string;
    [props: string]: any;
}

export const FormInput = ({name, ...props}: FormInputProps) => {
    return (<Field name={name}>

        {({
              field,
              meta,
          }: FieldProps) => (
            <div>
                <Input {...props} {...field}/>
                <FieldErrorMessage meta={meta}/>
            </div>
        )}
    </Field>)
};
