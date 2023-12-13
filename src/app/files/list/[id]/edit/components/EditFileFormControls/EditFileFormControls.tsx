'use client'
import React, {useState} from 'react';
import {Input} from '@/src/shared/components/Input/Input';
import {SubmitButton} from "@/src/shared/components/form/SubmitButton/SubmitButton";
import {useFormStatus} from "react-dom";
import {UserFileDescriptor} from "@/src/app/files/file.interface";
import {FormControl} from "@/src/shared/components/form/FormControl/FormControl";

export interface EditFileFormControlsProps {
    fileDescriptor: UserFileDescriptor;
    "data-testid"?: string;
}

export const EditFileFormControls = ({fileDescriptor, ...props}: EditFileFormControlsProps) => {
    const [name,setName] = useState(fileDescriptor.name || '');
    const {pending} = useFormStatus();

    const handleNameChange = (event: any) => {
        const value = event.target.value;
        setName(value);
    }

    return (<>
        <FormControl>
            <label htmlFor={'name'}>Nombre*</label>
            <Input type="text" name="name" placeholder="Nombre" value={name} onChange={handleNameChange} required/>
        </FormControl>
        <SubmitButton isSubmitting={pending} waitingText={'Guardando...'}>Guardar</SubmitButton>
    </>)
};
