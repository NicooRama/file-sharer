import styles from './FormControl.module.css';

export const FormControl = ({children}: any) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
