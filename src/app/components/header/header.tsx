"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", onKey);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", onKey);
      }
    };
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>TuriAs</h1>

      <button
        className={`${styles.MenuButton} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`} onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen}/>

      <nav ref={navRef} className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-hidden={!menuOpen}>
        <Link className={styles.nav__link} href="/">Home</Link>
        <Link className={styles.nav__link} href="/#places">Pontos turísticos</Link>
        <Link className={styles.nav__link} href="/#about-us">Sobre nós</Link>
      </nav>
    </header>
  );
}
