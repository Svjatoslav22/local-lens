import Link from "next/link";
import styles from '../category.module.css';
import { getLocationsByCategory } from "@/lib/locations";

async function getDragonParkLocations() {
    return getLocationsByCategory('dragon-park');
}

export default async function DragonPark() {
    const locations = await getDragonParkLocations();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                <h1 className={styles.title}>🐲 Dragon Park</h1>
                <p className={styles.description}>
                    Розважальні центри та атракціони Самбора для сімейного відпочинку.
                    Дитячі майданчики, ігрові зони та розважальні активності.
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