import {NextRequest} from "next/server";
import {createUser, findUsersToShare, userExists} from "@/src/app/(users)/users/api/db.service";
import {getUser} from "@/src/core/auth";

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
    const user = await getUser(req);

    const usersToShare = await findUsersToShare(user);

    return Response.json(usersToShare);
}

export async function POST(req: NextRequest) {
    const {username, password} = await req.json();

    const exists = await userExists(username);

    if(exists) {
        return Response.json({code: 'userAlreadyExists'}, {status: 400});
    }

    await createUser(username, password)

    return Response.json('', {status: 201});
}
