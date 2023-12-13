import {getSessionUser} from "@/src/core/auth";
import {fetchFile, updateFileName} from "@/src/app/files/api/service";
import {notFound, redirect} from "next/navigation";
import {Text} from "@/src/shared/components/Text/Text";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {FormFrame} from "@/src/shared/components/FormFrame/FormFrame";
import {FormContainer} from "@/src/shared/components/form/FormContainer/FormContainer";
import {
    EditFileFormControls
} from "@/src/app/files/list/[id]/edit/components/EditFileFormControls/EditFileFormControls";
import {fullName} from "@/src/app/files/utils";

export default async function Page({params}: { params: { id: string } }) {
    const user = await getSessionUser();
    const userFile = await fetchFile(params.id);

    if (!userFile || userFile.owner !== user.username) {
        return notFound();
    }

    async function update(data: FormData) {
        'use server'

        const name = data.get('name') as string;

        await updateFileName(userFile.id, name);
        redirect(`/files/list/${userFile.id}/edit/success`)
    }

    return (
        <div>
            <form action={update}>
                <FormFrame icon={faPenToSquare}>
                    <FormContainer>
                        <Text size={'md'} align={'center'}>Modifica
                            <Text size={'md'} align={'center'} weight={'semiBold'}> {fullName(userFile)}</Text>
                        </Text>
                        <EditFileFormControls fileDescriptor={userFile}/>
                    </FormContainer>
                </FormFrame>
            </form>
        </div>
    )
}
