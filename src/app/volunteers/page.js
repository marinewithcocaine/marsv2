import Header from '@/components/header/header'
import styles from './page.module.css'
import dog from '@/public/images/volunteers/dog.webp'
import logo from '@/public/images/volunteers/mvp.png'
import svg from '@/public/images/volunteers/svg.svg'
import Image from 'next/image'

export default function Volunteers() {
    return (
        <main className={styles.main}>
            <Header link={''} />
            <div className={styles.container}>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505.43 418.06">
                    <path d="m252.94,342.19h-96.62C90.36,342.19,0,301.86,0,201.03c0,0,8.32-62.77,50.19-136.23C92.05-8.66,221.44-16.04,410.47,24.46c175.67,37.64,98.69,317.72-157.53,317.72" />
                </svg>
                <h1 className={styles.title}>Волонтерство</h1>
            </div>
            <div className={styles.content}>
                <Image className={styles.image} src={dog} alt="mars" />
                <svg className={styles.line} id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1163.24 203.16">
                    <path d="m1158.16,51.72c-27.76-44.21-149.44-62.26-208,32.5-45.72,73.96,30.81,151.66,72.55,91.4,49.11-70.9-4.97-217.8-165.05-153.9-147.1,58.72-360.58,172.45-579.67,168.39C102.67,186.86,21.72,137.16,3.61,123.54" />
                </svg>
                <h2 className={styles.subtitle}>
                    Каждый 3-й сотрудник Mars Pet Nutrition
                    — зооволонтер.
                </h2>
                <h2 className={styles.subtitle}>
                    Хочешь делать добрые дела вместе
                    с&nbsp;коллегами?
                </h2>
                <p className={styles.description}>
                    Сканируй QR-код и присоединяйся к программе.
                    Вместе мы сделаем мир для животных лучше!
                </p>
                <div className={`${styles.images_wrapper}`}>
                    <Image className={styles.logo} src={logo} alt='MPV' />
                    <Image className={styles.svg} src={svg} alt='svg' />

                </div>
            </div>
        </main>
    )
}