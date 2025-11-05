import Link from "next/link";
import styles from '../category.module.css';

interface Location {
    id: number;
    name: string;
    category: string;
    address: string;
}

async function getParkLocations() {
    const res = await fetch(`${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'}/api/locations`);
    const locations: Location[] = await res.json();
    return locations.filter((location: Location) => {
        return (location.category === 'park');
    });
}

export default async function Park() {
    const locations = await getParkLocations();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                <h1 className={styles.title}>🌳 Park</h1>
                <p className={styles.description}>
                    Міські парки та зелені зони Самбора для відпочинку та прогулянок.
                    Найкращі місця для активного відпочинку на природі.
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
