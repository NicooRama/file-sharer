import {sleep} from "@/src/shared/utils";
import {NextRequest} from "next/server";
import {findUsers, userExists, users} from "@/src/app/(users)/users/api/db";
import crypto from "crypto";
import {getUser} from "@/src/core/auth";

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
    await sleep(1000);
    const user = await getUser(req);

    const users = findUsers();
    const usersToShare = users.filter(u => u.id !== user.id);

    return Response.json(usersToShare);
}

export async function POST(req: NextRequest) {
    await sleep(1000);

    const {username, password} = await req.json();

    if(userExists(username)) {
        return Response.json({code: 'userAlreadyExists'}, {status: 400});
    }

    const id = crypto.randomUUID();
    users.push({id, username, password});
    return Response.json('', {status: 201});
}
