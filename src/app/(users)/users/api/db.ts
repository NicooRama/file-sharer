import {SignInPayload, User} from "@/src/app/(users)/interfaces";

export const users: User[] = [
    {
        id: '1',
        username: 'leomessi@gmail.com',
        password: 'loscafre2022'
    },
    {
        id: '2',
        username: 'depaul@gmail.com',
        password: 'hola1234'
    },
    {
        id: '3',
        username: 'dibumartinez@gmail.com',
        password: 'miraquetecomo'
    }
]

export const userExists = (username: string) => {
    return users.some(u => u.username.toLowerCase() === username.toLowerCase());
}

export const findUsers = () => {
    return users.map(u => ({
        ...u,
        password: undefined
    }));
}

export const signIn = (payload: SignInPayload) => {
    if(!payload || !payload.username || !payload.password) {
        return null;
    }

    const user = users.find(u => u.username.toLowerCase() === payload.username.toLowerCase());

    if(!user || user.password !== payload.password) {
        return null;
    }

    return {...user, password: undefined};
}
