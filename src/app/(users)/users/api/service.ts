import {api, authorizationHeaders} from "@/src/app/api/api";

export const dynamic = 'force-dynamic';
export const fetchUsersToShare = async () => {
    const res = await api.get(`/users/api`, {
        ...authorizationHeaders(),
    });
    return res.data;
}
