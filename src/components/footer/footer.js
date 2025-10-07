import Link from 'next/link';
import styles from '../header/header.module.css';
import styles1 from './footer.module.css';

function Footer() {
    return (
        <footer className={styles1.footer}>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <Link href='/' className={styles.nav_link}>
                        <svg className={styles.svg} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.82 21.73">
                                <path d="m26.46,0c-.75,0-1.36.61-1.36,1.36v19.01c0,.75.61,1.36,1.36,1.36s1.36-.61,1.36-1.36V1.36c0-.75-.61-1.36-1.36-1.36Zm-4.84,10.35c-.06-.17-.16-.32-.29-.45l-5.43-5.43c-.53-.53-1.4-.53-1.93,0s-.53,1.4,0,1.93l3.12,3.11H1.36c-.75,0-1.36.61-1.36,1.36s.61,1.36,1.36,1.36h15.74l-3.12,3.11c-.53.53-.54,1.39,0,1.92,0,0,0,0,0,0,.53.53,1.39.54,1.92,0,0,0,0,0,0,0l5.43-5.43c.12-.13.22-.28.29-.45.14-.33.14-.7,0-1.03Z" />
                            </svg>
                            На&nbsp;главную
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/cities' className={styles.nav_link}>
                        <svg className={`${styles.svg} ${styles.svg1}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.72 14.94">
                                <path d="m.1,4.92c.06-.17.16-.32.29-.45L4.46.4c.53-.53,1.4-.53,1.93,0s.53,1.4,0,1.93l-1.77,1.75h13.02c2.25,0,4.07,1.82,4.07,4.07v5.43c0,.75-.61,1.36-1.36,1.36s-1.36-.61-1.36-1.36v-5.43c0-.75-.61-1.36-1.36-1.36H4.62l1.77,1.75c.53.53.54,1.39,0,1.92,0,0,0,0,0,0-.53.53-1.39.54-1.92,0,0,0,0,0,0,0L.39,6.4c-.12-.13-.22-.28-.29-.45-.14-.33-.14-.7,0-1.03Z" />
                            </svg>
                            Предыдущая&nbsp;страница
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;