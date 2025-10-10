"use client"

import Header from '@/components/header/header';
import styles from './page.module.css';
import Title from '@/components/title/title';
import Slider from '@/components/swiper/slider';
import RegionList from '@/components/region-list/region-list';
import { vigulImages } from '@/public/static/images';
import { regions } from '@/public/static/regions';
import { useState, useMemo } from 'react';
import Region from '@/components/region/region';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Map() {

    const [activeMap, setActiveMap] = useState();

    const address = useMemo(() => {
        if (!activeMap) {
            return null;
        }
        return regions.filter((region) => region.id == activeMap);
    }, [activeMap])

    const handleMapClick = (data) => {
        setActiveMap(data);
    };

    function handleListClick(e) {
        e.preventDefault();
        setActiveMap(`${e.target.id}`);
    }

    function path(path) {
        return (
            path
        )
    }

    return (
        <main className={styles.main}>
            <Title title={'выгул'} color={'green'} />
            <Header link={'cities'} />
            <section className={styles.content}>
                <h2>
                    Мы&nbsp;разработали&nbsp;концепт&nbsp;более&nbsp;100&nbsp;площадок
                    для выгула собак, построенных в рамках
                    проекта мэра Москвы «Мой район»,
                    проект&nbsp;«Питомцы в Москве»

                </h2>
                <div className={styles.swiper_container}>
                    <Swiper
                        className={styles.swiper}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        slidesPerView={1}
                    >
                        {
                            vigulImages.map((image, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div className={styles.image_container}>
                                            <Image className={styles.image} src={image.src} alt={image.alt} />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <RegionList regions={regions} handleClick={handleListClick} active={activeMap} />
                    {
                        activeMap != null &&
                        <div className={styles.address__list}>
                            <p className={styles.address__title}>{address[0].title}</p>
                            <ul className={styles.list}>
                                {
                                    address[0].done.map((item, i) => {
                                        return (
                                            <li key={i}>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </div>

                    }

                </div>
            </section>
            <svg className={styles.map} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 622.4 828.85">
                {
                    regions.map((region, i) => {
                        return (
                            <Region activeMap={activeMap} handleClick={handleMapClick} color={region.color} id={region.id} key={i}>
                                {path(region.path)}
                            </Region>
                        )
                    })
                }
            </svg>
        </main>
    )
}