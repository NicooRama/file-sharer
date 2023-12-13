import {getUserFileDescriptorsWithAccess} from "@/src/app/files/api/db.service";
import {getUser} from "@/src/core/auth";
import {NextRequest} from "next/server";

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(req: NextRequest) {
    const user = await getUser(req);
    const availableFiles = await getUserFileDescriptorsWithAccess(user.id);
    return Response.json(availableFiles);
}
