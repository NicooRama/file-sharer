import {users} from "@/src/app/(users)/users/api/db";
import {baseUrl} from "@/src/core/constants";
import {SignUpPayload} from "@/src/app/(users)/interfaces";
import axios from 'axios';
import {signIn} from "next-auth/react";

//TODO: force dynamic
export const fetchUsersToShare = async () => {
    const res = await fetch(`${baseUrl}/users/api?forShare=true`);
    return await res.json();
}

export const postSignUp = async (payload: SignUpPayload) => {
    const res = await axios.post(`${baseUrl}/users/api`, payload);
    return res.data;
}

export const postSignIn = async (payload: SignUpPayload) => {
    return await signIn('credentials', {
        redirect: false,
        email: payload.username,
        password: payload.password
    });
}
