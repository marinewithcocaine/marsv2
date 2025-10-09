import Link from "next/link";
import styles from './header.module.css';

export default function Header({ link = '', bg = true }) {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {
                    bg == true &&
                    <svg className={styles.bg} id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560.29 392.44">
                        <path d="m259.4,2.7L372.69.05c77.34-1.81,184.52,40.99,187.6,154.16,0,0-22.93,66.52-54.7,154.29-61.28,169.33-152.65,27.04-371.11,44.86C-77.53,370.65-41.03,9.72,259.4,2.7" />
                    </svg>
                }
                <Link className={styles.link} href={`/${link}`}>
                    <div className={`${styles.link__container}`}>
                        <svg className={styles.link__arrow} id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.35 30.67">
                            <path d="m.92,13.2L14.43.64c.91-.85,2.42-.88,3.2.09.31.39.47.88.46,1.38-.02.56-.26,1.08-.67,1.45L7.13,13.12s-.01.1.04.1h21c1.07,0,2,.75,2.16,1.74.1.61-.07,1.23-.47,1.7-.4.47-.98.73-1.59.73H7.16c-.05,0-.08.07-.04.1l10.29,9.56c.41.38.65.9.67,1.45.02.56-.18,1.09-.56,1.5-.41.44-.97.66-1.53.66-.51,0-1.02-.18-1.42-.56L.96,17.46c-.38-.35-.69-.78-.83-1.27-.32-1.13,0-2.24.8-2.99" />
                        </svg>
                    </div>
                    <p className={styles.link__title}>Вернуться назад</p>
                </Link>
            </nav>
        </header>
    )
}