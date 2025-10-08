import styles from './page.module.css'
import Image from 'next/image';
import logo from '../../../public/images/pedigree/pedigree.png';
import dog from '../../../public/images/pedigree/dog.png';
import background from '../../../public/images/pedigree/background.png';
import paw from '../../../public/images/pedigree/paw.png';

import Header from '../../../components/header/header';

export default function Pedigree() {
    return (
        <main className={styles.main}>
            <Header link={'brands'} />
            <div className={styles.top}>
                <Image className={styles.logo} src={logo} alt="pedigree" />
                <h1 className={styles.title}>
                    Тем, кто делает<br></br> нас&nbsp;лучше™
                </h1>
            </div>
            <Image className={styles.bg} src={background} alt="bg" />
            <Image className={styles.dog} src={dog} alt='dog' />

            <div className={`${styles.point} ${styles.point_top}`}>
                <div className={styles.duga__top}>
                    <svg className={styles.duga} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.25 125.1">
                        <path id='duga' d="m.13,125.09c-.08-10.84,1.02-46.71,27.21-79.23C62.78,1.88,114.99.24,122.18.14c49.18-.71,91.63,28.26,112.44,65.72,13.06,23.5,15.29,46.19,15.51,59.24" />
                        <text>
                            <textPath href="#duga">
                                Бренд №1 по узнаваемости
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div className={styles.duga__bot}>
                    <svg className={styles.duga} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.25 125.1">
                        <path id='duga' d="m.13,125.09c-.08-10.84,1.02-46.71,27.21-79.23C62.78,1.88,114.99.24,122.18.14c49.18-.71,91.63,28.26,112.44,65.72,13.06,23.5,15.29,46.19,15.51,59.24" />
                        <text>
                            <textPath href="#duga">
                                среди покупателей
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

            <div className={`${styles.point} ${styles.point_left}`}>
                <div className={`${styles.duga__top} ${styles.duga__top_left}`}>
                    <svg className={styles.duga} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.25 125.1">
                        <path id='duga' d="m.13,125.09c-.08-10.84,1.02-46.71,27.21-79.23C62.78,1.88,114.99.24,122.18.14c49.18-.71,91.63,28.26,112.44,65.72,13.06,23.5,15.29,46.19,15.51,59.24" />
                        <text>
                            <textPath href="#duga">
                                Бренд №1 с наибольшим
                            </textPath>
                        </text>
                    </svg>
                </div>
                
                <div className={`${styles.duga__bot} ${styles.duga__bot_left}`}>
                    <svg className={styles.duga} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.25 125.1">
                        <path id='duga' d="m.13,125.09c-.08-10.84,1.02-46.71,27.21-79.23C62.78,1.88,114.99.24,122.18.14c49.18-.71,91.63,28.26,112.44,65.72,13.06,23.5,15.29,46.19,15.51,59.24" />
                        <text>
                            <textPath href="#duga">
                                количеством покупателей
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

            <div className={`${styles.point} ${styles.point_right}`}>
                <div className={`${styles.duga__top} ${styles.duga__top_right}`}>
                    <svg className={styles.duga} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.25 125.1">
                        <path id='duga' d="m.13,125.09c-.08-10.84,1.02-46.71,27.21-79.23C62.78,1.88,114.99.24,122.18.14c49.18-.71,91.63,28.26,112.44,65.72,13.06,23.5,15.29,46.19,15.51,59.24" />
                        <text>
                            <textPath href="#duga">
                                №1 в мейнстрим сегменте
                            </textPath>
                        </text>
                    </svg>
                </div>
                
                <div className={`${styles.duga__bot} ${styles.duga__bot_right}`}>
                    <svg className={styles.duga} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.25 125.1">
                        <path id='duga' d="m.13,125.09c-.08-10.84,1.02-46.71,27.21-79.23C62.78,1.88,114.99.24,122.18.14c49.18-.71,91.63,28.26,112.44,65.72,13.06,23.5,15.29,46.19,15.51,59.24" />
                        <text>
                            <textPath href="#duga">
                                кормов для щенков
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

            <h2 className={styles.subtitle}>
                Миссия&nbsp;PEDIGREE®&nbsp;<br></br><span>-&nbsp;любящий&nbsp;дом&nbsp;для&nbsp;каждой&nbsp;собаки</span>
            </h2>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    <Image className={styles.paw} src={paw} alt='paw' />
                    <div>
                        <p>
                            450 питомцев
                        </p>
                        <span>
                            уже нашли свой дом
                        </span>
                    </div>
                </li>
                <li className={styles.list__item}>
                    <Image className={styles.paw} src={paw} alt='paw' />
                    <div>
                        <p>
                            13 000 кг
                        </p>
                        <span>
                            корма было отправлено приютам
                        </span>
                    </div>
                </li>
                <li className={styles.list__item}>
                    <Image className={styles.paw} src={paw} alt='paw' />
                    <div>
                        <p>
                            26 приютов и фондов
                        </p>
                        <span>
                            стали нашими партнерами
                        </span>
                    </div>
                </li>
            </ul>
        </main>
    )
}