import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yelken Destinasyonları | Turkuaz Kıyısı Limanları | Mavi Yolculuk Gezisi",
  description:
    "Fethiye, Göcek, Marmaris, Bodrum ve Kekova dahil Türkiye'nin muhteşem yelken destinasyonlarını keşfedin. Hayalinizdeki mavi yolculuk için Turkuaz Kıyısı'nı keşfedin.",
  keywords: [
    "türkiye yelken destinasyonları",
    "turkuaz kıyısı limanları",
    "fethiye yat kiralama",
    "göcek marina",
    "marmaris yelken",
    "bodrum yat",
    "kekova batık şehir",
    "türk rivierası destinasyonları",
    "akdeniz yelken noktaları",
    "mavi yolculuk destinasyonları",
  ],
  openGraph: {
    title: "Yelken Destinasyonları | Turkuaz Kıyısı Limanları | Mavi Yolculuk Gezisi",
    description:
      "Hayalinizdeki mavi yolculuk için Fethiye, Göcek, Marmaris, Bodrum ve Kekova dahil Türkiye'nin muhteşem yelken destinasyonlarını keşfedin.",
    type: "website",
    locale: "tr_TR",
    siteName: "Mavi Yolculuk Gezisi",
    images: [
      {
        url: "/assets/images/itineraries/fethiye.jpg",
        width: 1200,
        height: 630,
        alt: "Türk Kıyısı Yelken Destinasyonları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yelken Destinasyonları | Turkuaz Kıyısı Limanları | Mavi Yolculuk Gezisi",
    description:
      "Hayalinizdeki mavi yolculuk için Türkiye'nin muhteşem yelken destinasyonlarını keşfedin.",
  },
  alternates: {
    languages: {
      "tr-TR": "/destinations",
    },
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
