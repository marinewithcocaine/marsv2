import Header from '@/components/header/header'
import styles from './page.module.css'
import Image from 'next/image'
import { brands, subbrands } from '@/public/static/brands'
import Link from 'next/link'
import Line from '@/components/line/line'

export default function Brands() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.container}>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505.43 418.06">

                    <path d="m252.94,418.06h-96.62C90.36,418.06,0,368.78,0,245.6c0,0,8.32-76.69,50.19-166.44C92.05-10.58,221.44-19.6,410.47,29.89c175.67,45.99,98.69,388.17-157.53,388.17Z" />
                </svg>
                <h1 className={styles.title}>Наши бренды</h1>

            </div>
            <ul className={styles.list}>
                {
                    brands.map((brand, i) => {
                        return (
                            <li className={styles.link} key={i}>
                                <Link href={`/brands/${brand.link}`} >
                                    <Image className={styles.image} src={brand.image} alt={brand.link} />
                                </Link>

                            </li>
                        )
                    })
                }
            </ul>
            <ul className={`${styles.list} ${styles.list_triple}`}>
                {
                    subbrands.map((brand, i) => {
                        return (
                            <li className={styles.subbrand} key={i}>
                                <Image className={`${styles.image} ${styles.image_small} `} src={brand.image} alt={brand.link} />

                            </li>
                        )
                    })
                }
            </ul>
            <div className={styles.path} >
                <Line />
            </div>

        </main>
    )
}