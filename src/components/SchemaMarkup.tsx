
// @ts-nocheck
export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Laure & Co",
    "description": "Médiation animale dans les Vosges : séances bien-être, accompagnement personnalisé, activités éducatives et relationnelles pour tous publics.",
    "url": "https://laureandco.fr",
    "telephone": "+33642125425",
    "email": "laureandcoo@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Liffol-le-Grand",
      "addressLocality": "Liffol-le-Grand",
      "addressRegion": "Vosges",
      "postalCode": "88350",
      "addressCountry": "FR"
    },
    "image": "https://laureandco.fr/og-image.png",
    "priceRange": "40-90€",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61557375502913",
      "https://www.instagram.com/laure_and.co"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Vosges"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}