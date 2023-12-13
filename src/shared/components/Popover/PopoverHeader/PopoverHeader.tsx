import React from 'react';
import styles from './PopoverHeader.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Text} from "@/src/shared/components/Text/Text";

export interface PopoverHeaderProps {
    children: any;
    onClose: () => void;
    "data-testid"?: string;
}

export const PopoverHeader = ({children, onClose, ...props}: PopoverHeaderProps) => {
    return (
        <div className={styles.container} {...props}>
            <Text size={"xs"} weight={"semiBold"}>
                {children}
            </Text>
            <FontAwesomeIcon icon={faTimes} className={styles.icon} onClick={onClose}/>
        </div>
    );
};
;
