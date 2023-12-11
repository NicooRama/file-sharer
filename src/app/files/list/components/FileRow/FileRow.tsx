'use client';
import React from 'react';
import styled from 'styled-components';
import {UserFile} from "@/src/app/files/file.interface";
import {TrashButton, Text} from "@consus/react-ui";

const CellText = styled(Text).attrs({size: 'xs'})``

export interface FileRowProps {
    file: UserFile;
    "data-testid"?: string;

    [props: string]: any;
}

export const FileRow = ({file}: FileRowProps) => {
    return (<tr>
        <td>
            <CellText>
                {file.name}
            </CellText>
        </td>
        <td>
            <CellText>
                {file.extension}
            </CellText></td>
        <td><CellText>{file.size.toLocaleString()}</CellText></td>
        <td><CellText>{file.owner || '-'}</CellText></td>
        <td>
            <TrashButton/>
        </td>
    </tr>)
};
