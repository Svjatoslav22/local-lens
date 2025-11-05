import styles from './page.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.grid}>
          <Link href="/arena-sport">
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Arena SPORT</h2>
              <p className={styles.description}>
                Arena Sport — сучасний спортивно-розважальний комплекс у Самборі на вул. Завокзальній. Тут є боулінг, більярд, бар і танцювальний майданчик, де часто проходять вечірки та трансляції матчів.
              </p>
            </div>
          </Link>
          <Link href="/billiard">
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>BILLIARD</h2>
              <p className={styles.description}>
                У Самборі популярні більярдні столи є в Arena Sport, а також у клубі «Самбірський більярд» на вул. Чорновола. Обидва заклади пропонують комфортні зали й оренду на годину.
              </p>
            </div>
          </Link>
          <Link href="/center">
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Center</h2>
              <p className={styles.description}>
                Центр Самбора — площа Ринок і прилеглі вулиці. Тут розташовані Ратуша, собори, кав’ярні, ресторани, магазини та прогулянкова зона. Це серце міста й головне місце зустрічей.
              </p>
            </div>
          </Link>
          <Link href="/dragon-park">
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Dragon PARK</h2>
              <p className={styles.description}>
                Dragon Park — дитячий ігровий центр у ТЦ «Атлант» на вул. Торговій. Є батутна арена, лабіринт, зони для святкувань та автомати. Підходить для дітей різного віку.
              </p>
            </div>
          </Link>
          <Link href="/park">
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Park</h2>
              <p className={styles.description}>
                Міський парк культури та відпочинку — головна зелена зона Самбора. Тут є алеї для прогулянок, дитячі майданчики, літнє кафе та сцена для святкових заходів.
              </p>
            </div>
          </Link>
          <Link href="/restaurants">
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Restaurants</h2>
              <p className={styles.description}>
                У Самборі працюють популярні ресторани — «SAMBEER PUB», «Pizza Celentano», «Карамель», «Вінтаж» та інші. Найбільше закладів розташовано в центрі міста біля площі Ринок.
              </p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
