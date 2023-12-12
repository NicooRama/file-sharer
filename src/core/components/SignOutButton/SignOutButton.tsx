'use client';
import {signOut} from "next-auth/react";
import {Button} from "@/src/shared/components/Button/Button";
import {faRightFromBracket, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface SignOutButtonProps {
    className?: string;
}

export const SignOutButton = ({className = ''}: SignOutButtonProps) => {
    return <Button className={className} variant={'secondary'} onClick={() => signOut()}>
        <FontAwesomeIcon icon={faRightFromBracket} />
        Salir
    </Button>
}
