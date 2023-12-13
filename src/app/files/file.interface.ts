export interface UserFile {
    id: string;
    createdAt: Date;
    owner: string;
    sharedWith: string[];
    file: File;
}

export interface UserFileDescriptor extends Omit<UserFile, 'file'>{
    name: string;
    extension: string;
    size: number;
}

export interface UserFileDescriptorUpdate {
    name: string;
    sharedWith: string[];
}
