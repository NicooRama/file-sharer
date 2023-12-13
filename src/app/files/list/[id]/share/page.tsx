import {fetchUsersToShare} from "@/src/app/(users)/users/api/service";
import {UserShareList} from "@/src/app/files/list/[id]/share/components/UserList/UserShareList";
import {fetchFile, shareFile} from "@/src/app/files/api/service";
import {Text} from "@/src/shared/components/Text/Text";
import styles from './page.module.css'
import {notFound} from "next/navigation";
import {getSessionUser, getSessionUserId} from "@/src/core/auth";

export const dynamic = 'force-dynamic';

export default async function FileSharePage({ params }: { params: { id: string } }) {
    const usersToShare = await fetchUsersToShare();
    const user = await getSessionUser();
    const file = await fetchFile(params.id);

    if(!file || file.owner !== user.username) {
        return notFound();
    }

    const onShareFile = async (fileId: string, usersToShare: string[]) =>  {
        'use server'
        await shareFile(fileId, usersToShare);
    }


    return (
        <div className={styles.container}>
            <Text size={'md'}>Comparti o elimina accessos para <Text weight={'semiBold'} size={'md'}>{file.name}{file.extension}</Text> con:</Text>
            <UserShareList file={file} users={usersToShare} onShare={onShareFile}/>
        </div>
    )
}
