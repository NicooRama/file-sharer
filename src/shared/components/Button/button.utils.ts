import styles from "@/src/shared/components/Button/Button.module.css";

export const getClassName = ({variant, className, active, subVariant}: any) => {
    const classes = [
        styles.button,
        styles[variant],
        active ? styles.active : '',
        styles[subVariant],
        className,
    ]
    return classes.join(' ')
}
