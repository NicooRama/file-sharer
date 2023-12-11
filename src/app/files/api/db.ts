import {UserFile} from "@/src/app/files/file.interface";

export const files: UserFile[] = [
    {
        id: "1",
        name: 'Foo',
        extension: '.txt',
        size: 10000,
        createdAt: new Date(),
        owner: '1',
        sharedWith: []
    }
];
