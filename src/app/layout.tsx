import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // For iPhone notch support
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maviyolculukgezisi.com"),
  title: {
    default: "Mavi Yolculuk Gezisi | Türkiye Lüks Gulet Kiralama | Mavi Yolculuk Fethiye",
    template: "%s | Mavi Yolculuk Gezisi Türkiye",
  },
  description:
    "Türkiye'nin muhteşem Turkuaz Kıyısı boyunca nihai lüks gulet kiralama deneyimini yaşayın. Profesyonel mürettebat, gurme mutfak ve su sporları ile premium yat kiralama. Fethiye, Bodrum, Marmaris'ten mavi yolculuk. Hayalinizdeki yelken tatilini bugün rezerve edin!",
  keywords: [
    "türkiye yat kiralama",
    "gulet kiralama türkiye",
    "mavi yolculuk türkiye",
    "fethiye lüks tekne kiralama",
    "fethiye yat kiralama",
    "türk rivierası gezisi",
    "akdeniz yelken tatili",
    "bodrum gulet gezisi",
    "marmaris yat kiralama",
    "özel yat kiralama türkiye",
    "türkiye yelken",
    "mavi yolculuk",
    "kabin kiralama türkiye",
    "lüks gulet tatili",
    "türk kıyısı yelken",
  ],
  authors: [{ name: "Mavi Yolculuk Gezisi", url: "https://www.maviyolculukgezisi.com" }],
  creator: "Mavi Yolculuk Gezisi",
  publisher: "Mavi Yolculuk Gezisi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.maviyolculukgezisi.com",
    languages: {
      "tr-TR": "https://www.maviyolculukgezisi.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/logo/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/assets/images/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/assets/images/logo/android-chrome-192.png" },
      { rel: "android-chrome-512x512", url: "/assets/images/logo/android-chrome-512.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.maviyolculukgezisi.com",
    siteName: "Mavi Yolculuk Gezisi",
    title: "Mavi Yolculuk Gezisi | Türkiye Lüks Gulet Kiralama",
    description:
      "Türkiye'nin muhteşem Turkuaz Kıyısı boyunca nihai lüks gulet kiralama deneyimini yaşayın. 1989'dan beri profesyonel mürettebat ile premium yat kiralama.",
    images: [
      {
        url: "/assets/images/og-image-new.jpg",
        width: 1200,
        height: 630,
        alt: "Mavi Yolculuk Gezisi - Türkiye Lüks Gulet Kiralama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavi Yolculuk Gezisi | Türkiye Lüks Gulet Kiralama",
    description:
      "Türkiye'nin muhteşem Turkuaz Kıyısı boyunca nihai lüks gulet kiralama deneyimini yaşayın. Hayalinizdeki yelken tatilini rezerve edin!",
    images: ["/assets/images/og-image-new.jpg"],
    creator: "@maviyolculukgezisi",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Providers>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-white focus:rounded-md focus:outline-none"
          >
            Ana içeriğe geç
          </a>
          <Header />
          <main id="main-content" className="min-h-screen" role="main">
            {children}
          </main>
          <Footer />
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  );
}
