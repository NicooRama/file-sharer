import {sleep} from "@/src/shared/utils";
import {files} from "@/src/app/files/api/db";
import {hasAccess} from "@/src/app/files/utils";

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request) {
    await sleep(1000);
    //TODO: get user from request;
    const user = {id: '1'}
    const availableFiles = files.filter(f => hasAccess(user.id, f));
    return Response.json(availableFiles);
}

export async function POST(request: Request) {
    return Response.json({message: 'ok'});
}
