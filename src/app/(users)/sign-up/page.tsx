import {SignUpForm} from "./components/SignUpForm";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function SignUpPage() {
    const session = await getServerSession();
    if(session) {
        redirect('/files/list')
    }

    return (
        <div>
            <SignUpForm />
        </div>
    )
}
