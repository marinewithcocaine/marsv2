"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './slider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider({ title, images, pt = '142px', paw = true }) {
    return (
        <div className={styles.slider_container}>
            <h2 className={styles.slider_title}>
                {title}
            </h2>

            <Swiper
                className={styles.swiper}
                modules={[Navigation]}
                navigation={true}
                loop={true}
                slidesPerView={1}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "25px",
                    "--swiper-navigation-top-offset": `${pt}`
                }}
            >
                <div className={paw === true ? `${styles.paw}` : styles.hidden}>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.53 22.76">
                        <path d="m16.95,2.61c3.66-.09,6.15,3,5.2,6.11-.49,1.59-.49,3.04.14,4.55.19.47.27,1.03.25,1.55-.07,2.05-1.04,3.55-2.92,4.41-1.83.83-3.52.47-5.06-.74-.37-.3-.72-.66-.98-1.06-.73-1.11-1.72-1.87-2.91-2.4-1.58-.72-2.42-1.95-2.45-3.67-.03-1.7.77-2.96,2.28-3.72,1.16-.58,2.03-1.42,2.7-2.53.94-1.55,2.34-2.41,3.75-2.48Z" />
                        <path d="m2.78,5.28c1.78.05,3.02.47,3.86,1.67.71,1.02.52,2.2-.4,3.02-1.52,1.35-4.67.93-5.79-.76-.77-1.17-.53-2.54.67-3.26.6-.36,1.32-.53,1.67-.67Z" />
                        <path d="m9.42,16.99c1.03.08,2,.34,2.56,1.38.55,1.02.2,1.93-.41,2.77-.92,1.27-2.93,1.93-4.43,1.48-1.74-.52-2.34-2.35-1.22-3.79.87-1.12,2.05-1.69,3.5-1.83Z" />
                        <path d="m9,5.62c-1.21,0-2.29-.37-3.16-1.24-.73-.72-1.15-1.57-.86-2.62C5.28.67,6.13.17,7.17.04c1.59-.2,2.95.3,3.99,1.55.62.75.86,1.6.48,2.52-.39.94-1.21,1.34-2.18,1.49-.15.02-.31.01-.46.01Z" />
                        <path d="m3.95,12.2c1.02,0,1.95.23,2.67,1.03.77.85.83,1.86.16,2.83-1.18,1.7-3.92,2.19-5.6,1.01-1.26-.89-1.3-2.7-.06-3.76.81-.69,1.74-1.1,2.83-1.1Z" />
                    </svg>
                </div>
                {
                    images.map((image, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className={styles.image_container}>
                                    <Image src={image.src} alt={image.alt} />
                                </div>
                                <ul className={styles.slide_list}>
                                {
                                    image.titles.map((title, key) => {
                                        return (
                                            <li key={key}>{title}</li>
                                        )
                                    })
                                }
                                </ul>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Slider;