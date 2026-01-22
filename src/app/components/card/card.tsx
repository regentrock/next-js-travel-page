// card.tsx
import { Place } from "@/types/types";
import styles from "./card.module.css";
import Link from "next/link";

type Props = {
  place: Place;
};

export default function Card({ place }: Props) {
  return (
    <Link href={`/places/${place.id}`} className={styles.card}>
      <img src={place.image} alt={place.title} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <h2 className={styles.cardTitle}>{place.title}</h2>
        <p className={styles.cardDescription}>{place.description}</p>
      </div>
    </Link>
  );
}
