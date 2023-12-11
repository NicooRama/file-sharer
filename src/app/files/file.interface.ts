export interface UserFile {
    id: string;
    name: string;
    extension: string;
    size: number;
    createdAt: Date;
    owner: string;
    sharedWith: string[];
}