import {SignUpPayload} from "@/src/app/(users)/interfaces";
import axios from "axios";
import {baseUrl} from "@/src/core/constants";
import {signIn} from "next-auth/react";

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
