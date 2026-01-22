import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <h2 className={styles.logo}>TuriAs</h2>

        <nav className={styles.nav}>
          <Link href="/" className={styles.nav__link}>Home</Link>
          <Link href="/#places" className={styles.nav__link}>Pontos turísticos</Link>
          <Link href="/#about-us" className={styles.nav__link}>Sobre nós</Link>
          <Link href="#" className={styles.nav__link}>Contato</Link>
        </nav>

        <div className={styles.socials}>
          <a href="#" aria-label="Instagram" className={styles.social__link}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook" className={styles.social__link}>
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter" className={styles.social__link}>
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} TuriAs — Todos os direitos reservados.
      </p>
    </footer>
  );
}
