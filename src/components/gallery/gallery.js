"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import styles from './gallery.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Gallery({ images }) {
    return (
        <div className={styles.slider_container}>

            <Swiper
                className={styles.swiper}
                modules={[Navigation, Autoplay]}
                loop={true}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                speed={1000}

            >
                {
                    images.map((image, i) => {
                        return (
                            <SwiperSlide className={styles.swiper_slide} key={i}>
                                <div className={styles.image_container}>
                                    <Image src={image.image} alt={image.name} width={1080} height={1920} />
                                </div>
                                <div className={styles.slide_info}>
                                    <p className={styles.slide_text}>
                                        {image.text}
                                    </p>
                                    <div className={styles.personal}>
                                        <h1 className={styles.slide_title}>
                                            {image.name}
                                        </h1>
                                        <h2 className={styles.slide_title}>{image.job}</h2>

                                    </div>
                                </div>


                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Gallery;