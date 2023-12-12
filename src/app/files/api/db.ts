import {FileDescriptor} from "@/src/app/files/file.interface";
import {hasAccess} from "@/src/app/files/utils";
import {findById} from "@/src/app/(users)/users/api/db";

export const files: FileDescriptor[] = [
    {
        id: "1",
        name: 'Foo',
        extension: '.txt',
        size: 10000,
        createdAt: new Date(),
        owner: '1',
        sharedWith: ['2']
    },
    {
        id: "2",
        name: 'zaz',
        extension: '.txt',
        size: 15000,
        createdAt: new Date(),
        owner: '1',
        sharedWith: []
    },
    {
        id: "3",
        name: 'bar',
        extension: '.txt',
        size: 5000,
        createdAt: new Date(),
        owner: '1',
        sharedWith: []
    },
    {
        id: "4",
        name: 'bar4',
        extension: '.txt',
        size: 5000,
        createdAt: new Date(),
        owner: '2',
        sharedWith: []
    },
];

export async function getFilesWithAccess(userId: string) {
    const filesWithAccess = files.filter(f => hasAccess(userId, f));

    return filesWithAccess.map(f => ({
        ...f,
        owner: findById(f.owner)?.username || '',
    }));
}

export async function findFile(fileId: string) {
    return files.find(f => f.id === fileId);
}

export async function findFileWithAccess(userId: string, fileId: string) {
    return files.find(f => f.id === fileId && hasAccess(userId, f));
}

export async function updateFile (file: FileDescriptor, values: Partial<FileDescriptor>) {
    const index = files.findIndex(f => f.id === file.id);
    files[index] = {
        ...file,
        ...values
    }

    return files[index];
}

export async function saveFile(file: FileDescriptor) {
    //TODO: check user token
}
