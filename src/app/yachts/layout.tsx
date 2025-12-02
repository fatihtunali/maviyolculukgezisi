import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lüks Gulet Filosu | Türkiye Yat Kiralama",
  description:
    "Türkiye'de kiralık 4 premium guletimizi keşfedin. 8 misafirlik samimi yatlardan 20 misafirlik geniş teknelere. Klimali kamaralar, profesyonel mürettebat, gurme mutfak. Mavi yolculuğunuzu bugün rezerve edin!",
  keywords: [
    "türkiye gulet filosu",
    "fethiye yat kiralama",
    "türkiye lüks tekne kiralama",
    "mavi yolculuk tekneleri",
    "bodrum gulet kiralama",
    "özel yat türkiye",
  ],
  openGraph: {
    title: "Lüks Gulet Filosu | Mavi Yolculuk Gezisi Türkiye",
    description:
      "Türkiye'nin Turkuaz Kıyısı boyunca kiralık premium gulet filomuzu keşfedin.",
    images: ["/assets/images/yachts/holiday10/01.jpg"],
  },
};

export default function YachtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
