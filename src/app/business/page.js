import Header from '@/components/header/header';
import styles from './page.module.css';
import Title from '@/components/title/title';
import Slider from '@/components/swiper/slider';
import { bookImages, boxImages, cinemaImages, officeImages, vkImages, volunteerImages, waterImages } from '@/public/static/images';


export default function Business() {

    return (
        <main className={styles.main}>
            <Title title={'бизнес'} color={'red'} />
            <Header link={'cities'} />
            <section className={styles.swipers}>
                <Slider title={`Мы обучаем ответственному владению питомцами`} images={vkImages} />
                <Slider title={`Способствуем развитию pet${'\u2011'}friendly культуры`} images={cinemaImages} />
                <Slider title={`Помогаем${'\u00A0'}офисам наших${'\u2011'}партнеров становиться pet${'\u2011'}friendly`} images={officeImages} />
                <Slider title={`Мы выпустили первую книгу по${'\u00A0'}pet${'\u2011'}friendly культуре ${'\n'}«Вместе»`} images={bookImages} />
                <Slider title={`Вместе с партнёрами помогаем животным в приютах`} images={volunteerImages} pt={"142px"} />
                <Slider title={`По всей стране мы запускаем Короба доброты:`} images={boxImages} />
                <div>
                    <p className={styles.title}>
                        Запустили проект позащите водных ресурсов от бренда SHEBA<sup>®</sup> в сети Перекресток

                    </p>
                    <Slider title={''} images={waterImages} />

                </div>

            </section>
        </main >
    )
}