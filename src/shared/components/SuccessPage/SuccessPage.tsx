import {Text} from "@/src/shared/components/Text/Text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {LinkButton} from "@/src/shared/components/LinkButton/LinkButton";
import styles from './SuccessPage.module.css';
import {Card} from "@/src/shared/components/Card/Card";

interface SuccessPage {
    title: string;
    url: string;
    buttonText: string;
}

export const SuccessPage = ({title, url, buttonText}: SuccessPage) => {
    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <FontAwesomeIcon icon={faCircleCheck} size={'8x'}/>
                <Text size={'xlg'} align={"center"}>{title}</Text>
                <LinkButton href={url} className={styles.backButton}>{buttonText}</LinkButton>
            </Card>
        </div>
    );
}
