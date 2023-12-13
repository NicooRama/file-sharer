import {fetchFiles} from "@/src/app/files/api/service";
import {getServerSession} from "next-auth";
import {authConfig, getSessionUser, getSessionUserId, validateLoggedIn} from "@/src/core/auth";
import {FileTable} from "@/src/app/files/list/components/FileTable/FileTable";
import {LinkButton} from "@/src/shared/components/LinkButton/LinkButton";
import {Text} from "@/src/shared/components/Text/Text";
import styles from './page.module.css';
import {findUserFileWithAccess, removeFile, saveFile} from "@/src/app/files/api/db.service";
import {revalidateTag} from "next/cache";
import {notFound, redirect} from "next/navigation";

export default async function FileListPage() {
    const [user, files] = await Promise.all([
        getSessionUser(),
        fetchFiles()
    ]);

    const handleRemove = async (fileId: string) => {
        'use server'
        const userFile = await findUserFileWithAccess(user.id, fileId);

        if (!userFile || !userFile.owner || userFile.owner !== user.id) {
            return redirect(`/files/list/not-found`);
        }

        await removeFile(userFile);
        revalidateTag(`files`);
        revalidateTag(`file${fileId}`);
    }

    return (
        <div className={styles.container}>
            <Text size={'lg'}>Mis archivos</Text>
            <FileTable files={files} user={user} onFileRemove={handleRemove} />
            <LinkButton href={'/files/upload'} className={styles.uploadButton}>Subir archivo</LinkButton>
        </div>
    )
}
