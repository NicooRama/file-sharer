import {UserFile} from "@/src/app/files/file.interface";

export const hasAccess = (userId: string, file: UserFile) => {
    return file.owner === userId || file.sharedWith.includes(userId);
}
