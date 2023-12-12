import {NextRequest} from "next/server";
import {getUser} from "@/src/core/auth";
import {getFilesWithAccess} from "@/src/app/files/api/db";

export const dynamic = 'force-dynamic' // defaults to force-static

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await getUser(req);
    console.log(params.id);

    // const { searchParams } = new URL(req.url)
    // const userId = searchParams.get('userId') as string;
    const availableFiles = await getFilesWithAccess(user.id);
    return Response.json(availableFiles);
}
