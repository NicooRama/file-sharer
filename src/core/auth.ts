import {getServerSession, NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {signIn} from "@/src/app/(users)/users/api/db";
import {redirect} from "next/navigation";

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
                return signIn({username: credentials.email, password: credentials.password});
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
