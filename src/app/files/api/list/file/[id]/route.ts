import {getUser} from "@/src/core/auth";
import {NextRequest} from "next/server";
import {findUserFileWithAccess} from "@/src/app/files/api/db.service";

const dynamic = 'force-dynamic' // defaults to force-static

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await getUser(req);
    const userFile = await findUserFileWithAccess(user.id, params.id);
    if(!userFile) {
        return Response.json({status: 404});
    }

    const response = new Response(userFile.file)
    response.headers.set('Content-Type', userFile.file.type);
    response.headers.set('Content-Disposition', `attachment; filename="${userFile.file.name}"`);

    return response;
}
