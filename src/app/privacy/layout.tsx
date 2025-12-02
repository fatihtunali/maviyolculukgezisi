import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Mavi Yolculuk Gezisi",
  description:
    "Mavi Yolculuk Gezisi Gizlilik Politikamızı okuyun. Yat kiralama hizmetlerimizi kullandığınızda kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin.",
  openGraph: {
    title: "Gizlilik Politikası | Mavi Yolculuk Gezisi",
    description:
      "Mavi Yolculuk Gezisi Gizlilik Politikamızı okuyun. Kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
