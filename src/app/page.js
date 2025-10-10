'use client'

import styles from "./page.module.css";
import LinkList from "@/components/link-list/link-list";
import Frame from "@/components/frame/frame";
import { useState } from "react";
import BackgroundVideo from 'next-video/background-video';
import video from 'https://c02929e3-a4b9-4b2b-8aad-0bb85fe18283.selstorage.ru/123.mp4';

export default function Home() {

  const [isPopupOpened, setPopupOpened] = useState(false);

  function openPopup() {
    setPopupOpened(true);
  }

  function frame() {
    return (
      <iframe className={styles.popup__frame} src='https://petcarecenter.ru/' />
    )
  }

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <BackgroundVideo className={styles.video} src={video} />
        <LinkList onclick={openPopup} />
        <Frame isOpen={isPopupOpened} onClick={() => setPopupOpened(false)} child={frame()} />
      </section>
    </main>
  );
}
