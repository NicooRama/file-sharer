import {UserFile} from "@/src/app/files/file.interface";
import {baseUrl} from "@/src/core/constants";

export async function fileList() {
    const res = await fetch(`${baseUrl}/files/api/list`, {next: {tags: ['files']}});
    return await res.json();
}

export async function saveFile(file: UserFile) {
   //TODO: check user token
}

//TODO: id o email?
export async function share(fileId: string, userIdToShare: string) {
   //TODO: check user token

}

export async function revokeAccess(fileId: string, userIdToShare: string) {
    //TODO: check user token
}
