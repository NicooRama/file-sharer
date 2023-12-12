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
    },
    {
        id: '4',
        username: 'kunaguero@gmail.com',
        password: 'aguero2023'
    },
    {
        id: '5',
        username: 'paulodybala@gmail.com',
        password: 'dybala10'
    },
    {
        id: '6',
        username: 'sergioramos@gmail.com',
        password: 'halamadrid'
    },
    {
        id: '7',
        username: 'virgilvandijk@gmail.com',
        password: 'liverpoolfc'
    },
    {
        id: '8',
        username: 'kevindebruyne@gmail.com',
        password: 'manchestercity'
    },
    {
        id: '9',
        username: 'neymarjr@gmail.com',
        password: 'psgforever'
    },
    {
        id: '10',
        username: 'masonmount@gmail.com',
        password: 'chelseafc'
    },
];

export const userExists = (username: string) => {
    return users.some(u => u.username.toLowerCase() === username.toLowerCase());
}

export const findById = (id: string): User | undefined => users.find(u => u.id === id);

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
