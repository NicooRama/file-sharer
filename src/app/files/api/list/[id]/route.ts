import {NextRequest} from "next/server";
import {getUser} from "@/src/core/auth";
import {
    findUserFileDescriptorWithAccess,
    findUserFileWithAccess, removeFile,
    updateUserFileDescriptor
} from "@/src/app/files/api/db.service";
import {UserFileDescriptorUpdate} from "@/src/app/files/file.interface";

export const dynamic = 'force-dynamic' // defaults to force-static

export async function GET(req: NextRequest, {params}: { params: { id: string } }) {
    const user = await getUser(req);
    const file = await findUserFileDescriptorWithAccess(user.id, params.id);
    if (!file) {
        return Response.json('', {status: 404});
    }
    return Response.json(file);
}

export async function PUT(req: NextRequest, {params}: { params: { id: string } }) {
    const user = await getUser(req);
    const body: UserFileDescriptorUpdate = await req.json();
    const userFile = await findUserFileWithAccess(user.id, params.id);
    if (!userFile || userFile.owner !== user.id) {
        return Response.json('', {status: 404});
    }

    const updatedFile = await updateUserFileDescriptor(userFile, body);

    return Response.json(updatedFile);
}

// export async function DELETE(req: NextRequest, {params}: { params: { id: string } }) {
//     const user = await getUser(req);
//     const userFile = await findUserFileWithAccess(user.id, params.id);
//     if (!userFile || userFile.owner !== user.id) {
//         return Response.json('', {status: 404});
//     }
//
//     await removeFile(userFile);
//
//     return Response.json('', {status: 200});
// }
