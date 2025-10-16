'use client'

import Header from '@/components/header/header'
import styles from './page.module.css'
import fish from '../../../public/images/sheba/fish.webp'
import qr from '../../../public/images/sheba/qr.svg'
import logo from '../../../public/images/sheba/logo.png'
import Frame from '@/components/frame/frame';

import Image from 'next/image'
import { useState } from 'react'

export default function Sheba() {

    const [popupOpened, setPopupOpened] = useState(false);

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
                    <Image className={styles.cat} src={'https://5025e9a0-572b-4a1f-ac39-9ca98b5282d1.selstorage.ru/cat-sheba.webp'} alt='cat' width={500} height={500}/>
                </div>
                <div className={styles.description}>
                    Мы признаём важность борьбы<br></br> с загрязнением водной экосистемы и принимаем меры по смягчению его последствий
                </div>
                <ul className={styles.list}>
                    <li className={styles.list__item}>
                        <Image className={styles.logo} src={logo} alt='sheba logo' />
                        <Image className={styles.image} src={qr} alt='sheba' />
                        <p className={styles.list__text}>
                            Создаём образовательный контент
                        </p>
                    </li>
                    <li className={styles.list__item}>
                        <Image className={styles.image} src={'https://5025e9a0-572b-4a1f-ac39-9ca98b5282d1.selstorage.ru/stand-sheba.webp'} alt='sheba' width={200} height={400}/>
                        <p className={styles.list__text}>
                            Устанавливаем умные урны в экоцентрах и ретейле

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
                <div className={styles.link} onClick={() => setPopupOpened(true)}>
                    Подробнее на океанпомощи.рф
                </div>
            </section>
            <Frame isOpen={popupOpened} onClick={() => {setPopupOpened(false)}} page={'https://sheba.ru/helpsocean/'} />
        </main>
    )
}