import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faCircleCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Text} from "@/src/shared/components/Text/Text";
import {LinkButton} from "@/src/shared/components/LinkButton/LinkButton";
import styles from "@/src/shared/components/SuccessPage/SuccessPage.module.css";

export default async function NotFound() {
    return (
        <div className={'container not-found'}>
            <FontAwesomeIcon icon={faXmark} size={'8x'}/>
            <Text size={'lg'} align={"center"}>Lamentablemente no encontramos la pagina que estas buscando</Text>
            <LinkButton href={'/files/list'} className={styles.backButton}>Volver al inicio</LinkButton>
        </div>
    )
}
