import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mavi Yolculuk Rotaları | Türkiye Yelken Güzergahları",
  description:
    "Türkiye'nin Turkuaz Kıyısı boyunca özenle hazırlanmış mavi yolculuk rotalarımızı keşfedin. Fethiye'den Olimpos'a, Bodrum Yarımadası, Yunan Adaları rotaları. Gizli koylar, antik kalıntılar ve el değmemiş kumsallarla 4-14 günlük yelken maceraları.",
  keywords: [
    "mavi yolculuk rotası",
    "fethiye yelken rotası",
    "bodrum gezi rotası",
    "12 ada turu",
    "yunan adaları yat",
    "türkiye yelken rotaları",
    "göcek koyu gezisi",
  ],
  openGraph: {
    title: "Mavi Yolculuk Rotaları | Mavi Yolculuk Gezisi Türkiye",
    description:
      "Türkiye'nin muhteşem kıyıları boyunca özenle hazırlanmış yelken rotalarımızı keşfedin.",
    images: ["/assets/images/itineraries/fethiye.jpg"],
  },
};

export default function ItinerariesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
