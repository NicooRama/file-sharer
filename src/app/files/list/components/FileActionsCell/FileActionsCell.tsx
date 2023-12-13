import React, {useState} from 'react';
import styles from './FileActionsCell.module.css';
import {Button} from "@/src/shared/components/Button/Button";
import {UserFileDescriptor} from "@/src/app/files/file.interface";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faShare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {LinkButton} from "@/src/shared/components/LinkButton/LinkButton";
import {Popover} from "@/src/shared/components/Popover/Popover/Popover";
import {Text} from "@/src/shared/components/Text/Text";
import {
    DeleteFileConfirmationPopover
} from "@/src/app/files/list/components/DeleteFileConfirmationPopover/DeleteFileConfirmationPopover";


export interface FileActionsCellProps {
    file: UserFileDescriptor;
    isOwner: boolean;
    onFileRemove: (fileId: string) => Promise<void>;
    "data-testid"?: string;
}

export const FileActionsCell = ({file, isOwner, onFileRemove, ...props}: FileActionsCellProps) => {
    return (<div className={styles.container} data-testid={'file-actions-cell'} {...props}>
        {
            isOwner && <div className={styles.buttonContainer}>
                <LinkButton
                    title={'Compartir'}
                    href={`/files/list/${file.id}/share`}
                    variant={'secondary'}>
                    <FontAwesomeIcon icon={faShare}/>
                </LinkButton>
            </div>
        }
        <div className={styles.buttonContainer}>
            <LinkButton title={'Descargar'}
                        href={`/files/api/list/file/${file.id}`}
                        variant={'secondary'}
            >
                <FontAwesomeIcon icon={faDownload}/>
            </LinkButton>
        </div>
        {
            isOwner && <DeleteFileConfirmationPopover onConfirm={() => onFileRemove(file.id)} />
        }
    </div>)
};
