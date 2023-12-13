import {SignInPayload, User} from "@/src/app/(users)/interfaces";
import {users} from "@/src/app/(users)/users/api/db";

const dynamic = 'force-static';

export const userExists = async (username: string) => {
    return users.some(u => u.username.toLowerCase() === username.toLowerCase());
}

export const findById = (id: string): User | undefined => users.find(u => u.id === id);

export const findUsers = async () => {
    return users.map(u => ({
        ...u,
        password: undefined
    }));
}

export const findUsersToShare = async (owner: User) => {
    const users = await findUsers();
    return users.filter(u => u.id !== owner.id)
}

export const signIn = async (payload: SignInPayload) => {
    if(!payload || !payload.username || !payload.password) {
        return null;
    }

    const user = users.find(u => u.username.toLowerCase() === payload.username.toLowerCase());

    if(!user || user.password !== payload.password) {
        return null;
    }

    return {...user, password: undefined};
}

export const createUser = async (username: string, password: string) => {
    const id = crypto.randomUUID();
    users.push({id, username, password});
}
