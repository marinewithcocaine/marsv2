import styles from './project-block.module.css';
import Image from 'next/image';

export default function ProjectBlock({project}) {
    return (
        <div className={styles.block}>
            <h2 className={styles.block_title}>
                {project.title}
            </h2>
            <ul className={styles.block_list}>
                {
                    project.logos.map((logo, i) => {
                        return (
                            <li key={i} className={styles.block_item}>
                                <Image src={logo.image} alt={project.title} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}