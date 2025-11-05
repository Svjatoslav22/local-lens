import Link from "next/link";
import styles from '../category.module.css';
import { getLocationsByCategory } from "@/lib/locations";

async function getParkLocations() {
    return getLocationsByCategory('park');
}

export default async function Parks() {
    const locations = await getParkLocations();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                <h1 className={styles.title}>🌳 Parks</h1>
                <p className={styles.description}>
                    Парки та зони відпочинку Самбора для прогулянок та активного дозвілля.
                    Місця для відпочинку на природі та спорту на свіжому повітрі.
                </p>
            </div>
            <div className={styles.locationsGrid}>
                {locations.map((location) => (
                    <Link key={location.id} href={`/location/${location.id}`} className={styles.locationCard}>
                        <h2 className={styles.locationName}>{location.name}</h2>
                        <p className={styles.locationAddress}>{location.address}</p>
                    </Link>
                ))}
            </div>

                <Link href="/" className={styles.backLink}>← Повернутися на головну</Link>
            </div>
        </div>
    );
}