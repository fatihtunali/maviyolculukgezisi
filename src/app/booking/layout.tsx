import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rezervasyon Yapın | Müsaitlik Kontrolü",
  description:
    "Türkiye'de lüks gulet kiralamanızı rezerve edin. Gerçek zamanlı müsaitlik kontrolü yapın, yatınızı seçin, tarih ve rota belirleyin. Anında onay. Mavi Yolculuk Gezisi ile güvenli rezervasyon.",
  keywords: [
    "türkiye yat kiralama rezervasyon",
    "gulet müsaitlik",
    "mavi yolculuk rezerve et",
    "fethiye yat rezervasyon",
    "online tekne kiralama",
  ],
  openGraph: {
    title: "Rezervasyon Yapın | Mavi Yolculuk Gezisi Türkiye",
    description:
      "Müsaitlik kontrolü yapın ve Türkiye'de hayalinizdeki yelken tatilini rezerve edin.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
