import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Mavi Yolculuk Gezisi 1989'dan Beri",
  description:
    "Mavi Yolculuk Gezisi, 1989'dan bu yana Türkiye'de lüks gulet kiralama hizmeti sunmaktadır. 35+ yıllık tecrübeye sahip aile şirketi. Profesyonel mürettebat, güvenlik sertifikalı, Turkuaz Kıyısı boyunca ödüllü hizmet.",
  keywords: [
    "mavi yolculuk gezisi şirketi",
    "türk yat kiralama şirketi",
    "fethiye yat kiralama",
    "aile yat işletmesi türkiye",
    "mavi yolculuk operatörü",
  ],
  openGraph: {
    title: "Mavi Yolculuk Gezisi Hakkında | 35+ Yıllık Mükemmellik",
    description:
      "1989'dan bu yana Türk kıyılarında hizmet veren aile işletmesi lüks yat kiralama şirketi.",
    images: ["/assets/images/about/about-h4.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
