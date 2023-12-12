import styles from './Header.module.css'
import {SignOutButton} from "@/src/core/components/SignOutButton/SignOutButton";
import {Text} from "@/src/shared/components/Text/Text";
import {getServerSession} from "next-auth";
import {LinkButton} from "@/src/shared/components/LinkButton/LinkButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket, faUser} from "@fortawesome/free-solid-svg-icons";

export async function Header() {
    const session = await getServerSession();
    return <div className={styles.container}>
        <Text size={'md'}>File sharer</Text>
        {
            session?.user ? <SignOutButton/> : <div className={styles.authButtonsContainer}>
                <LinkButton variant={'secondary'} href={'/sign-in'}><FontAwesomeIcon icon={faRightToBracket} />Ingresar</LinkButton>
                <LinkButton variant={'primary'} href={'/sign-up'}>
                    <FontAwesomeIcon icon={faUser} />
                    Registrarse
                </LinkButton>
            </div>
        }
    </div>
}
