import Link from "next/link";
import styles from '../category.module.css';

interface Location {
    id: number;
    name: string;
    category: string;
    address: string;
}

async function getDragonParkLocations() {
    const res = await fetch(`${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'}/api/locations`);
    const locations: Location[] = await res.json();
    return locations.filter((location: Location) => {
        return (location.category === 'dragon-park');
    });
}

export default async function DragonPark() {
    const locations = await getDragonParkLocations();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                <h1 className={styles.title}>🐉 Dragon Park</h1>
                <p className={styles.description}>
                    Сімейний розважальний центр з картингом, батутами, VR та ігровими автоматами.
                    Найкраще місце для сімейного відпочинку.
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
