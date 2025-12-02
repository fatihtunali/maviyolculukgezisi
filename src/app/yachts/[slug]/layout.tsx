import type { Metadata } from "next";
import { getYachtBySlug, getAllYachts } from "@/data/yachts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const yacht = getYachtBySlug(slug);

  if (!yacht) {
    return {
      title: "Yat Bulunamadı",
    };
  }

  return {
    title: `${yacht.name} | ${yacht.length}m Gulet Kiralama`,
    description: `${yacht.name} kiralayın, ${yacht.guests} misafir için ${yacht.cabins} kamaralı lüks ${yacht.length}m gulet. ${yacht.shortDescription} Profesyonel mürettebat, her şey dahil. €${yacht.pricePerDay?.aprilMay || yacht.pricePerWeek?.low || 0}${yacht.pricePerDay ? '/gün' : '/hafta'}'dan başlayan fiyatlarla.`,
    keywords: [
      yacht.name.toLowerCase(),
      `${yacht.length}m gulet`,
      `${yacht.cabins} kamaralı yat`,
      `${yacht.guests} misafirlik tekne`,
      "türkiye yat kiralama",
      "fethiye gulet kiralama",
    ],
    openGraph: {
      title: `${yacht.name} | Türkiye Lüks Gulet Kiralama`,
      description: yacht.shortDescription,
      images: [
        {
          url: yacht.thumbnail,
          width: 1200,
          height: 630,
          alt: yacht.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${yacht.name} | Mavi Yolculuk Gezisi Türkiye`,
      description: yacht.shortDescription,
      images: [yacht.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  const yachts = getAllYachts();
  return yachts.map((yacht) => ({
    slug: yacht.slug,
  }));
}

export default function YachtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
