import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Mavi Yolculuk İpuçları ve Gezi Rehberleri | Mavi Yolculuk Gezisi",
  description:
    "Türkiye'nin Turkuaz Kıyısı'nda mükemmel yat kiralama deneyiminiz için uzman tavsiyeleri, destinasyon rehberleri ve içeriden ipuçları. Mavi yolculuk hakkında en son makalelerimizi okuyun.",
  keywords: [
    "mavi yolculuk blogu",
    "yat kiralama ipuçları",
    "türkiye gezi rehberi",
    "turkuaz kıyısı blogu",
    "türkiye yelken ipuçları",
    "gulet gezisi tavsiyeleri",
    "türk kıyısı rehberi",
    "yat tatili ipuçları",
    "akdeniz yelken blogu",
    "fethiye gezi ipuçları",
  ],
  openGraph: {
    title: "Blog | Mavi Yolculuk İpuçları ve Gezi Rehberleri | Mavi Yolculuk Gezisi",
    description:
      "Türkiye'nin Turkuaz Kıyısı'nda mükemmel yat kiralama deneyiminiz için uzman tavsiyeleri, destinasyon rehberleri ve içeriden ipuçları.",
    type: "website",
    locale: "tr_TR",
    siteName: "Mavi Yolculuk Gezisi",
    images: [
      {
        url: "/assets/images/hero/holiday10-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mavi Yolculuk Gezisi Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Mavi Yolculuk İpuçları ve Gezi Rehberleri | Mavi Yolculuk Gezisi",
    description:
      "Mükemmel yat kiralama deneyiminiz için uzman tavsiyeleri, destinasyon rehberleri ve içeriden ipuçları.",
  },
  alternates: {
    languages: {
      "tr-TR": "/blog",
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
