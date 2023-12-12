'use client'
import React from 'react';
import {UserFile} from "@/src/app/files/file.interface";
import {FileRow} from "@/src/app/files/list/components/FileRow/FileRow";
import {theme} from "@/src/shared/theme";

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
        <div></div>
    )
};
