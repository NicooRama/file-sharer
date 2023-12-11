import {FileTable} from "@/src/app/files/list/components/FileTable/FileTable";
import {fileList} from "@/src/app/files/api/service";

export default async function FileListPage() {
    const files = await fileList();

    return (
        <FileTable files={files}/>
    )
}
