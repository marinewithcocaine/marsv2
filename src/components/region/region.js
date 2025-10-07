import styles from './region.module.css';

export default function Region({ activeMap, handleClick, color, id, children } ) {

    const activateMap = () => {
        handleClick(id);
    };

    return (
        <g onClick={activateMap} className={id === activeMap ? `${styles.region} ${styles.region_active}` : styles.region} style={{fill: color}}>
            {children}
        </g>

    )
}