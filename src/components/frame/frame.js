import styles from './frame.module.css'

export default function Frame ({isOpen, onClick, child}) {

    return (
        <div className={isOpen? `${styles.popup}` : `${styles.popup_closed}`}>
            <div className={styles.popup__container}>
                {child}
            </div>
            <div className={styles.button} onClick={onClick}>
                X
            </div>
        </div>
    )
}