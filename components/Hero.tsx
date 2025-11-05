'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({ 
  title = "Local Lens Sambir",
  subtitle = "Ваш путівник по найкращих місцях Самбора",
  imageSrc = "/images/hero.svg",
  imageAlt = "Local Lens Sambir - Путівник по найкращих місцях Самбора: ресторани, парки, спортивні центри та розважальні заклади"
}: HeroProps) {

  return (
    <section className={styles.heroContainer} role="banner" aria-label="Головний банер сайту">
      <div className={styles.heroContent}>
        <header className={styles.heroText}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </header>
        
        <div className={styles.heroImageWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={600}
            priority
            className={styles.heroImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}