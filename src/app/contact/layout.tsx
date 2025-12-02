import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Yat Kiralamanızı Rezerve Edin",
  description:
    "Türkiye'de lüks gulet kiralama için Mavi Yolculuk Gezisi ile iletişime geçin. Ücretsiz teklif alın, müsaitlik kontrolü yapın veya sorularınızı sorun. Telefon: +90 252 614 4757. Fethiye Marina merkezli. Türkçe, İngilizce ve Almanca konuşuyoruz.",
  keywords: [
    "türkiye yat kiralama iletişim",
    "fethiye gulet kiralama",
    "yat kiralama sorgu",
    "mavi yolculuk rezervasyon",
    "fethiye marina yat",
  ],
  openGraph: {
    title: "Mavi Yolculuk Gezisi İletişim | Ücretsiz Teklif Alın",
    description:
      "Müsaitlik, fiyatlandırma ve özel rota talepleri için bize ulaşın.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
