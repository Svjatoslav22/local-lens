import Link from "next/link";
import styles from '../category.module.css';

interface Location {
    id: number;
    name: string;
    category: string;
    address: string;
}

async function getRestaurantLocations() {
    const res = await fetch('http://localhost:3000/api/locations');
    const locations: Location[] = await res.json();
    return locations.filter((location: Location) => {
        return (location.category === 'restaurants');
    });
}

export default async function Restaurants() {
    const locations = await getRestaurantLocations();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                <h1 className={styles.title}>🍽️ Restaurants</h1>
                <p className={styles.description}>
                    Ресторани, кафе та піцерії Самбора з різноманітною кухнею.
                    Від традиційної української до європейської кухні.
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
