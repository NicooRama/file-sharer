import {fileList} from "@/src/app/files/api/service";
import {getServerSession} from "next-auth";
import {authConfig, validateLoggedIn} from "@/src/core/auth";


export default async function FileListPage() {
    // await validateLoggedIn();
    const session: any = await getServerSession(authConfig);

    const files = await fileList();

    return (
        <div>
            <h1>Logged in as {session?.user?.username}</h1>
        </div>
    )
}
