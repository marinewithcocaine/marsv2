import Image from "next/image";
import styles from './subbrand.module.css';

export default function Subbrand ({handleClick, brand}) {

    function setOnClick (brand) {
        handleClick(brand);
    }

    return (
        <li className={styles.subbrand} onClick={() => setOnClick(brand)} >
            <Image className={`${styles.image} ${styles.image_small} `} src={brand.image} alt={brand.title}  width={300} height={200}/>
        </li>
    )
}