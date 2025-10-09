import styles from './popup.module.css'
import Image from 'next/image'

export default function Popup({ isOpened, onClose, project }) {

    console.log(project.image);

    return (
        <div className={isOpened ? `${styles.popup_opened} ${styles.popup}` : `${styles.popup}`}>
            <div className={styles.popup__container}>
                <div onClick={onClose} className={styles.popup__close}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill-rule="evenodd">
                        <g class="t-group-origins">
                            <path d="M50.22 14C30.212 14 14 30.215 14 50.223c0 19.999 16.212 36.214 36.22 36.214s36.214-16.215 36.214-36.214C86.434 30.215 70.228 14 50.22 14Zm15.592 48.083-4.565 4.565-11.02-11.021L38.86 66.995l-4.565-4.565 11.367-11.367L34.639 40.04l4.568-4.565 11.02 11.02 11.349-11.343 4.565 4.565-11.349 11.346 11.02 11.02Z" stroke-width="0" stroke="#e42023" fill="#e42023" stroke-width-old="0"></path>
                        </g>
                    </svg>
                </div>
                <h2 className={styles.title}>
                    {project.title}
                </h2>
                {
                    project.images !=null &&
                    <div className={styles.images}>
                        {
                            project.images.map((image, i) => {
                                return(
                                    <Image className={styles.preview} src={image} alt='dog' key={i}/>
                                )
                            })
                        }
                    </div>
                }
                {
                    project.images == null &&
                    <Image className={styles.logo} src={project.image} alt="" />    
                }
                {
                    project.text.map((elem, i) => {
                        return (
                            <p key={i}>
                                {elem}
                            </p>
                        )
                    })
                }
                {
                    project.qr != null &&
                    <div className={styles.qr}>
                    <Image className={styles.qr__image} src={project.qr} />
                    <p className={styles.qr__text}>{project.qrtext}</p>
                    </div>
                }
            </div>
        </div>
    )
}