import React from 'react';
import styles from './FileActionsCell.module.css';
import {Button} from "@/src/shared/components/Button/Button";
import {FileDescriptor} from "@/src/app/files/file.interface";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faShare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {LinkButton} from "@/src/shared/components/LinkButton/LinkButton";


export interface FileActionsCellProps {
    file: FileDescriptor;
    "data-testid"?: string;
}

export const FileActionsCell = ({file, ...props}: FileActionsCellProps) => {
    return (<div className={styles.container} data-testid={'file-actions-cell'} {...props}>
        <div className={styles.buttonContainer}>
            <LinkButton
                title={'Compartir'}
                href={`/files/list/${file.id}/share`}
                variant={'secondary'}>
                <FontAwesomeIcon icon={faShare}/>
            </LinkButton>
        </div>
        <div className={styles.buttonContainer}>
            <Button variant={'secondary'} title={'Descargar'}>
                <FontAwesomeIcon icon={faDownload}/>
            </Button>
        </div>
        <Button variant={'tertiary'} subVariant={'danger'} title={'Eliminar'}>
            <FontAwesomeIcon icon={faTrashAlt}/>
        </Button>
    </div>)
};
