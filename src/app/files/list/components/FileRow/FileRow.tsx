'use client';
import React from 'react';
import {UserFileDescriptor} from "@/src/app/files/file.interface";

export interface FileRowProps {
    file: UserFileDescriptor;
    "data-testid"?: string;

    [props: string]: any;
}

export const FileRow = ({file}: FileRowProps) => {
    return (<tr>
        <td>
                {file.name}
        </td>
        <td>
                {file.extension}
    </td>
        <td>{file.size.toLocaleString()}</td>
        <td>{file.owner || '-'}</td>
        <td>
            <button/>
        </td>
    </tr>)
};
