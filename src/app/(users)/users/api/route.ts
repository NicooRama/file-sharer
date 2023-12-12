import {sleep} from "@/src/shared/utils";
import {NextRequest} from "next/server";
import {findUsers, userExists, users} from "@/src/app/(users)/users/api/db";
import crypto from "crypto";

export async function GET(req: NextRequest) {
    await sleep(1000);

    //TODO: search params
    const params = {
        forShare: true
    }
    //TODO: get user logged user from request
    const user = {
        id: '1',
    }
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
