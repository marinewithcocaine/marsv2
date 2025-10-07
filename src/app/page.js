'use client'

import styles from "./page.module.css";
import LinkList from "@/components/link-list/link-list";
import Frame from "@/components/frame/frame";
import { useState } from "react";

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
        <div className={styles.video}>
          
        </div>
        <LinkList onclick={openPopup} />
        <Frame isOpen={isPopupOpened} onClick={() => setPopupOpened(false)} child={frame()} />
      </section>
    </main>
  );
}
