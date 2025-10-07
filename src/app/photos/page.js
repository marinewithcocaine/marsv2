import Image from 'next/image'
import styles from './page.module.css'
import Gallery from '@/components/gallery/gallery';
import { employees } from '@/public/static/employees';
import Line from '@/components/line/line';

export default function Photos() {


    return (
        <main className={styles.main}>
            <Gallery images={employees} />
            <div className={styles.line}>
                <Line />
            </div>
        </main>
    )
}