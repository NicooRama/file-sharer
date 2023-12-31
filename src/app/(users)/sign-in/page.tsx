import {SignInForm} from "./components/SignInForm";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function SignInPage() {
    const session = await getServerSession();
    if(session) {
        redirect('/files/list')
    }

    return (
        <div>
            <SignInForm/>
        </div>
    )
}
