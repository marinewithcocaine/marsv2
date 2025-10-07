import Link from "next/link";
import styles from "./link.module.css";

function LinkPaw ({title}) {
    return (
        <Link href={'/cities'} className={styles.link}>
            <h2>
                {title}
            </h2>
        </Link>
    )
}

export default LinkPaw;