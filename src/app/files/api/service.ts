import {baseUrl} from "@/src/core/constants";
import {api, authorizationHeaders} from "@/src/app/api/api";
import {revalidateTag} from "next/cache";

export const dynamic = 'force-dynamic'

export async function fetchFiles() {
    const res = await api.get(`/files/api/list`, {
        ...authorizationHeaders(),
        next: {
            tags: [`files`]
        }
    });
    return res.data;
}

export async function fetchFile(fileId: string) {
    const res = await api.get(`/files/api/list/${fileId}`, {
        ...authorizationHeaders(),
        next: {
            tags: [`file${fileId}`]
        }
    });
    return res.data;
}

export async function shareFile(fileId: string, users: string[]) {
    const res = await api.put(`/files/api/list/${fileId}`, {
        sharedWith: users
    }, {
        ...authorizationHeaders(),
    });
    revalidateTag(`file${fileId}`);
    revalidateTag(`files`);
    return res.data;
}
