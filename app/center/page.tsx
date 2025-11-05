import Link from "next/link";
import styles from '../category.module.css';
import { getLocationsByCategory } from "@/lib/locations";

async function getCenterLocations() {
    return getLocationsByCategory('center');
}

export default async function Center() {
    const locations = await getCenterLocations();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                <h1 className={styles.title}>🏛️ Center</h1>
                <p className={styles.description}>
                    Центр Самбора - серце міста з Ратушею, храмами, кафе та магазинами.
                    Історичне та культурне серце міста.
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
