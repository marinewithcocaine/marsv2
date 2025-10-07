import Link from "next/link";
import styles from './link-list.module.css';
import Image from "next/image";
import dog1 from '../../public/images/main/dog1.webp';
import cat1 from '../../public/images/main/cat1.webp';
import cat2 from '../../public/images/main/cat2.webp';
import cat3 from '../../public/images/main/cat3.webp';
import dog2 from '../../public/images/main/dog2.webp';


export default function LinkList({onclick}) {
    return (
        <div className={styles.linklist}>
            <Link href={'/cities'} className={`${styles.link} ${styles.link_yellow}`}>
                <p className={styles.link_text}>
                    Better Cities&nbsp;for&nbsp;Pets
                </p>
                <Image src={dog1} width={462} height={275} alt="dog" />
                <div className={styles.path} >
                    <svg className={styles.test} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1209.6 277.47">
                        <path d="m3.5,269.28s107.43,11.56,170.52-43.42c23.68-20.64,43.42-56.92,25.67-76.79-8.91-9.97-28.4-9.25-36.29,20.16-11.6,59.44,17.92,81.19,46.66,85.62,97.26,14.98,168.66-72.17,261.11-83.68,152.81-19.02,234.52,47.85,385.1,15.48C1065.33,141.72,1228.82,3.5,1228.82,3.5" />
                    </svg>
                </div>
                <div className={`${styles.link_circle}`}>
                    <svg className={`${styles.svg} ${styles.svg_yellow}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="m21.03,0L2.2.69C1.09.73.08,1.55,0,2.66c-.04.66.2,1.27.67,1.71.42.39.96.59,1.53.57l14.35-.52s.06.04.03.07L1.42,19.65c-.77.77-.9,1.98-.31,2.81.37.51.94.84,1.56.89.62.05,1.23-.17,1.67-.61l15.24-15.24s.07,0,.07.03l-.53,14.35c-.02.57.18,1.11.57,1.53.39.42.91.66,1.48.68.61.02,1.18-.22,1.58-.62.37-.37.6-.87.62-1.42l.69-18.93c.02-.52-.06-1.05-.32-1.51C23.18.53,22.15-.04,21.03,0" />
                    </svg>
                </div>

            </Link>
            <Link href={'/projects'} className={`${styles.link} ${styles.link_red}`}>
                <p className={styles.link_text}>
                    Наши образовательные проекты
                </p>
                <Image src={cat1} width={436} height={259} alt="cat" />
                <div className={`${styles.path} ${styles.path_cat}`} >
                    <svg className={styles.test} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1209.6 277.47">
                        <path d="m3.5,269.28s107.43,11.56,170.52-43.42c23.68-20.64,43.42-56.92,25.67-76.79-8.91-9.97-28.4-9.25-36.29,20.16-11.6,59.44,17.92,81.19,46.66,85.62,97.26,14.98,168.66-72.17,261.11-83.68,152.81-19.02,234.52,47.85,385.1,15.48C1065.33,141.72,1228.82,3.5,1228.82,3.5" />
                    </svg>
                </div>
                <div className={`${styles.link_circle}`}>
                    <svg className={`${styles.svg} ${styles.svg_red}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="m21.03,0L2.2.69C1.09.73.08,1.55,0,2.66c-.04.66.2,1.27.67,1.71.42.39.96.59,1.53.57l14.35-.52s.06.04.03.07L1.42,19.65c-.77.77-.9,1.98-.31,2.81.37.51.94.84,1.56.89.62.05,1.23-.17,1.67-.61l15.24-15.24s.07,0,.07.03l-.53,14.35c-.02.57.18,1.11.57,1.53.39.42.91.66,1.48.68.61.02,1.18-.22,1.58-.62.37-.37.6-.87.62-1.42l.69-18.93c.02-.52-.06-1.05-.32-1.51C23.18.53,22.15-.04,21.03,0" />
                    </svg>
                </div>

            </Link>
            <div onClick={onclick} href={''} className={`${styles.link} ${styles.link_orange}`}>
                <p className={styles.link_text}>
                    Центр изучения питания и&nbsp;благополучия животных
                </p>
                <Image src={cat2} width={418} height={248} alt="cat" />
                <div className={`${styles.link_circle}`}>
                    <svg className={`${styles.svg} ${styles.svg_orange}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="m21.03,0L2.2.69C1.09.73.08,1.55,0,2.66c-.04.66.2,1.27.67,1.71.42.39.96.59,1.53.57l14.35-.52s.06.04.03.07L1.42,19.65c-.77.77-.9,1.98-.31,2.81.37.51.94.84,1.56.89.62.05,1.23-.17,1.67-.61l15.24-15.24s.07,0,.07.03l-.53,14.35c-.02.57.18,1.11.57,1.53.39.42.91.66,1.48.68.61.02,1.18-.22,1.58-.62.37-.37.6-.87.62-1.42l.69-18.93c.02-.52-.06-1.05-.32-1.51C23.18.53,22.15-.04,21.03,0" />
                    </svg>
                </div>
            </div>
            <Link href={'/brands'} className={`${styles.link} ${styles.link_violet}`}>
                <p className={styles.link_text}>
                    Наши<br></br> бренды
                </p>
                <Image src={cat3} width={440} height={261} alt="cat" />
                <div className={`${styles.link_circle}`}>
                    <svg className={`${styles.svg} ${styles.svg_violet}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="m21.03,0L2.2.69C1.09.73.08,1.55,0,2.66c-.04.66.2,1.27.67,1.71.42.39.96.59,1.53.57l14.35-.52s.06.04.03.07L1.42,19.65c-.77.77-.9,1.98-.31,2.81.37.51.94.84,1.56.89.62.05,1.23-.17,1.67-.61l15.24-15.24s.07,0,.07.03l-.53,14.35c-.02.57.18,1.11.57,1.53.39.42.91.66,1.48.68.61.02,1.18-.22,1.58-.62.37-.37.6-.87.62-1.42l.69-18.93c.02-.52-.06-1.05-.32-1.51C23.18.53,22.15-.04,21.03,0" />
                    </svg>
                </div>
            </Link>
            <Link href={'/volunteers'} className={`${styles.link} ${styles.link_pink}`}>
                <p className={styles.link_text}>
                    Стань волонтером и помогай животным вместе с нами
                </p>
                <Image src={dog2} width={440} height={261} alt="cat" />
                <div className={`${styles.link_circle}`}>
                    <svg className={`${styles.svg} ${styles.svg_pink}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="m21.03,0L2.2.69C1.09.73.08,1.55,0,2.66c-.04.66.2,1.27.67,1.71.42.39.96.59,1.53.57l14.35-.52s.06.04.03.07L1.42,19.65c-.77.77-.9,1.98-.31,2.81.37.51.94.84,1.56.89.62.05,1.23-.17,1.67-.61l15.24-15.24s.07,0,.07.03l-.53,14.35c-.02.57.18,1.11.57,1.53.39.42.91.66,1.48.68.61.02,1.18-.22,1.58-.62.37-.37.6-.87.62-1.42l.69-18.93c.02-.52-.06-1.05-.32-1.51C23.18.53,22.15-.04,21.03,0" />
                    </svg>
                </div>
                <div className={`${styles.path} ${styles.path_dog}`} >
                    <svg className={`${styles.test} ${styles.test_dog}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1209.6 277.47">
                        <path d="m3.5,276.79s101.07,2.8,154.82-40.04c15.25-12.15,38.45-54.84,21.37-73.42-9.07-9.86-24.92-5.24-31.6,12.27-17.1,50.53,14.6,83.88,42.3,90.14,88.76,20.05,123.6-59.64,206.38-64.97,53.09-3.42,92.13,10.33,143.47,18.23,58.81,9.05,101.35,6.89,139.33-28.46,8.43-7.84,36.01-34.06,60.17-80.51,30.66-58.96-33.19-81.97-53.23-33.64,0,0-21.47-33.58-47.23-16.4-10.65,7.1-22,28.24-3.26,54.83,35.57,50.46,118.36,92.6,201.95,85.96C1084.83,181.16,1238.81,3.5,1238.81,3.5" />
                    </svg>
                </div>
            </Link>
        </div>
    )
}