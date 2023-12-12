import {baseUrl} from "@/src/core/constants";
import {SignUpPayload} from "@/src/app/(users)/interfaces";
import axios from 'axios';
import {signIn} from "next-auth/react";
import {api, authorizationHeaders} from "@/src/app/api/api";

export const dynamic = 'force-dynamic';
export const fetchUsersToShare = async () => {
    const res = await api.get(`/users/api`, {
        ...authorizationHeaders(),
    });
    return res.data;
}
