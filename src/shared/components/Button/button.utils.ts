import styles from "@/src/shared/components/Button/Button.module.css";

export const getClassName = ({variant, className, active}: any) => {
    return `${styles.button} ${styles[variant]} ${className} ${active ? styles.active : ''}`
}
