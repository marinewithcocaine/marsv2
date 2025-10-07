import img from '@/public/images/banner.webp';
import video from '@/public/video/video.mp4';
import Image from "next/image";
import styles from './video.module.css';

export default function VideoPlayer (){
    return (
        <video className={styles.video} >
          <source src="https://vkvideo.ru/video-220754053_456243917" />
          <p className={styles.title}>
            привет
          </p>
        </video>
    )
}