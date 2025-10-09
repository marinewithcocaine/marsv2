'use client'

import styles from './page.module.css'
import Image from 'next/image';
import logo from '../../../public/images/perfect/logo.svg';
import qr from '../../../public/images/perfect/qr.svg';
import dog from '../../../public/images/perfect/dog.png';
import cat from '../../../public/images/perfect/cat.png';
import Header from '../../../components/header/header'
import Counter from '@/components/counter/counter';

export default function Perfect() {

    return (
        <main className={styles.main}>
            <Header link={'brands'} />
            <Image className={styles.logo} src={logo} alt="perfect fit logo" />
            <section className={styles.content}>
                <h1 className={styles.title}>
                    миссия
                </h1>
                <h2 className={styles.subtitle}>
                    – РАЗВИВАТЬ КУЛЬТУРУ  ПРОФИЛАКТИКИ
                    <br></br>ЗДОРОВЬЯ
                </h2>
                <ul className={styles.list}>
                    <li className={styles.list__item}>
                        <div><Counter val={500} time={1}/></div>
                        <span>клиник</span>
                    </li>
                    <li className={styles.list__item}>
                        <div><Counter val={15000} time={0.1}/><b>+</b></div>
                        <span>контактов</span>
                    </li>s
                </ul>
                <div className={styles.programm}>
                    <h3 className={styles.programm__title}>
                        реализуем миссию через
                    </h3>
                    <div className={styles.programm__item}>
                        ПРОГРАММЫ ПРОФИЛАКТИЧЕСКИХ ОСМОТРОВ ОТ&nbsp;ВЕТЕРИНАРНЫХ&nbsp;ВРАЧЕЙ
                    </div>
                    <div className={styles.programm__item}>
                        ВЕТЕРИНАРНЫЕ <br></br>МЕРОПРИЯТИЯ <b>&</b><br></br>ВЫСТАВКИ
                    </div>
                </div>
                <div className={styles.qr}>
                    <Image className={styles.qr__image} src={qr} alt='qr' />
                    <p className={styles.qr__text}>
                        ЗАПИШИТЕСЬ НА&nbsp;ОСМОТР ДЛЯ УВЕРЕННОСТИ В ЗДОРОВЬЕ ПИТОМЦА

                    </p>
                    <Image className={styles.dog} src={dog} alt='dog' />
                    <Image className={styles.cat} src={cat} alt='cat' />

                </div>
            </section>
        </main>
    )
}