'use client';

import React, {useState} from 'react';
import styles from '../../page.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faUpload} from "@fortawesome/free-solid-svg-icons";
import {getButtonClassName} from "@/src/shared/components/Button/button.utils";
import {Card} from "@/src/shared/components/Card/Card";
import {FormFrame} from "@/src/shared/components/FormFrame/FormFrame";
import {Text} from "@/src/shared/components/Text/Text";
import {FormContainer} from "@/src/shared/components/form/FormContainer/FormContainer";

import { useFormStatus } from 'react-dom';

export interface UploadFormControlsProps {
    "data-testid"?: string;
}

export const UploadFormControls = ({...props}: UploadFormControlsProps) => {
    const { pending } = useFormStatus();
    const [fileName, setFileName] = useState('');

    const fileButtonClasses = [
        getButtonClassName({variant: 'secondary', className: '', active: false}),
    ]

    const handleFileSelected = (e: any): void => {
        const file = e.target.files[0];
        setFileName(file?.name || '');
    }

    const inputId = 'file'

    return (<FormFrame icon={faUpload} data-testid={'upload-form-controls'} {...props}>
        <FormContainer>
            <Text size={'md'} weight={'semiBold'} align={'center'}>¡Subi tu archivo!</Text>
            <Text size={'sm'}>Primero seleccioná tu archivo:</Text>
            <label htmlFor={inputId}>
                <div className={fileButtonClasses.join(' ')}>
                    <FontAwesomeIcon icon={faFile}/>
                    Seleccionar archivo
                </div>
            </label>
            <Text size={'sm'}>Seleccionaste: <Text size={'sm'} weight={'semiBold'}>{fileName || '-'}</Text></Text>
            <input id={inputId}
                   type="file"
                   name="file"
                   multiple={false}
                   className={styles.fileInput} onChange={handleFileSelected}/>
            <Text size={'sm'}>Y luego subilo:</Text>
            <button type="submit" className={getButtonClassName({variant: 'primary'})}
                    disabled={pending || !fileName}
            >
                {!pending ? 'Subir' : 'Subiendo...'}</button>
        </FormContainer>
    </FormFrame>)
};
;
