import {redirect} from "next/navigation";
import {useSession} from "next-auth/react";

export const useIsLoggedIn = () => {
    const session = useSession();
    if (!session) {
        return redirect('/sign-in')
    }
}
