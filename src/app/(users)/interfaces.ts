export interface User {
    id: string;
    username: string;
    password?: string; //should be encrypted in real project
}

export interface SignInPayload {
    username: string;
    password: string;
}

export interface SignUpPayload {
    username: string;
    password: string;
}


