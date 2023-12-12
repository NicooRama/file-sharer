import {User} from "next-auth";

export interface FileDescriptor {
    id: string;
    name: string;
    extension: string;
    size: number;
    createdAt: Date;
    owner: string;
    sharedWith: string[];
}
