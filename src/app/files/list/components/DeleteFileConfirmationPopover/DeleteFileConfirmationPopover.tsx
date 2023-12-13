import React, {useState} from 'react';
import {Popover} from "@/src/shared/components/Popover/Popover/Popover";
import {Text} from "@/src/shared/components/Text/Text";
import {Button} from "@/src/shared/components/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import styles from './DeleteFileConfirmationPopover.module.css';

export interface DeleteFileConfirmationPopoverProps {
    onConfirm: () => Promise<void>;
    "data-testid"?: string;
}

export const DeleteFileConfirmationPopover = ({onConfirm}: DeleteFileConfirmationPopoverProps) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

    const handleConfirm = async () => {
        await onConfirm();
        close();
    }
    const close = () => {
        setIsPopoverOpen(false);
    }

    return (<Popover isOpen={isPopoverOpen} content={
        <div className={styles.popoverContent}>
            <Text size={'sm'}>
                ¿Estas seguro que queres eliminar el archivo?
            </Text>
            <div className={styles.buttonsPanel}>
                <Button variant={'primary'}
                        title={'Cancelar'}
                        onClick={close}
                >
                    No
                </Button>
                <Button variant={'secondary'}
                        subVariant={'danger'}
                        onClick={handleConfirm}
                        title={'Eliminar'}>
                    Sí
                </Button>
            </div>
        </div>
    }
                     header={'Confirmación'}
                     onClose={close}>
        <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
            <Button variant={'tertiary'} subVariant={'danger'} title={'Eliminar'}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </Button>
        </div>
    </Popover>)
};
