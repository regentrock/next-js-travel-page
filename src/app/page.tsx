import styles from "../styles/page.module.css";
import Card from "./components/card/card";
import { places } from "@/lib/places";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
      <img src="https://wallpapercave.com/wp/wp2481186.jpg" alt="Paisagem de viagem" sizes="100vw" className={styles.heroImage}
      />

      <div className={styles.overlay} />

      <h1 className={styles.hero__title}>
        Escolha seu destino, viva o incrível!
      </h1>
      <h3 className={styles.hero__subtitle}>
        A escolha certa é viajar
      </h3>
    </section>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Pontos turísticos</h2>

        <div id="places" className={styles.cardsGrid}>
          {places.map((place) => (
            <Card key={place.id} place={place} />
          ))}
        </div>
      </main>

      <section id="about-us" className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>Sobre Nós</h2>
            <p>
              Somos uma agência de viagens apaixonada por criar experiências inesquecíveis.
              Acreditamos que viajar é mais do que visitar lugares — é viver histórias, conhecer culturas
              e guardar memórias que duram para sempre.
            </p>
            <p>
              Com uma equipe dedicada e experiente, oferecemos roteiros personalizados, suporte completo e
              os melhores destinos do mundo com conforto, segurança e autenticidade. Nosso objetivo é fazer
              você se apaixonar por cada viagem.
            </p>
            <a href="#contato" className={styles.aboutButton}>
              Entre em contato
            </a>
          </div>

          <div className={styles.aboutImageContainer}>
            <img
              src="https://freepngimg.com/download/travel/168111-travel-icon-free-png-hq.png"
              alt="Equipe de viagem"
              className={styles.aboutImage}
              width="500px"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
