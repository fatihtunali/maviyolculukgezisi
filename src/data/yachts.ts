import type { Yacht, TranslatedYacht } from "@/types";
import type { Language } from "@/contexts/LanguageContext";

export const yachts: Yacht[] = [
  {
    id: "holiday10",
    slug: "ms-holiday-10",
    name: "M/S Holiday 10",
    type: "gulet",
    length: 32,
    beam: 7.5,
    cabins: 6,
    guests: 12,
    crew: 4,
    year: 2018,
    renovated: 2023,
    description: `M/S Holiday 10, geleneksel Türk işçiliği ile modern konforu mükemmel bir şekilde harmanlayan lüks bir 32 metrelik gulettir. 6 zarif kamarası ile muhteşem Türkiye kıyıları boyunca unutulmaz bir mavi yolculuk deneyimi için 12 misafire kadar rahatça ev sahipliği yapar.

2018 yılında inşa edilmiş ve 2023 yılında yenilenmiş olan Holiday 10, geniş güneşlenme güverteleri, şık bir salon ve dünya standartlarında olanaklar sunar. 4 kişilik deneyimli mürettebatı, gurme Akdeniz mutfağından kişiselleştirilmiş gezilere kadar yolculuğunuz boyunca kusursuz hizmet sağlar.

İster romantik bir kaçamak, ister aile macerası, ister özel bir grup kiralama arıyor olun, M/S Holiday 10 Ege ve Akdeniz'in nefes kesici manzaraları eşliğinde olağanüstü bir yelken deneyimi sunar.`,
    shortDescription: "6 kamaralı 32m lüks gulet, 12 kişiye kadar gruplar için mükemmel mavi yolculuk deneyimi.",
    translations: {
      tr: {
        description: `M/S Holiday 10, geleneksel Türk işçiliği ile modern konforu mükemmel bir şekilde harmanlayan lüks bir 32 metrelik gulettir. 6 zarif kamarası ile muhteşem Türkiye kıyıları boyunca unutulmaz bir mavi yolculuk deneyimi için 12 misafire kadar rahatça ev sahipliği yapar.

2018 yılında inşa edilmiş ve 2023 yılında yenilenmiş olan Holiday 10, geniş güneşlenme güverteleri, şık bir salon ve dünya standartlarında olanaklar sunar. 4 kişilik deneyimli mürettebatı, gurme Akdeniz mutfağından kişiselleştirilmiş gezilere kadar yolculuğunuz boyunca kusursuz hizmet sağlar.

İster romantik bir kaçamak, ister aile macerası, ister özel bir grup kiralama arıyor olun, M/S Holiday 10 Ege ve Akdeniz'in nefes kesici manzaraları eşliğinde olağanüstü bir yelken deneyimi sunar.`,
        shortDescription: "6 kamaralı 32m lüks gulet, 12 kişiye kadar gruplar için mükemmel mavi yolculuk deneyimi.",
      },
    },
    features: [
      { icon: "ruler", label: "Uzunluk", value: "32m" },
      { icon: "users", label: "Misafir", value: "12" },
      { icon: "bed", label: "Kabin", value: "6" },
      { icon: "users-cog", label: "Mürettebat", value: "4" },
      { icon: "calendar", label: "Yapım Yılı", value: "2018" },
      { icon: "wrench", label: "Yenilenme", value: "2023" },
    ],
    amenities: [
      "Klima",
      "Jeneratör",
      "WiFi",
      "TV/DVD",
      "Ses Sistemi",
      "Su Yapıcı",
      "Buz Makinesi",
      "Şnorkel Ekipmanı",
      "Balıkçılık Ekipmanı",
      "Kano",
      "Kürek Sörfü",
      "Güneşlenme Minderleri",
      "Güverte Duşu",
      "Barbekü",
    ],
    images: [
      { id: "h10-1", src: "/assets/images/yachts/holiday10/01.jpg", alt: "M/S Holiday 10 Havadan Görünüm", category: "exterior" },
      { id: "h10-2", src: "/assets/images/yachts/holiday10/02.jpg", alt: "M/S Holiday 10 Koy Manzarası", category: "exterior" },
      { id: "h10-3", src: "/assets/images/yachts/holiday10/03.jpg", alt: "M/S Holiday 10 Baş Güverte", category: "deck" },
      { id: "h10-4", src: "/assets/images/yachts/holiday10/04.jpg", alt: "M/S Holiday 10 Kıç Güverte", category: "deck" },
      { id: "h10-5", src: "/assets/images/yachts/holiday10/05.jpg", alt: "M/S Holiday 10 Salon", category: "interior" },
      { id: "h10-6", src: "/assets/images/yachts/holiday10/06.jpg", alt: "M/S Holiday 10 Kabin", category: "cabin" },
      { id: "h10-7", src: "/assets/images/yachts/holiday10/07.jpg", alt: "M/S Holiday 10 Güneşlenme Güvertesi", category: "deck" },
    ],
    thumbnail: "/assets/images/yachts/holiday10.jpg",
    pricePerDay: {
      aprilMay: 3500,
      juneSeptember: 4000,
      julyAugust: 4500,
      october: 3500,
    },
    minDays: 7,
    inclusions: [
      "Yakıt",
      "Tekne kiralama, ekipman ve mürettebat",
      "Temiz çarşaf, plaj havlusu ve banyo havlusu",
      "Liman vergileri ve izinler",
      "Türk transit log",
      "Temiz su",
      "Tekne sigortası",
    ],
    exclusions: [
      "%20 KDV",
      "Yiyecek ve içecekler (mürettebat dahil)",
      "Havaalanı transferleri (ek ücretle sağlanabilir)",
      "Motorlu su sporları ekipmanı",
      "Göcek şamandıra ve bağlama ücretleri",
    ],
    currency: "EUR",
    available: true,
  },
  {
    id: "holiday5",
    slug: "ms-holiday-5",
    name: "M/S Holiday 5",
    type: "gulet",
    length: 31,
    beam: 8,
    cabins: 10,
    guests: 20,
    crew: 4,
    year: 2020,
    renovated: 2025,
    description: `M/S Holiday 5, Mavi Yolculuk Gezisi filosunun amiral gemisi olan etkileyici 31 metrelik bir motor yelkenlidir. 10 geniş kamarası (8 çift kişilik ve 2 twin) ile 20 misafire kadar ev sahipliği yaparak büyük gruplar, aile buluşmaları ve kurumsal etkinlikler için idealdir.

2025 yılında tamamen yenilenmiş olan Holiday 5, modern iç mekanlar, çoklu yemek ve dinlenme alanlarına sahip geniş güverte alanları ve kano ve kürek tahtaları dahil kapsamlı su oyuncakları sunar. 4 kişilik profesyonel mürettebatı olağanüstü hizmet ve otantik Türk misafirperverliği sunar.

Cömert alanın zarif konforla buluştuğu muhteşem Turkuaz Kıyısı boyunca M/S Holiday 5'te nihai mavi yolculuk macerasını yaşayın.`,
    shortDescription: "10 kamaralı 31m amiral gemi motor yelkenli, 20 kişiye kadar büyük gruplar için mükemmel.",
    translations: {
      tr: {
        description: `M/S Holiday 5, Mavi Yolculuk Gezisi filosunun amiral gemisi olan etkileyici 31 metrelik bir motor yelkenlidir. 10 geniş kamarası (8 çift kişilik ve 2 twin) ile 20 misafire kadar ev sahipliği yaparak büyük gruplar, aile buluşmaları ve kurumsal etkinlikler için idealdir.

2025 yılında tamamen yenilenmiş olan Holiday 5, modern iç mekanlar, çoklu yemek ve dinlenme alanlarına sahip geniş güverte alanları ve kano ve kürek tahtaları dahil kapsamlı su oyuncakları sunar. 4 kişilik profesyonel mürettebatı olağanüstü hizmet ve otantik Türk misafirperverliği sunar.

Cömert alanın zarif konforla buluştuğu muhteşem Turkuaz Kıyısı boyunca M/S Holiday 5'te nihai mavi yolculuk macerasını yaşayın.`,
        shortDescription: "10 kamaralı 31m amiral gemi motor yelkenli, 20 kişiye kadar büyük gruplar için mükemmel.",
      },
    },
    features: [
      { icon: "ruler", label: "Uzunluk", value: "31m" },
      { icon: "users", label: "Misafir", value: "20" },
      { icon: "bed", label: "Kabin", value: "10" },
      { icon: "users-cog", label: "Mürettebat", value: "4" },
      { icon: "calendar", label: "Yapım Yılı", value: "2020" },
      { icon: "wrench", label: "Yenilenme", value: "2025" },
    ],
    amenities: [
      "Klima",
      "Jeneratör",
      "WiFi",
      "TV",
      "Ses Sistemi",
      "Şnorkel Ekipmanı",
      "2 Kano",
      "2 Kürek Sörfü",
      "Güneşlenme Minderleri",
      "Güverte Duşu",
      "Barbekü",
      "Çoklu Yemek Alanları",
    ],
    images: [
      { id: "h5-1", src: "/assets/images/yachts/holiday5/01.jpg", alt: "M/S Holiday 5 Dış Görünüm", category: "exterior" },
      { id: "h5-2", src: "/assets/images/yachts/holiday5/02.jpg", alt: "M/S Holiday 5 Baş Güverte", category: "deck" },
      { id: "h5-3", src: "/assets/images/yachts/holiday5/03.jpg", alt: "M/S Holiday 5 Yemek Alanı", category: "deck" },
      { id: "h5-4", src: "/assets/images/yachts/holiday5/04.jpg", alt: "M/S Holiday 5 Kıç Güverte", category: "deck" },
      { id: "h5-5", src: "/assets/images/yachts/holiday5/05.jpg", alt: "M/S Holiday 5 Baş Manzarası", category: "exterior" },
    ],
    thumbnail: "/assets/images/yachts/holiday5.jpg",
    pricePerDay: {
      aprilMay: 2250,
      juneSeptember: 2750,
      julyAugust: 3250,
      october: 2250,
    },
    minDays: 7,
    inclusions: [
      "Yakıt",
      "Tekne kiralama, ekipman ve mürettebat",
      "Temiz çarşaf, plaj havlusu ve banyo havlusu",
      "Liman vergileri ve izinler",
      "Türk transit log",
      "Temiz su",
      "Tekne sigortası",
    ],
    exclusions: [
      "%20 KDV",
      "Yiyecek ve içecekler (mürettebat dahil)",
      "Havaalanı transferleri (ek ücretle sağlanabilir)",
      "Motorlu su sporları ekipmanı",
      "Göcek şamandıra ve bağlama ücretleri",
    ],
    currency: "EUR",
    available: true,
  },
  {
    id: "holiday6",
    slug: "ms-holiday-6",
    name: "M/S Holiday 6",
    type: "gulet",
    length: 24,
    beam: 6.2,
    cabins: 4,
    guests: 8,
    crew: 3,
    year: 2019,
    description: `M/S Holiday 6, konfor ve stil için tasarlanmış modern bir 24 metrelik gulettir. 4 iyi donatılmış kamarası ile 8 misafire kadar rahatça ev sahipliği yaparak premium bir yelken deneyimi arayan küçük gruplar ve aileler için mükemmeldir.

2019 yılında her detaya dikkat edilerek inşa edilmiş olan Holiday 6, çağdaş iç mekanlar, verimli güverte düzeni ve son teknoloji navigasyon ekipmanları sunar. 3 kişilik özel mürettebatı kişiselleştirilmiş hizmet ve uzman yerel bilgi sağlar.

Modern lüksün zamansız denizcilik geleneğiyle buluştuğu M/S Holiday 6'da Türkiye Rivierası'nın büyüsünü keşfedin.`,
    shortDescription: "4 kamaralı modern 24m gulet, 8 kişiye kadar aileler ve küçük gruplar için mükemmel.",
    translations: {
      tr: {
        description: `M/S Holiday 6, konfor ve stil için tasarlanmış modern bir 24 metrelik gulettir. 4 iyi donatılmış kamarası ile 8 misafire kadar rahatça ev sahipliği yaparak premium bir yelken deneyimi arayan küçük gruplar ve aileler için mükemmeldir.

2019 yılında her detaya dikkat edilerek inşa edilmiş olan Holiday 6, çağdaş iç mekanlar, verimli güverte düzeni ve son teknoloji navigasyon ekipmanları sunar. 3 kişilik özel mürettebatı kişiselleştirilmiş hizmet ve uzman yerel bilgi sağlar.

Modern lüksün zamansız denizcilik geleneğiyle buluştuğu M/S Holiday 6'da Türkiye Rivierası'nın büyüsünü keşfedin.`,
        shortDescription: "4 kamaralı modern 24m gulet, 8 kişiye kadar aileler ve küçük gruplar için mükemmel.",
      },
    },
    features: [
      { icon: "ruler", label: "Uzunluk", value: "24m" },
      { icon: "users", label: "Misafir", value: "8" },
      { icon: "bed", label: "Kabin", value: "4" },
      { icon: "users-cog", label: "Mürettebat", value: "3" },
      { icon: "calendar", label: "Yapım Yılı", value: "2019" },
    ],
    amenities: [
      "Klima",
      "Jeneratör",
      "WiFi",
      "TV",
      "Ses Sistemi",
      "Şnorkel Ekipmanı",
      "Kano",
      "Güneşlenme Minderleri",
      "Güverte Duşu",
      "Barbekü",
    ],
    images: [
      { id: "h6-1", src: "/assets/images/yachts/holiday6/01.webp", alt: "M/S Holiday 6 Dış Görünüm", category: "exterior" },
      { id: "h6-2", src: "/assets/images/yachts/holiday6/02.webp", alt: "M/S Holiday 6 Güverte", category: "deck" },
      { id: "h6-3", src: "/assets/images/yachts/holiday6/03.webp", alt: "M/S Holiday 6 İç Mekan", category: "interior" },
      { id: "h6-4", src: "/assets/images/yachts/holiday6/04.webp", alt: "M/S Holiday 6 Kabin", category: "cabin" },
      { id: "h6-5", src: "/assets/images/yachts/holiday6/05.webp", alt: "M/S Holiday 6 Yemek Alanı", category: "interior" },
      { id: "h6-6", src: "/assets/images/yachts/holiday6/06.webp", alt: "M/S Holiday 6 Salon", category: "interior" },
    ],
    thumbnail: "/assets/images/yachts/holiday6/01.webp",
    pricePerWeek: {
      low: 9000,
      mid: 12000,
      high: 16000,
    },
    currency: "EUR",
    available: true,
  },
  {
    id: "holidaym",
    slug: "ms-holiday-m",
    name: "M/S Holiday M",
    type: "gulet",
    length: 26,
    beam: 6.5,
    cabins: 4,
    guests: 8,
    crew: 3,
    year: 2017,
    renovated: 2024,
    description: `M/S Holiday M, geleneksel cazibe ile modern inceliği birleştiren zarif bir 26 metrelik gulettir. 2024 yılında yeni yenilenmiş olup, her biri konfor ve mahremiyet düşünülerek tasarlanmış 4 geniş kamarada 8 misafire kadar ev sahipliği yapar.

Holiday M, el işi ahşap kaplamalardan premium yatak takımlarına ve tasarımcı banyo armatürlerine kadar detaylara olağanüstü dikkat ile öne çıkar. 3 kişilik profesyonel mürettebatı eşsiz bir kiralama deneyimi sunmaktan gurur duyar.

M/S Holiday M ile yelken açın ve macera ile lüksün mükemmel dengesini arayan seçici gezginler arasında neden favori olduğunu keşfedin.`,
    shortDescription: "4 kamaralı zarif 26m gulet, nihai konfor için 2024 yılında yeni yenilenmiş.",
    translations: {
      tr: {
        description: `M/S Holiday M, geleneksel cazibe ile modern inceliği birleştiren zarif bir 26 metrelik gulettir. 2024 yılında yeni yenilenmiş olup, her biri konfor ve mahremiyet düşünülerek tasarlanmış 4 geniş kamarada 8 misafire kadar ev sahipliği yapar.

Holiday M, el işi ahşap kaplamalardan premium yatak takımlarına ve tasarımcı banyo armatürlerine kadar detaylara olağanüstü dikkat ile öne çıkar. 3 kişilik profesyonel mürettebatı eşsiz bir kiralama deneyimi sunmaktan gurur duyar.

M/S Holiday M ile yelken açın ve macera ile lüksün mükemmel dengesini arayan seçici gezginler arasında neden favori olduğunu keşfedin.`,
        shortDescription: "4 kamaralı zarif 26m gulet, nihai konfor için 2024 yılında yeni yenilenmiş.",
      },
    },
    features: [
      { icon: "ruler", label: "Uzunluk", value: "26m" },
      { icon: "users", label: "Misafir", value: "8" },
      { icon: "bed", label: "Kabin", value: "4" },
      { icon: "users-cog", label: "Mürettebat", value: "3" },
      { icon: "calendar", label: "Yapım Yılı", value: "2017" },
      { icon: "wrench", label: "Yenilenme", value: "2024" },
    ],
    amenities: [
      "Klima",
      "Jeneratör",
      "WiFi",
      "Akıllı TV",
      "Premium Ses Sistemi",
      "Su Yapıcı",
      "Şnorkel Ekipmanı",
      "Balıkçılık Ekipmanı",
      "Kano",
      "Kürek Sörfü",
      "Güneşlenme Minderleri",
      "Güverte Duşu",
      "Barbekü",
      "Espresso Makinesi",
    ],
    images: [
      { id: "hm-1", src: "/assets/images/yachts/holidayM/01.webp", alt: "M/S Holiday M Dış Görünüm", category: "exterior" },
      { id: "hm-2", src: "/assets/images/yachts/holidayM/02.webp", alt: "M/S Holiday M Güverte", category: "deck" },
      { id: "hm-3", src: "/assets/images/yachts/holidayM/03.webp", alt: "M/S Holiday M İç Mekan", category: "interior" },
      { id: "hm-4", src: "/assets/images/yachts/holidayM/07.jpg", alt: "M/S Holiday M Kabin", category: "cabin" },
      { id: "hm-5", src: "/assets/images/yachts/holidayM/08.jpg", alt: "M/S Holiday M Yemek Alanı", category: "interior" },
      { id: "hm-6", src: "/assets/images/yachts/holidayM/09.jpg", alt: "M/S Holiday M Salon", category: "interior" },
    ],
    thumbnail: "/assets/images/yachts/holidayM/01.webp",
    pricePerWeek: {
      low: 10000,
      mid: 13000,
      high: 17000,
    },
    currency: "EUR",
    available: true,
  },
];

export function getYachtBySlug(slug: string): Yacht | undefined {
  return yachts.find((yacht) => yacht.slug === slug);
}

export function getYachtById(id: string): Yacht | undefined {
  return yachts.find((yacht) => yacht.id === id);
}

export function getAllYachts(): Yacht[] {
  return yachts;
}

export function getAvailableYachts(): Yacht[] {
  return yachts.filter((yacht) => yacht.available);
}

export function getTranslatedYacht(
  yacht: Yacht,
  language: Language
): TranslatedYacht {
  const translation = yacht.translations?.[language] || yacht.translations?.tr;
  const { translations, ...rest } = yacht;

  if (translation) {
    return {
      ...rest,
      description: translation.description,
      shortDescription: translation.shortDescription,
    };
  }

  return rest as TranslatedYacht;
}
