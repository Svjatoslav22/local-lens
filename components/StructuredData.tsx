interface StructuredDataProps {
  title?: string;
  subtitle?: string;
}

export default function StructuredData({ 
  title = "Local Lens Sambir",
  subtitle = "Ваш путівник по найкращих місцях Самбора"
}: StructuredDataProps) {
  
  // Структурированные данные для SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": title,
    "description": subtitle,
    "url": "https://local-lens-sambir.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://local-lens-sambir.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "about": {
      "@type": "Place",
      "name": "Самбір",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Самбір",
        "addressRegion": "Львівська область",
        "addressCountry": "UA"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}