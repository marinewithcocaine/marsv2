import styles from './title.module.css';

export default function Title({ title, color }) {
    return (
        <div className={styles.container}>
            <svg className={styles[color]} id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 582.26 313.13">
                <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                        <path d="m288.65,266.54h-89.59c-61.16,0-144.95-45.69-144.95-159.91,0,0,7.72-71.11,46.54-154.33,38.82-83.22,158.79-91.57,334.07-45.69,162.9,42.64,91.51,359.93-146.07,359.93Z" />
                    </g>
                </g>
            </svg>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}