export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mavi Yolculuk Gezisi",
    alternateName: "Mavi Yolculuk Gezisi Türkiye",
    url: "https://www.maviyolculukgezisi.com",
    logo: "https://www.maviyolculukgezisi.com/assets/images/logo/logo-main.png",
    description:
      "1989'dan beri Türkiye'de Turkuaz Kıyısı boyunca mavi yolculuk deneyimleri sunan premium lüks gulet kiralama şirketi.",
    foundingDate: "1989",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fethiye Marina",
      addressLocality: "Fethiye",
      addressRegion: "Mugla",
      postalCode: "48300",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-252-614-4757",
      contactType: "customer service",
      availableLanguage: ["English", "Turkish", "German"],
    },
    sameAs: [
      "https://www.facebook.com/maviyolculukgezisi",
      "https://www.instagram.com/maviyolculukgezisi",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Mavi Yolculuk Gezisi",
    image: "https://www.maviyolculukgezisi.com/assets/images/logo/logo-main.png",
    "@id": "https://www.maviyolculukgezisi.com",
    url: "https://www.maviyolculukgezisi.com",
    telephone: "+90-252-614-4757",
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fethiye Marina",
      addressLocality: "Fethiye",
      addressRegion: "Mugla",
      postalCode: "48300",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.6222,
      longitude: 29.1094,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mavi Yolculuk Gezisi",
    url: "https://www.maviyolculukgezisi.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.maviyolculukgezisi.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface YachtSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  priceFrom: number;
  currency: string;
  guests: number;
  cabins: number;
  length: number;
}

export function YachtSchema({
  name,
  description,
  image,
  url,
  priceFrom,
  currency,
  guests,
  cabins,
  length,
}: YachtSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: image,
    url: url,
    brand: {
      "@type": "Brand",
      name: "Mavi Yolculuk Gezisi",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: priceFrom,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Mavi Yolculuk Gezisi",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Michael S.",
        },
        reviewBody: "Amazing experience! The crew was exceptional and the yacht was beautiful.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sarah J.",
        },
        reviewBody: "Perfect holiday. The food was incredible and the coastline breathtaking.",
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Guests",
        value: guests,
      },
      {
        "@type": "PropertyValue",
        name: "Cabins",
        value: cabins,
      },
      {
        "@type": "PropertyValue",
        name: "Length",
        value: `${length}m`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
