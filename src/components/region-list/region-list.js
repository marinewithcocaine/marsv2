import styles from './region-list.module.css';

export default function RegionList ({regions, handleClick, active}) {
    return (
        <ul className={styles.list}>
            {
                regions.map((region, i) => {

                    const {id, title, color} = region;
                    return (
                        <li  key={i} onClick={handleClick} className={id === active? `${styles.list_item} ${styles.list_item_active}`: styles.list_item} id={id}>
                            <div className={id === active? `${styles.circle} ${styles.circle_active}`: styles.circle} style={{backgroundColor: color}}></div>
                            {i+1}. {title}
                        </li>
                    )
                })
            }
        </ul>
    )
}