import React from 'react';
import styles from './FormFrame.module.css';
import {Card} from "@/src/shared/components/Card/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface FormFrameProps {
    children: any;
    icon: IconProp
    "data-testid"?: string;
}

export const FormFrame = ({children, icon, ...props}:FormFrameProps) => {
    return (<div className={styles.container} data-testid={'form-frame'} {...props}>
        <div className={styles.circleIconContainer}>
            <FontAwesomeIcon icon={icon} size={'2x'} />
        </div>
        <Card className={styles.formFrameCard}>
            {children}
        </Card>
    </div>)
};
;
