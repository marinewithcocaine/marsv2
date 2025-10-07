import Header from '@/components/header/header';
import styles from './page.module.css';
import Title from '@/components/title/title';
import Slider from '@/components/swiper/slider';
import { bookImages, boxImages, officeImages, vkImages, volunteerImages, waterImages } from '@/public/static/images';


export default function Business() {

    return (
        <main className={styles.main}>
            <Title title={'бизнес'} color={'red'} />
            <Header link={'cities'} />
            <section className={styles.swipers}>
                <Slider title={`Мы участвуем в${'\u00A0'}мероприятиях, продвигающих pet${'\u2011'}friendly культуру`} images={vkImages}/>
                <Slider title={`Помогаем${'\u00A0'}офисам наших${'\u2011'}партнеров становиться pet${'\u2011'}friendly`} images={officeImages}/>
                <Slider title={`Мы выпустили первую книгу по${'\u00A0'}pet${'\u2011'}friendly культуре ${'\n'}«Вместе»`} images={bookImages}/>
                <Slider title={`Вместе с нашими партнёрами помогаем животным в приютах`} images={volunteerImages} pt={"142px"}/>
                <Slider title={`Запустили проект по${'\u00A0'}защите водных ресурсов от бренда Sheba в сети Перекресток`} images={waterImages}/>
                <Slider title={`По всей стране мы запускаем Короба доброты:`} images={boxImages}/>
            </section>
        </main >
    )
}