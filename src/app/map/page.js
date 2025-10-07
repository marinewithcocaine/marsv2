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

export default function Map() {

    const [activeMap, setActiveMap] = useState();

    const images = useMemo(() => {
        if (!activeMap) {
            return vigulImages;
        }
        return vigulImages.filter((image) => image.region == activeMap);
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
            <Header link={'cities'}  />
            <section className={styles.content}>
                <h2>
                    Мы&nbsp;разработали&nbsp;концепт&nbsp;более&nbsp;100&nbsp;площадок
                    для выгула собак, построенных в рамках
                    проекта мэра Москвы «Мой район»,
                    проект&nbsp;«Питомцы в Москве»

                </h2>
                <div className={styles.swiper_container}>
                    <Slider className={styles.slider} images={images} pt="160px" paw={false} />
                    <RegionList regions={regions} handleClick={handleListClick} active={activeMap} />
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