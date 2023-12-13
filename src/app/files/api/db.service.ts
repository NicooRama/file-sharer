import {UserFile, UserFileDescriptor, UserFileDescriptorUpdate} from "@/src/app/files/file.interface";
import {getExtension, hasAccess} from "@/src/app/files/utils";
import {findById} from "@/src/app/(users)/users/api/db.service";
import {userFiles} from "@/src/app/files/api/db";

const dynamic = 'force-static';

const userFileToFileDescriptor = (userFile: UserFile): UserFileDescriptor => ({
    id: userFile.id,
    name: userFile.file.name.split('.').slice(0, -1).join('.') || '',
    owner: findById(userFile.owner)?.username || '',
    extension: getExtension(userFile.file) || '',
    size: userFile.file.size,
    createdAt: userFile.createdAt,
    sharedWith: userFile.sharedWith,
});

export async function getUserFileDescriptorsWithAccess(userId: string): Promise<UserFileDescriptor[]> {
    const filesWithAccess = userFiles.filter(f => hasAccess(userId, f));

    return filesWithAccess.map(userFileToFileDescriptor);
}

export async function findFileDescriptor(fileId: string) {
    return userFiles.find(f => f.id === fileId);
}

export async function findUserFileWithAccess(userId: string, fileId: string): Promise<UserFile | undefined> {
    return userFiles.find(f => f.id === fileId && hasAccess(userId, f));
}

export async function findUserFileDescriptorWithAccess(userId: string, fileId: string): Promise<UserFileDescriptor | undefined> {
    const userFile = await findUserFileWithAccess(userId, fileId);
    if (!userFile) return undefined;
    return userFileToFileDescriptor(userFile);
}

export async function updateUserFileDescriptor(userFile: UserFile, values: UserFileDescriptorUpdate) {
    const index = userFiles.findIndex(f => f.id === userFile.id);

    const normalizedNameValue = values.name?.trim() + getExtension(userFile.file);
    const updatedName = values.name ? normalizedNameValue : userFile.file.name;

    const updatedUserFile = new File([userFile.file], updatedName, {type: userFile.file.type});

    userFiles[index] = {
        ...userFile,
        ...values,
        file: updatedUserFile,
    }

    return userFiles[index];
}

export async function removeFile(userFile: UserFile) {
    const index = userFiles.findIndex(f => f.id === userFile.id);
    userFiles.splice(index, 1);
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
