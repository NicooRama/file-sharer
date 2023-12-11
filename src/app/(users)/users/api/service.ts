import * as crypto from "crypto";
import {users} from "@/src/app/(users)/users/api/db";
import {SignInPayload} from "@/src/app/(users)/interfaces";
import {baseUrl} from "@/src/core/constants";

//TODO: force dynamic
export const fetchUsersToShare = async () => {
    const res = await fetch(`${baseUrl}/users/api?forShare=true`, {
        next: {tags: ['users']
        }
    });
    return await res.json();
}

export const saveUser = (user: {username: string, password: string}) => {
    const id = crypto.randomUUID();
    users.push({id, ...user});
}

export const findUsers = () => {
    return users.map(u => ({
        ...u,
        password: undefined
    }));
}

export const signIn = (payload: SignInPayload) => {
    const user = users.find(u => u.username.toLowerCase() === payload.username.toLowerCase());

    if(!user || user.password !== payload.password) {
        throw Error ('Las credenciales ingresadas son incorrectas')
    }

    // generate jwt
}
