import {sleep} from "@/src/shared/utils";
import {findUsers} from "@/src/app/(users)/users/api/service";
import {NextRequest} from "next/server";

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
