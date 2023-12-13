'use client'
import {User} from "@/src/app/(users)/interfaces";

import styles from './UserList.module.css';
import {useEffect, useState} from "react";
import {Input} from "@/src/shared/components/Input/Input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {UserFileDescriptor} from "@/src/app/files/file.interface";
import {SubmitButton} from "@/src/shared/components/form/SubmitButton/SubmitButton";
import {useRouter} from "next/navigation";

export interface UserListProps {
    file: UserFileDescriptor,
    users: User[],
    onShare: (fileId: string, users: string[]) => Promise<void>
}

const filterUsers = (users: User[], search: string) => {
    return users.filter(u => {
        return u.username.toLowerCase().includes(search.toLowerCase());
    })
}

export const UserShareList = ({file, users, onShare}: UserListProps) => {
    const [usersChecked,setUsersChecked] = useState<string[]>(file.sharedWith || []);
    const [filteredUsers,setFilteredUsers] = useState<User[]>([]);
    const [search,setSearch] = useState<string>('');
    const [isSharing,setIsSharing] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setFilteredUsers(filterUsers(users, search));
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users, search])

    const handleSearchChange = (e: any) => {
        const value = e.target.value;
        setSearch(value);
    }

    const handleUserClick = (user: User) => {
        setUsersChecked((usersChecked) => {
            const updatedUsers = [...usersChecked];
            const index = updatedUsers.findIndex(u => u === user.id);
            if (index !== -1) {
                updatedUsers.splice(index, 1);
            } else {
                updatedUsers.push(user.id);
            }
            return [...updatedUsers];
        })
    }

    const handleShare = async () => {
        setIsSharing(true);
        await onShare(file.id, usersChecked);
        setIsSharing(false);
        router.push(`/files/list/${file.id}/share/success`)
    }

    const isSharedWith = (user: User) => {
        return usersChecked.some(u => u === user.id);
    }

    return (<div className={styles.container}>
        <Input placeholder={'Buscar por correo electronico...'} onChange={handleSearchChange}/>
        {
            filteredUsers.length === 0 ? <div className={styles.noUsers}>No se encontraron usuarios</div> : <div className={styles.userList}>
                {
                    filteredUsers.map((user, i) => (
                        <>
                            <div className={styles.userRow} key={user.id} onClick={() => handleUserClick(user)}>
                                <span>{user.username}</span>
                                {
                                    isSharedWith(user) && <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                }
                            </div>
                            {
                                i < filteredUsers.length - 1 && <div key={`${user.id}-divider`} className={styles.divider}></div>
                            }
                        </>
                    ))
                }
            </div>
        }
        <SubmitButton className={styles.shareButton} onClick={handleShare} isSubmitting={isSharing}>Modificar accesos</SubmitButton>
    </div>)
}
