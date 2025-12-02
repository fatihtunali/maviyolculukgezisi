import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şartlar ve Koşullar | Mavi Yolculuk Gezisi",
  description:
    "Mavi Yolculuk Gezisi yat kiralama rezervasyonları için Şartlar ve Koşullarımızı okuyun. Rezervasyon politikalarımızı, iptal koşullarını ve kiralama şartlarını öğrenin.",
  openGraph: {
    title: "Şartlar ve Koşullar | Mavi Yolculuk Gezisi",
    description:
      "Mavi Yolculuk Gezisi yat kiralama rezervasyonları için Şartlar ve Koşullarımızı okuyun.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
