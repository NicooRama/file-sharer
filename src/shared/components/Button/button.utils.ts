import styles from "@/src/shared/components/Button/Button.module.css";

export const getButtonClassName = ({variant, className, active, subVariant}: any = {
    variant: 'primary',
    className: '',
    active: false,
    subVariant: '',
}) => {
    const classes = [
        styles.button,
        styles[variant],
        active ? styles.active : '',
        styles[subVariant],
        className,
    ]
    return classes.join(' ')
}
