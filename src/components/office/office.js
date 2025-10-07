import styles from './office.module.css';
import Image from 'next/image';

export default function Office({office}) {
    return (
        <div className={styles.block}>
            <h2 className={styles.block_title}>
                {office.title}
            </h2>
            <ul className={styles.block_list}>
                {
                    office.images.map((image, i) => {
                        return (
                            <li key={i} className={styles.block_item}>
                                <Image src={image.image} alt={office.title} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}