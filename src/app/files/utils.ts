import {UserFile, UserFileDescriptor} from "@/src/app/files/file.interface";

export const hasAccess = (userId: string, file: UserFile) => {
    return file.owner === userId || file.sharedWith.includes(userId);
}

export const fullName = (fileDescriptor: UserFileDescriptor) => {
    if(!fileDescriptor.name) return '';
    return `${fileDescriptor.name}${fileDescriptor.extension}`;
}

export const getExtension = (file: File) => {
    return '.' + file.name.split('.').pop()
}
