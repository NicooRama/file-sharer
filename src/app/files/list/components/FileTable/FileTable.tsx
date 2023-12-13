'use client'
import React from 'react';
import {UserFileDescriptor} from "@/src/app/files/file.interface";
import {ColumnDef, getCoreRowModel, getSortedRowModel, SortingState} from "@tanstack/table-core";
import {flexRender, useReactTable} from "@tanstack/react-table";
import styles from './FileTable.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";
import {FileActionsCell} from "@/src/app/files/list/components/FileActionsCell/FileActionsCell";
import {Text} from '@/src/shared/components/Text/Text';
import {Card} from "@/src/shared/components/Card/Card";
import {LinkButton} from "@/src/shared/components/LinkButton/LinkButton";

export interface FileTableProps {
    files: UserFileDescriptor[];
    onFileRemove: (fileId: string) => Promise<void>;
    "data-testid"?: string;

    [props: string]: any;
}

const numberToFileSize = (size: number) => {
    const units = ['bytes', 'KB', 'MB', 'GB'];
    let l = 0, n = parseInt(size.toString(), 10) || 0;

    while (n >= 1024 && ++l) {
        n = n / 1024;
    }

    return `${n.toFixed(n >= 10 || l < 1 ? 0 : 1)} ${units[l]}`;
}

// el componente tabla de la lib esta trayendo problemas
export const FileTable = ({user, files, onFileRemove}: FileTableProps) => {
    const [sorting, setSorting] = React.useState<SortingState>([])

    const columns = React.useMemo<ColumnDef<UserFileDescriptor>[]>(
        () => [
            {
                header: 'Nombre',
                accessorKey: 'name',
                cell: ({row}) => {
                    return <div className={styles.nameCell}>
                        {row.original.name as string}
                        <LinkButton href={`/files/list/${row.original.id}/edit`} variant={'tertiary'}>
                            <FontAwesomeIcon icon={faPen} title={'Editar'} />
                        </LinkButton>
                    </div>
                }
            },
            {
                header: 'Extension',
                accessorKey: 'extension',
            },
            {
                header: 'Tamaño',
                accessorKey: 'size',
                cell: (context) => {
                    return numberToFileSize(context.getValue() as number);
                }
            },
            {
                header: 'Propietario',
                accessorKey: 'owner',
                cell: (context) => {
                    const value = context.getValue();
                    if (value === user.username) {
                        return 'Yo';
                    }
                    return value;
                }
            },
            {
                header: 'Creado el',
                accessorKey: 'createdAt',
                cell: (context) => {
                    return new Date(context.getValue() as string).toLocaleString();
                }
            },
            {
                header: '',
                id: 'actions',
                cell: ({row}) => {
                    return <FileActionsCell file={row.original} isOwner={row.original.owner === user.username} onFileRemove={onFileRemove} />
                }
            }
        ],
        []
    )

    const table = useReactTable({
        data: files,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    if(files.length === 0) {
        return <div className={styles.container}>
            <Card>
                <div className={styles.emptyStateContainer}>
                    <Text size={'lg'} align={'center'}>Todavia no subiste ningun archivo</Text>
                </div>
            </Card>
        </div>
    }

    return (
        <div className={styles.container}>
            <table>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (
                                <th key={header.id} colSpan={header.colSpan}>
                                    <div
                                        className={header.column.getCanSort() ? styles.sortAvailable : ''}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {{
                                            asc: <FontAwesomeIcon icon={faSortUp} className={styles.sortIcon} />,
                                            desc: <FontAwesomeIcon icon={faSortDown} className={styles.sortIcon} />,
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                </th>
                            )
                        })}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table
                    .getRowModel()
                    .rows
                    .map(row => {
                        return (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};
