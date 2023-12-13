import {getServerSession, NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {signIn} from "@/src/app/(users)/users/api/db.service";
import {redirect} from "next/navigation";
import {getToken} from "next-auth/jwt";
import {NextRequest} from "next/server";
import {User} from "@/src/app/(users)/interfaces";

export const authConfig: NextAuthOptions = {
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    },
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.user = user
            }
            return token
        },
        async session({session, token}) {
            if (session) {
                //@ts-ignore
                session.user = token.user
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@example.com'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null
                }
                return await signIn({username: credentials.email, password: credentials.password});
            }
        })
    ]
}

export async function validateLoggedIn() {
    const session = await getServerSession(authConfig);
    if (!session) {
        return redirect('/sign-in')
    }
}

export async function getSessionUser() {
    const session = await getServerSession(authConfig);
    return (session?.user as User);
}

export async function getSessionUserId() {
    const user = await getSessionUser();
    return user?.id;
}

export async function getUser(req: NextRequest) {
    const session = await getToken({req});
    return (session?.user as User);
}
