import {fetchFiles} from "@/src/app/files/api/service";
import {getServerSession} from "next-auth";
import {authConfig, getSessionUser, validateLoggedIn} from "@/src/core/auth";
import {FileTable} from "@/src/app/files/list/components/FileTable/FileTable";


export default async function FileListPage() {
    const [user, files] = await Promise.all([
        getSessionUser(),
        fetchFiles()
    ]);

    return (
        <div>
            <FileTable files={files} user={user} />
        </div>
    )
}
