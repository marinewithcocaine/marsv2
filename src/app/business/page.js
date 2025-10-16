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
                <Slider title={`Обучаем ответственному владению питомцами:`} images={vkImages} />
                <Slider title={`Помогаем${'\u00A0'}нашим партнерам становиться pet${'\u2011'}friendly:`} images={officeImages} />

                <Slider title={`Способствуем развитию pet${'\u2011'}friendly культуры в России:`} images={cinemaImages} />
                <Slider title={`Выпустили первую книгу о${'\u00A0'}pet${'\u2011'}friendly культуре ${'\n'}«Вместе»:`} images={bookImages} />
                <Slider title={`Вместе с партнёрами помогаем животным в приютах:`} images={volunteerImages} pt={"142px"} />
                <Slider title={`Реализуем по всей стране  проект «Короба доброты»:`} images={boxImages} />
                <div>
                    <p className={styles.title}>
                        Запустили проект с заботой о водных ресурсах от бренда Sheba<sup>®</sup> в сети Перекресток:

                    </p>
                    <Slider title={''} images={waterImages} />

                </div>

            </section>
        </main >
    )
}