import Header from '@/components/header/header'
import styles from './page.module.css'
import fish from '../../../public/images/sheba/fish.webp'
import cat from '../../../public/images/sheba/cat.png'
import stand from '../../../public/images/sheba/stand.png'
import qr from '../../../public/images/sheba/qr.svg'
import Frame from '@/components/frame/frame'

import Image from 'next/image'

export default function Sheba() {
    return (
        <main className={styles.main}>
            <Header link={'brands'} bg={false} />
            <section className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.title__container}>
                        <Image className={styles.fish} src={fish} alt='fish' />
                        <h2 className={styles.letter}>О</h2>
                        <h1 className={styles.title}>
                            позаботьтесь
                            <b>водных</b>
                            <b>ресурсах</b>
                        </h1>
                    </div>
                    <Image className={styles.cat} src={cat} alt='cat' />
                </div>
                <div className={styles.description}>
                    Мы признаем важность борьбы<br></br> с загрязнением водной экосистемы и принимаем меры по смягчению его последствий
                </div>
                <ul className={styles.list}>
                    <li className={styles.list__item}>
                        <Image className={styles.image} src={qr} alt='sheba' />
                        <p className={styles.list__text}>
                            Создаем образовательный контент
                        </p>
                    </li>
                    <li className={styles.list__item}>
                        <Image className={styles.image} src={stand} alt='sheba' />
                        <p className={styles.list__text}>
                            Устанавливаем умные урны в экоцентрах и ритейле

                        </p>
                    </li>
                    <li className={styles.list__item}>
                        <p className={`${styles.list__text} ${styles.list__text_bold}`}>
                            <b>&gt;3 тонн </b>
                            уже собраны
                        </p>
                        <p className={styles.list__text}>
                            Собираем паучи и дойпаки для вторичной переработки

                        </p>
                    </li>
                </ul>
                <div className={styles.link}>
                    Подробнее на океанпомощи.рф
                </div>
            </section>
        </main>
    )
}