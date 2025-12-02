import { Language } from "@/contexts/LanguageContext";

export interface DaySchedule {
  day: number;
  title: string;
  description: string;
  port?: string;
  activities: string[];
}

export interface ItineraryTranslation {
  name: string;
  description: string;
  highlights: string[];
  dailySchedule: DaySchedule[];
}

export interface Itinerary {
  id: string;
  slug: string;
  duration: number;
  startPort: string;
  endPort: string;
  thumbnail: string;
  images: string[];
  recommendedYachts: string[];
  translations: { tr: ItineraryTranslation };
}

export interface TranslatedItinerary extends Omit<Itinerary, 'translations'>, ItineraryTranslation {}

export const itineraries: Itinerary[] = [
  {
    id: "fethiye-gocek",
    slug: "fethiye-gocek-fethiye",
    duration: 7,
    startPort: "Fethiye",
    endPort: "Fethiye",
    thumbnail: "/assets/images/itineraries/fethiye.jpg",
    images: ["/assets/images/itineraries/fethiye.jpg"],
    recommendedYachts: ["holiday10", "holiday5", "holiday6", "holidaym"],
    translations: {
      tr: {
        name: "Fethiye - Göcek - Fethiye",
        description: "Bu klasik 7 günlük rotada Turkuaz Kıyısı'nın muhteşem güzelliğini keşfedin. Fethiye'nin canlı limanından Göcek'in tenha koylarına, kristal berraklığında suları, antik kalıntıları ve otantik Türk misafirperverliğini deneyimleyin.",
        highlights: [
          "Kelebekler Vadisi - Gizli bir cennet",
          "Ölüdeniz Mavi Lagünü",
          "Göcek 12 Adaları",
          "Antik Kayaköy şehri",
          "Gemiler Adası",
          "Geleneksel Türk köyleri",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye'den Kalkış",
            port: "Fethiye",
            description: "Fethiye Limanı'nda guletinize binin. Hoş geldin içeceği ve güvenlik brifinginden sonra Tersane Adası'na doğru yelken açıyoruz.",
            activities: ["Gemiye hoş geldiniz", "Güvertede öğle yemeği", "Tersane Koyu'nda yüzme", "Tersane Adası'nda geceleme"],
          },
          {
            day: 2,
            title: "Göcek Koyları",
            port: "Göcek",
            description: "Ünlü 12 Adalar arasında seyir yapın, yüzme ve şnorkel için tenha koylarda durun.",
            activities: ["Kahvaltılı seyir", "Yassıca Adaları", "Yüzme ve şnorkel", "Güvertede barbekü akşam yemeği"],
          },
          {
            day: 3,
            title: "Mezar Koyu & Kleopatra Hamamı",
            port: "Mezar Koyu",
            description: "Gizemli Likya kaya mezarlarını ziyaret edin ve Kleopatra Hamamı'nın şifalı sularında yüzün.",
            activities: ["Likya mezarlarını keşfet", "Kleopatra Hamamı", "Mezar Koyu'nda öğle yemeği", "Gün batımı seyri"],
          },
          {
            day: 4,
            title: "Kelebekler Vadisi",
            port: "Kelebekler Vadisi",
            description: "Yüzlerce kelebek türüne ev sahipliği yapan nefes kesici Kelebekler Vadisi'nde demirleyin.",
            activities: ["Şelaleye yürüyüş", "Plaj zamanı", "Şnorkel", "Kelebekler Vadisi'nde geceleme"],
          },
          {
            day: 5,
            title: "Ölüdeniz Mavi Lagünü",
            port: "Ölüdeniz",
            description: "Muhteşem turkuaz sularıyla dünyaca ünlü Ölüdeniz Mavi Lagünü'nü ziyaret edin.",
            activities: ["Mavi Lagün ziyareti", "İsteğe bağlı yamaç paraşütü", "Plaj kulüpleri", "Manzara fotoğrafçılığı"],
          },
          {
            day: 6,
            title: "Gemiler Adası",
            port: "Gemiler",
            description: "Aziz Nikolas Adası'ndaki Bizans kiliselerinin kalıntılarını keşfedin.",
            activities: ["Ada keşfi", "Tarihi tur", "Yüzme", "Kaptan yemeği"],
          },
          {
            day: 7,
            title: "Fethiye'ye Dönüş",
            port: "Fethiye",
            description: "Son sabah yüzmesi ve Fethiye Limanı'na keyifli dönüş.",
            activities: ["Veda kahvaltısı", "Son yüzme", "Fethiye'ye dönüş", "10:00'da gemiden iniş"],
          },
        ],
      },
    },
  },
  {
    id: "fethiye-kekova",
    slug: "fethiye-kekova-fethiye",
    duration: 7,
    startPort: "Fethiye",
    endPort: "Fethiye",
    thumbnail: "/assets/images/itineraries/kekova.jpg",
    images: ["/assets/images/itineraries/kekova.jpg"],
    recommendedYachts: ["holiday10", "holiday5"],
    translations: {
      tr: {
        name: "Fethiye - Kekova - Fethiye",
        description: "Batık şehri ve dramatik kıyı şeridiyle ünlü büyüleyici Kekova bölgesine doğuya yolculuk yapın. Bu rota doğal güzelliği zengin tarihi mirasla birleştiriyor.",
        highlights: [
          "Kekova Batık Şehri",
          "Simena Kalesi",
          "Kaş eski şehir",
          "Üçağız balıkçı köyü",
          "Patara Plajı",
          "Kalkan limanı",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye'den Kalkan'a",
            port: "Kalkan",
            description: "Fethiye'den ayrılın ve şirin Kalkan kasabasına doğuya yelken açın.",
            activities: ["Hoş geldin öğle yemeği", "Manzaralı seyir", "Kalkan limanında akşam yemeği", "Kasaba keşfi"],
          },
          {
            day: 2,
            title: "Kaş",
            port: "Kaş",
            description: "Dalış ve sanatsal atmosferiyle tanınan bohem Kaş kasabasını ziyaret edin.",
            activities: ["İsteğe bağlı dalış", "Kasaba keşfi", "Sanat galerileri", "Deniz ürünleri akşam yemeği"],
          },
          {
            day: 3,
            title: "Kekova Batık Şehri",
            port: "Kekova",
            description: "Kristal berraklığında sular arasından görülebilen gizemli batık şehrin üzerinden geçin.",
            activities: ["Batık şehir turu", "Deniz kayağı", "Yüzme", "Yıldız gözlemi"],
          },
          {
            day: 4,
            title: "Simena & Üçağız",
            port: "Simena",
            description: "Simena Kalesi'ne tırmanın ve geleneksel Üçağız köyünü keşfedin.",
            activities: ["Kale yürüyüşü", "Köy ziyareti", "Geleneksel öğle yemeği", "Dinlenme"],
          },
          {
            day: 5,
            title: "Demre Üzerinden Dönüş",
            port: "Demre",
            description: "Antik Myra şehrine ve Aziz Nikolas Kilisesi'ne isteğe bağlı ziyaret.",
            activities: ["Tarihi gezi", "Yüzme molaları", "Barbekü öğle yemeği", "Akşam seyri"],
          },
          {
            day: 6,
            title: "Patara & Kelebekler Vadisi",
            port: "Patara",
            description: "Türkiye'nin en uzun plajını ziyaret edin ve Kelebekler Vadisi'ne dönün.",
            activities: ["Patara Plajı", "Yüzme", "Kelebekler Vadisi", "Kaptanın veda yemeği"],
          },
          {
            day: 7,
            title: "Fethiye'ye Dönüş",
            port: "Fethiye",
            description: "Fethiye Limanı'na keyifli geri dönüş.",
            activities: ["Kahvaltı", "Son yüzme", "Fethiye varışı", "Gemiden iniş"],
          },
        ],
      },
    },
  },
  {
    id: "fethiye-marmaris",
    slug: "fethiye-marmaris-fethiye",
    duration: 7,
    startPort: "Fethiye",
    endPort: "Fethiye",
    thumbnail: "/assets/images/itineraries/marmaris.jpg",
    images: ["/assets/images/itineraries/marmaris.jpg"],
    recommendedYachts: ["holiday10", "holiday6", "holidaym"],
    translations: {
      tr: {
        name: "Fethiye - Marmaris - Fethiye",
        description: "Fethiye'den Marmaris'e batı Turkuaz Kıyısı'nda yelken açın, çam ağaçlarıyla kaplı koyları keşfedin ve tarihi tatil beldesini ziyaret edin.",
        highlights: [
          "Marmaris Kalesi",
          "Ekincik Koyu",
          "Dalyan Nehri",
          "İztuzu Kaplumbağa Plajı",
          "Sarsala Koyu",
          "Tarihi Marmaris",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye'den Göcek'e",
            port: "Göcek",
            description: "Türkiye'nin önde gelen yat destinasyonu Göcek'e kısa seyir.",
            activities: ["Gemiye biniş", "Hoş geldin öğle yemeği", "Göcek keşfi", "Marina akşam yemeği"],
          },
          {
            day: 2,
            title: "Ekincik Koyu",
            port: "Ekincik",
            description: "Dalyan'ın kapısı olan güzel Ekincik Koyu'na seyir.",
            activities: ["Manzaralı seyir", "Yüzme", "İsteğe bağlı Dalyan turu", "Plajda barbekü"],
          },
          {
            day: 3,
            title: "Dalyan & Kaplumbağa Plajı",
            port: "Dalyan",
            description: "Dalyan'a nehir gezisi, çamur banyoları ve İztuzu Kaplumbağa Plajı.",
            activities: ["Nehir turu", "Çamur banyoları", "Kaplumbağa Plajı", "Antik Kaunos"],
          },
          {
            day: 4,
            title: "Marmaris",
            port: "Marmaris",
            description: "Canlı tatil beldesi Marmaris'e varış.",
            activities: ["Limana varış", "Kale ziyareti", "Çarşı alışverişi", "Gece hayatı"],
          },
          {
            day: 5,
            title: "Sarsala Koyu",
            port: "Sarsala",
            description: "El değmemiş Sarsala Koyu üzerinden dönüş.",
            activities: ["Sabah yüzmesi", "Yelken", "Sarsala'da dinlenme", "Gün batımı yemeği"],
          },
          {
            day: 6,
            title: "Göcek Adaları",
            port: "Göcek",
            description: "Göcek'in güzel 12 Adasını daha fazla keşfedin.",
            activities: ["Ada gezisi", "Şnorkel", "Plaj zamanı", "Kaptan yemeği"],
          },
          {
            day: 7,
            title: "Fethiye'ye Dönüş",
            port: "Fethiye",
            description: "Son sabah ve Fethiye'ye dönüş.",
            activities: ["Kahvaltı", "Yüzme", "Fethiye varışı", "Gemiden iniş"],
          },
        ],
      },
    },
  },
  {
    id: "bodrum-gokova",
    slug: "bodrum-gokova-bodrum",
    duration: 7,
    startPort: "Bodrum",
    endPort: "Bodrum",
    thumbnail: "/assets/images/itineraries/bodrum.jpg",
    images: ["/assets/images/itineraries/bodrum.jpg"],
    recommendedYachts: ["holiday10", "holiday5", "holidaym"],
    translations: {
      tr: {
        name: "Bodrum - Gökova - Bodrum",
        description: "Kozmopolit Bodrum'dan dramatik Gökova Körfezi'ni keşfedin. Bu rota, sofistike gece hayatı ve el değmemiş doğal koyların mükemmel bir karışımını sunuyor.",
        highlights: [
          "Bodrum Kalesi",
          "Gökova Körfezi",
          "Sedir Adası (Kleopatra Plajı)",
          "İngiliz Limanı",
          "Amazon Koyu",
          "Yedi Adalar",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Bodrum'dan Kalkış",
            port: "Bodrum",
            description: "Bodrum'da gemiye binin ve Gökova Körfezi'ne yelken açın.",
            activities: ["Bodrum limanı", "Gemiye hoş geldiniz", "İlk koy yüzmesi", "Güvertede akşam yemeği"],
          },
          {
            day: 2,
            title: "Orak Adası",
            port: "Orak",
            description: "Kristal berraklığında sularıyla muhteşem Orak Adası'nı ziyaret edin.",
            activities: ["Yüzme", "Şnorkel", "Plaj keşfi", "Yıldız gözlemi"],
          },
          {
            day: 3,
            title: "Sedir Adası",
            port: "Sedir",
            description: "Eşsiz altın kumuyla ünlü Kleopatra Plajı'nda yürüyün.",
            activities: ["Kleopatra Plajı", "Antik tiyatro", "Yüzme", "Tarih turu"],
          },
          {
            day: 4,
            title: "İngiliz Limanı",
            port: "İngiliz Limanı",
            description: "Çam ormanlarıyla çevrili huzurlu İngiliz Limanı'nda demirleyin.",
            activities: ["Yürüyüş parkurları", "Yüzme", "Kano", "Orman pikniği"],
          },
          {
            day: 5,
            title: "Amazon Koyu",
            port: "Amazon",
            description: "Sadece küçük teknelerle ulaşılabilen gizemli Amazon Koyu'nu keşfedin.",
            activities: ["Koy keşfi", "Yüzme", "Doğa izleme", "Deniz ürünleri akşam yemeği"],
          },
          {
            day: 6,
            title: "Yedi Adalar",
            port: "Yedi Adalar",
            description: "Güzel Yedi Adalar bölgesinde ada gezisi yapın.",
            activities: ["Ada gezisi", "Şnorkel", "Plaj barbekü", "Kaptan yemeği"],
          },
          {
            day: 7,
            title: "Bodrum'a Dönüş",
            port: "Bodrum",
            description: "Bodrum limanına dönüş.",
            activities: ["Son yüzme", "Kahvaltılı seyir", "Bodrum varışı", "Gemiden iniş"],
          },
        ],
      },
    },
  },
];

export function getTranslatedItinerary(
  itinerary: Itinerary,
  language: Language
): TranslatedItinerary {
  const translation = itinerary.translations[language] || itinerary.translations.tr;
  const { translations, ...rest } = itinerary;
  return { ...rest, ...translation };
}

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((itinerary) => itinerary.slug === slug);
}

export function getItineraryById(id: string): Itinerary | undefined {
  return itineraries.find((itinerary) => itinerary.id === id);
}

export function getAllItineraries(): Itinerary[] {
  return itineraries;
}
