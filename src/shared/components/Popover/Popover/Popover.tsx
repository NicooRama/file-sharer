import React from 'react';
import styles from './Popover.module.css';
import {ArrowContainer, Popover as ReactPopover} from 'react-tiny-popover'
import {PopoverContent} from "@/src/shared/components/Popover/PopoverContent/PopoverContent";
import {PopoverHeader} from "@/src/shared/components/Popover/PopoverHeader/PopoverHeader";


export interface PopoverProps {
    header: any;
    isOpen: boolean;
    children: any;
    content: any;
    className?: string;
    onClose: () => void;
    contentStyles?: any;

    [props: string]: any;
}


export const Popover = ({
                            header,
                            isOpen,
                            children,
                            content,
                            className = "",
                            onClose,
                            contentStyles = {},
                            ...props
                        }: PopoverProps) => {
    const parsedContent = ({position, childRect, popoverRect}: any) => {
        const color = 'hsla(158, 6%, 59%, 0.7)';
        const style = position === 'bottom' ? {top: '1px'} : {};

        return (
            <ArrowContainer
                position={position}
                childRect={childRect}
                popoverRect={popoverRect}
                arrowStyle={style}
                arrowColor={color}
                arrowSize={5}
                className='popover-arrow-container'
                arrowClassName='popover-arrow'
            >
                <div className={styles.container}>
                    <PopoverHeader onClose={onClose}>{header}</PopoverHeader>
                    <PopoverContent className={'popover-content'} style={contentStyles}>
                        {content}
                    </PopoverContent>
                </div>
            </ArrowContainer>
        );
    };

    return (
        <ReactPopover
            content={parsedContent}
            isOpen={isOpen}
            reposition={true}
            onClickOutside={onClose}
            containerStyle={{zIndex: '20'}}
            {...props}
        >
            {children}
        </ReactPopover>
    );
};
