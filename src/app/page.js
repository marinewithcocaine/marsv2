'use client'

import styles from "./page.module.css";
import LinkList from "@/components/link-list/link-list";
import Frame from "@/components/frame/frame";
import BackgroundVideo from 'next-video/background-video';
import { useState } from "react";

export default function Home() {

  const [isPopupOpened, setPopupOpened] = useState(false);

  function openPopup() {
    setPopupOpened(true);
  }

  return (
    <main className={styles.main}>
      <section className={styles.content}>
          <BackgroundVideo className={styles.video} src={'http://pictdesign.ru/wp-content/uploads/2025/10/000_FIN_3_low.mp4'} />
          <LinkList onclick={openPopup} />
          <Frame isOpen={isPopupOpened} onClick={() => setPopupOpened(false)} page={'https://petcarecenter.ru/'} />
      </section>
    </main>
  )
}
