'use client'
import {User} from "@/src/app/(users)/interfaces";

import styles from './UserList.module.css';
import {useState} from "react";

export interface UserListProps {
    users: User[]
}

export const UserList = ({users}: UserListProps) => {
    const [usersChecked,setUsersChecked] = useState<User[]>([]);

    const handleUserClick = (user: User) => {
        const index = usersChecked.findIndex(u => u.id === user.id);

    }

    return (<div className={styles.container}>
        {
            users.map((user, i) => (
                <>
                    <div className={styles.userRow} key={user.id} onClick={() => handleUserClick(user)}>
                        <span>{user.username}</span>
                    </div>
                    {
                       i < users.length - 1 && <div className={styles.divider}></div>
                    }
                </>
            ))
        }
    </div>)
}
