import {UserFile, UserFileDescriptor, UserFileDescriptorUpdate} from "@/src/app/files/file.interface";
import {hasAccess} from "@/src/app/files/utils";
import {findById} from "@/src/app/(users)/users/api/db";

const dynamic = 'force-dynamic'

export const userFiles: UserFile[] = [];

const userFileToFileDescriptor = (userFile: UserFile): UserFileDescriptor => ({
    id: userFile.id,
    name: userFile.file.name,
    owner: findById(userFile.owner)?.username || '',
    extension: userFile.file.name.split('.').pop() || '',
    size: userFile.file.size,
    createdAt: userFile.createdAt,
    sharedWith: userFile.sharedWith,
});

export async function getUserFileDescriptorsWithAccess(userId: string): Promise<UserFileDescriptor[]> {
    console.log(userFiles)
    const filesWithAccess = userFiles.filter(f => hasAccess(userId, f));

    return filesWithAccess.map(userFileToFileDescriptor);
}

export async function findFileDescriptor(fileId: string) {
    return userFiles.find(f => f.id === fileId);
}

export async function findUserFileWithAccess(userId: string, fileId: string): Promise<UserFile | undefined> {
    return userFiles.find(f => f.id === fileId && hasAccess(userId, f));
}

export async function updateUserFileDescriptor(userFile: UserFile, values: UserFileDescriptorUpdate) {
    const index = userFiles.findIndex(f => f.id === userFile.id);

    const updatedUserFile = new File([userFile.file], values.name || userFile.file.name, {type: userFile.file.type});

    userFiles[index] = {
        ...userFile,
        ...values,
        file: updatedUserFile,
    }

    return userFiles[index];
}

export async function getFile(fileId: string) {

}

export async function saveFile(userId: string, file: File) {
    if (!file) {
        throw new Error('No file uploaded')
    }

    const userFile: UserFile = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        owner: userId,
        sharedWith: [],
        file,
    }

    userFiles.push(userFile);
    return userFile;
}
