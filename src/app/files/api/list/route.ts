import {getFilesWithAccess} from "@/src/app/files/api/db";
import {getUser} from "@/src/core/auth";
import {NextRequest} from "next/server";

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(req: NextRequest) {
    const user = await getUser(req);
    const availableFiles = await getFilesWithAccess(user.id);
    return Response.json(availableFiles);
}
