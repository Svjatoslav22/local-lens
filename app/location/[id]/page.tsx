import Link from "next/link";
import styles from '../../location-detail.module.css';

interface Location {
    params: { id: string };
}

interface LocationData {
    id: number;
    name: string;
    category: string;
    address: string;
}

async function getLocationById(id: string) {
    const res = await fetch(`${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'}/api/locations`);
    const locations: LocationData[] = await res.json();
    return locations.find((loc: LocationData) => loc.id === parseInt(id));
}

const categoryNames: Record<string, string> = {
    'arena-sport': 'Arena Sport',
    'billiard': 'Billiard', 
    'center': 'Center',
    'dragon-park': 'Dragon Park',
    'park': 'Park',
    'restaurants': 'Restaurants'
};

export default async function LocationPage({ params }: Location) {
    const resolvedParams = await params;
    const location = await getLocationById(resolvedParams.id);
    
    if (!location) {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.notFound}>
                        <h1 className={styles.notFoundTitle}>❌ Локація не знайдена</h1>
                        <p className={styles.notFoundText}>Вибачте, локація з таким ID не існує.</p>
                        <Link href="/" className={styles.backLink}>
                            ← Повернутися на головну
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{location.name}</h1>
                </div>

            <div className={styles.infoCard}>
                <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>📍 Адреса:</span>
                        <span className={styles.infoValue}>{location.address}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>🏷️ Категорія:</span>
                        <span className={styles.infoValue}>{categoryNames[location.category] || location.category}</span>
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <h3 className={styles.descriptionTitle}>Опис</h3>
                <p className={styles.descriptionText}>
                    Детальна інформація про {location.name}. Тут можна додати фото, 
                    години роботи, контактну інформацію та іншу корисну інформацію 
                    для відвідувачів цього місця.
                </p>
            </div>

            <div className={styles.navigation}>
                <Link href="/" className={styles.backLink}>
                    ← На головну
                </Link>
                <Link href={`/${location.category}`} className={styles.categoryLink}>
                    ← До категорії {categoryNames[location.category]}
                </Link>
            </div>
            </div>
        </div>
    );
}