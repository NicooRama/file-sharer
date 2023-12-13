import {SignUpPayload} from "@/src/app/(users)/interfaces";
import axios from "axios";
import {signIn} from "next-auth/react";

export const postSignUp = async (payload: SignUpPayload) => {
    const res = await axios.post(`/users/api`, payload);
    return res.data;
}

export const postSignIn = async (payload: SignUpPayload) => {
    return await signIn('credentials', {
        redirect: false,
        email: payload.username,
        password: payload.password
    });
}
