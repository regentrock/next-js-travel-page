import { places } from "@/lib/places";
import Link from "next/link";
import { use } from "react";
import styles from "./placeInfo.module.css";

interface Props {
  params: Promise<{ id: string }>;
}

// 🔹 Adicionado: gera páginas estáticas durante o build
export async function generateStaticParams() {
  return places.map((place) => ({
    id: place.id.toString(),
  }));
}

export default function PlaceInfo({ params }: Props) {
  const { id } = use(params);
  const placeId = parseInt(id);
  const place = places.find(p => p.id === placeId);

  if (!place) {
    return (
      <div className={styles.notFound}>
        <h2>Ponto turístico não encontrado</h2>
        <p>O destino que você está procurando não existe.</p>
        <Link href="/" className={styles.backButton}>
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <img 
        src={place.image} 
        alt={place.title}
        className={styles.image}
      />
      
      <div className={styles.content}>
        <h1 className={styles.title}>{place.title}</h1>
        <p className={styles.description}>{place.description}</p>
        
        <div className={styles.text}>
          <p>
            {place.text}
          </p>
        </div>

        <Link href="/" className={styles.backButton}>
          ← Voltar para destinos
        </Link>
      </div>
    </div>
  );
}
