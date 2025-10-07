"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './slider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider({ title, images, pt = '142px'}) {
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