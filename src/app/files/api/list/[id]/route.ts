import {NextRequest} from "next/server";
import {getUser} from "@/src/core/auth";
import {files, findFile, findFileWithAccess, getFilesWithAccess, updateFile} from "@/src/app/files/api/db";
import {FileDescriptor} from "@/src/app/files/file.interface";

export const dynamic = 'force-dynamic' // defaults to force-static

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await getUser(req);
    const file = await findFileWithAccess(user.id, params.id);
    if(!file) {
        return Response.json('', {status: 404});
    }
    return Response.json(file);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await getUser(req);
    const body: Partial<FileDescriptor> = await req.json();
    const file = await findFileWithAccess(user.id, params.id);
    if(!file) {
        return Response.json('', {status: 404});
    }

    const updatedFile = await updateFile(file, body);

    return Response.json(updatedFile);
}
