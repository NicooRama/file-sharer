import {FileDescriptor} from "@/src/app/files/file.interface";

export const hasAccess = (userId: string, file: FileDescriptor) => {
    return file.owner === userId || file.sharedWith.includes(userId);
}
