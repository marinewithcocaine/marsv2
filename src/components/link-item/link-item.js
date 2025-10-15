import styles from './link-item.module.css';
import Image from 'next/image';

import Link from "next/link"

export default function LinkItem({link, title, image, child, color }) {

    return (
        <Link href={link} className={`${styles.link}`} style={{background: color}}>
            <p className={styles.link_text}>
                {title}
            </p>
            <Image src={image} width={436} height={259} alt="cat" />
            <div className={`${styles.path} ${styles.path_cat}`} >
                {child}
            </div>
            <div className={`${styles.link_circle}`}>
                <svg className={`${styles.svg}`} style={{fill: color}} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="m21.03,0L2.2.69C1.09.73.08,1.55,0,2.66c-.04.66.2,1.27.67,1.71.42.39.96.59,1.53.57l14.35-.52s.06.04.03.07L1.42,19.65c-.77.77-.9,1.98-.31,2.81.37.51.94.84,1.56.89.62.05,1.23-.17,1.67-.61l15.24-15.24s.07,0,.07.03l-.53,14.35c-.02.57.18,1.11.57,1.53.39.42.91.66,1.48.68.61.02,1.18-.22,1.58-.62.37-.37.6-.87.62-1.42l.69-18.93c.02-.52-.06-1.05-.32-1.51C23.18.53,22.15-.04,21.03,0" />
                </svg>
            </div>

        </Link>
    )
}