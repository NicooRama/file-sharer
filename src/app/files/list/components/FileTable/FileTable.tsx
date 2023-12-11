'use client'
import React from 'react';
import {Table} from "@consus/react-ui";
import styled from 'styled-components';
import {UserFile} from "@/src/app/files/file.interface";
import {FileRow} from "@/src/app/files/list/components/FileRow/FileRow";
import {theme} from "@/src/shared/theme";
import {ThemeProvider} from "styled-components";

const Container = styled.div`
`

const StyledTable = styled(Table)`
  background-color: white;
`

export interface FileTableProps {
    files: UserFile[];
    "data-testid"?: string;
    [props: string]: any;
}

const headers = [
    {
        title: 'Nombre'
    },
    {
        title: 'Extension'
    },
    {
        title: 'Tamaño'
    },
    {
        title: 'Compartido por'
    },
    {
        title: ''
    }
]

// el componente tabla de la lib esta trayendo problemas
export const FileTable = ({files}: FileTableProps) => {
    return (
        <ThemeProvider theme={theme}>
        <Container>
        <StyledTable headers={headers}>
            <tbody>
            {
                files.map((file) => <FileRow file={file} key={file.id}/>)
            }
            </tbody>
        </StyledTable>
    </Container>
        </ThemeProvider>)
};
