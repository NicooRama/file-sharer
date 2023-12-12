import {NextResponse} from "next/server";
import {withAuth} from "next-auth/middleware";

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        const {token} = req.nextauth;

        if (token) {
            return NextResponse.next()
        }

        return NextResponse.redirect(new URL('/sign-in',req.url))
    },
    {
        callbacks: {
            authorized: ({ token }) => true,
        },
    }
)

export const config = {
    matcher: [
        '/files/list',
    ],
}
