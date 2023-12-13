import {getSessionUserId} from "@/src/core/auth";
import {saveFile} from "@/src/app/files/api/db.service";
import {revalidateTag} from "next/cache";
import {UploadFormControls} from "@/src/app/files/upload/components/UploadFormControls/UploadFormControls";
import {redirect} from "next/navigation";

export default function ServerUploadPage() {
    async function upload(data: FormData) {
        'use server'
        const userId = await getSessionUserId();
        const file: File | null = data.get('file') as unknown as File

        await saveFile(userId, file);
        revalidateTag(`files`);

        redirect('/files/list')
    }


    return (
        <main>
            <form action={upload}>
                {/*<input type="file" name="file" />*/}
                <UploadFormControls />
            </form>
        </main>
    )
}
