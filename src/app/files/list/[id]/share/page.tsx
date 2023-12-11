import {fetchUsersToShare} from "@/src/app/(users)/users/api/service";
import {User} from "@/src/app/(users)/interfaces";
import {UserList} from "@/src/app/files/list/[id]/share/components/UserList/UserList";

export default async function FileSharePage() {
    let usersToShare: User[] = await fetchUsersToShare();

    //hacer un componente con la lista de usuarios y vaya checkeando con quien quiere compartir
    //con un input para que pueda filtrar

    return (
        <div>
            <UserList users={usersToShare} />
        </div>
    )
}
