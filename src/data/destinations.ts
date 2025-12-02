import { Language } from "@/contexts/LanguageContext";

export interface DestinationTranslation {
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  bestTime: string;
  idealFor: string[];
  keyAttractions: {
    name: string;
    description: string;
  }[];
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  image: string;
  thumbnail: string;
  relatedItineraries: string[];
  translations: { tr: DestinationTranslation };
}

export const destinations: Destination[] = [
  {
    id: "fethiye",
    slug: "fethiye",
    name: "Fethiye",
    image: "/assets/images/itineraries/fethiye.jpg",
    thumbnail: "/assets/images/itineraries/fethiye.jpg",
    relatedItineraries: [
      "fethiye-gocek-fethiye",
      "fethiye-kekova-fethiye",
      "fethiye-marmaris-fethiye",
    ],
    translations: {
      tr: {
        title: "Fethiye - Turkuaz Kıyısının Kapısı",
        description:
          "Türkiye'nin muhteşem Turkuaz Kıyısı boyunca Mavi Yolculuk maceranız için mükemmel başlangıç noktası olan büyüleyici liman kasabası Fethiye'yi keşfedin.",
        longDescription: `Fethiye, Türkiye'nin en güzel kıyı kasabalarından biri ve Mavi Yolculukların birinci sınıf kalkış noktasıdır. Çam kaplı dağların arka planına yaslanmış bu canlı liman kasabası, doğal güzellik, zengin tarih ve modern olanaklarla mükemmel bir karışım sunar.

Fethiye'nin doğal limanı, antik çağlarda Telmessos olarak bilinen yüzyıllardır denizcilik merkezi olmuştur. Bugün yüzlerce geleneksel Türk guletine ev sahipliği yaparak yat kiralama maceranız için ideal başlangıç noktası olmaktadır.

Çevredeki kıyı şeridi Akdeniz'in en muhteşem manzaralarından bazılarını sunar - kristal berraklığında sular, gizli koylar, antik kalıntılar ve bu bölgeyi yelken tutkunları arasında dünyaca ünlü yapan "12 Adalar" takımadası.

İster tenha plajlarda dinlenmek, ister kayalıklara oyulmuş antik Likya mezarlarını keşfetmek, ister sahildeki restoranlarda taze deniz ürünlerinin tadını çıkarmak isteyin, Fethiye unutulmaz bir deneyim sunar.`,
        highlights: [
          "Sakin sulara sahip korunaklı doğal liman",
          "Ünlü 12 Adalar'a açılan kapı",
          "Antik Likya kaya mezarları",
          "Canlı Eski Şehir ve balık pazarı",
          "Ölüdeniz Mavi Lagün'e yakın",
          "Mükemmel restoranlar ve gece hayatı",
        ],
        bestTime: "Mayıs - Ekim arası, Haziran ve Eylül ideal",
        idealFor: [
          "Çocuklu aileler",
          "İlk kez yat kiralayan misafirler",
          "Doğa severler",
          "Tarih meraklıları",
          "Plaj severler",
        ],
        keyAttractions: [
          {
            name: "Ölüdeniz Mavi Lagün",
            description:
              "Türkiye'nin en çok fotoğraflanan plajı, muhteşem turkuaz suları ve yüzme için mükemmel korunaklı lagünü ile.",
          },
          {
            name: "12 Adalar Turu",
            description:
              "Her biri benzersiz yüzme ve şnorkel noktaları sunan bozulmamış adalar ve koylardan geçen klasik günlük yelken rotası.",
          },
          {
            name: "Kelebek Vadisi",
            description:
              "Sadece tekneyle ulaşılabilen, çok sayıda kelebek türüne ve güzel bir şelaleye ev sahipliği yapan muhteşem kanyon.",
          },
          {
            name: "Kayaköy Hayalet Köyü",
            description:
              "Şimdi UNESCO mirası olan, büyüleyici tarihi ve muhteşem manzaraları sunan atmosferik terk edilmiş Rum köyü.",
          },
          {
            name: "Likya Kaya Mezarları",
            description:
              "MÖ 350'ye dayanan, kasabaya bakan kayalıklara doğrudan oyulmuş antik mezarlar.",
          },
        ],
      },
    },
  },
  {
    id: "gocek",
    slug: "gocek",
    name: "Göcek",
    image: "/assets/images/yachts/holiday6/05.webp",
    thumbnail: "/assets/images/yachts/holiday6/05.webp",
    relatedItineraries: ["fethiye-gocek-fethiye"],
    translations: {
      tr: {
        title: "Göcek - Özel Yatçılık Cenneti",
        description:
          "12 ada ve sayısız tenha koy ile çevrili, seçici yat kiralama misafirleri için mükemmel üst düzey marina köyü Göcek'i deneyimleyin.",
        longDescription: `Göcek, Türkiye'de lüks yatçılığın simgesi haline gelmiş büyüleyici bir köydür. Daha kalabalık turistik destinasyonların aksine, Göcek dünya standartlarında marina tesisleri geliştirirken otantik karakterini korumuştur.

Çam ormanlarıyla kaplı dağlarla çevrili ve ünlü 12 Adası ile Göcek Körfezi'ne bakan bu konum, belki de Türk kıyılarındaki en korunaklı ve el değmemiş yelken sularını sunmaktadır. Bölge gelişmeden korunmuş olup doğal güzelliğin bozulmamış kalmasını sağlamaktadır.

Köyün kendisi kompakt ve yürünebilir, kafeler, restoranlar ve butik mağazalarla kaplı hoş bir sahil promenadına sahiptir. Altı marina yatçılık topluluğuna hizmet vermekte, basitten ultra lükse kadar çeşitlilik sunmaktadır.

Göcek, özellikle sakin sularını, mükemmel tesislerini ve Akdeniz'in en güzel demir yerlerinden bazılarına kolay erişimini takdir eden deneyimli denizciler arasında popülerdir.`,
        highlights: [
          "Altı dünya standartlarında marina",
          "Yelken için ideal korunaklı sular",
          "Özel, üst düzey atmosfer",
          "12 bozulmamış ada ile çevrili",
          "Mükemmel sahil yemekleri",
          "Dalyan ve Kaunos'a açılan kapı",
        ],
        bestTime: "Nisan - Kasım arası, Mayıs - Ekim arası mükemmel koşullar",
        idealFor: [
          "Deneyimli denizciler",
          "Lüks arayanlar",
          "Çiftler ve balayı çiftleri",
          "Mahremiyet odaklı gezginler",
          "Yelken tutkunları",
        ],
        keyAttractions: [
          {
            name: "Göcek Adaları",
            description:
              "Kalabalıktan uzak tenha koylar, kristal sular ve mükemmel yüzme noktaları sunan bir ada koleksiyonu.",
          },
          {
            name: "Tersane Adası",
            description:
              "Antik tersane kalıntıları ve plaj restoranı ile bölgenin en popüler yüzme koylarından birine sahip.",
          },
          {
            name: "Bedri Rahmi Koyu",
            description:
              "Ünlü Türk şair ve ressamın adını taşıyan bu güzel koy, bir kayanın üzerindeki balık resmini sergiler.",
          },
          {
            name: "Kleopatra Hamamı",
            description:
              "Efsaneye göre Kleopatra'nın ziyaret ettiği kristal berraklığında sulara sahip muhteşem doğal koy.",
          },
          {
            name: "Sarsala Koyu",
            description:
              "Dramatik uçurumlar ve çam ormanlarıyla çevrili muhteşem fiyort benzeri girinti.",
          },
        ],
      },
    },
  },
  {
    id: "marmaris",
    slug: "marmaris",
    name: "Marmaris",
    image: "/assets/images/itineraries/marmaris.jpg",
    thumbnail: "/assets/images/itineraries/marmaris.jpg",
    relatedItineraries: ["fethiye-marmaris-fethiye"],
    translations: {
      tr: {
        title: "Marmaris - Ege'nin Akdeniz ile Buluştuğu Yer",
        description:
          "Ege ve Akdeniz'in buluştuğu muhteşem bir körfezde yer alan, çeşitli yelken deneyimleri sunan canlı kıyı şehri Marmaris'i keşfedin.",
        longDescription: `Marmaris, Akdeniz'in en dramatik doğal limanlarından birinde yer alır; ormanlık dağların mükemmel hilal şeklinde bir körfezde denizle buluştuğu yer. Ege Denizi'nin Akdeniz ile buluştuğu bu stratejik konum, Marmaris'i antik çağlardan beri denizcilik merkezi yapmıştır.

Bugün Marmaris, herkese hitap eden kozmopolit bir tatil beldesidir - hareketli marinadan ve canlı bar caddesinden sadece birkaç dakika uzaklıktaki sessiz koylara ve doğa koruma alanlarına kadar. Şehir, etkileyici bir ortaçağ kalesi, büyüleyici eski mahalle ve Türkiye'nin en büyük yat marinalarından birine sahiptir.

Marmaris'i yat kiralamaları için özellikle özel kılan, birden fazla yelken bölgesine açılan kapı konumudur. Dramatik manzaralar ve antik kalıntılar için kuzeye Gökova Körfezi'ne gidin, güneye Datça'ya ve Yunan adalarına doğru yelken açın veya Fethiye yönündeki kıyı şeridini keşfedin.

Çevredeki kıyı şeridi, çam kaplı yarımadalardan kumlu plajlara, antik şehirlerden modern tatil beldelerine kadar inanılmaz çeşitlilik sunar.`,
        highlights: [
          "Muhteşem doğal liman",
          "Ege ve Akdeniz'e açılan kapı",
          "Tarihi kale ve eski şehir",
          "Büyük modern marina",
          "Yunan adalarına erişim",
          "Canlı gece hayatı ve yemek",
        ],
        bestTime: "Mayıs - Ekim arası, Haziran - Eylül arası en sıcak sular",
        idealFor: [
          "Çeşitlilik arayan gruplar",
          "Tarih ve kültür severler",
          "Aktif gezginler",
          "Yunan adası seçenekleri isteyenler",
          "Gece hayatı tutkunları",
        ],
        keyAttractions: [
          {
            name: "Marmaris Kalesi",
            description:
              "Panoramik manzaralar ve mükemmel bir arkeoloji müzesi sunan 16. yüzyıldan kalma Osmanlı kalesi.",
          },
          {
            name: "Datça Yarımadası",
            description:
              "Antik Knidos, badem bahçeleri ve Türkiye'nin en güzel plajlarından bazılarına sahip el değmemiş yarımada.",
          },
          {
            name: "Sedir Adası (Kleopatra Adası)",
            description:
              "Efsaneye göre Marcus Antonius'un Kleopatra için Mısır'dan getirdiği altın kumdan benzersiz bir plaja sahip.",
          },
          {
            name: "Turunç Koyu",
            description:
              "Marmaris'e kısa bir yelken mesafesinde, güzel bir plaj ve kristal berraklığında sulara sahip sevimli balıkçı köyü.",
          },
          {
            name: "Cennet Adası",
            description:
              "Körfezde plaj kulüpleri ve mükemmel şnorkel olanakları sunan popüler yüzme noktası.",
          },
        ],
      },
    },
  },
  {
    id: "bodrum",
    slug: "bodrum",
    name: "Bodrum",
    image: "/assets/images/itineraries/bodrum.jpg",
    thumbnail: "/assets/images/itineraries/bodrum.jpg",
    relatedItineraries: ["bodrum-gokova-bodrum"],
    translations: {
      tr: {
        title: "Bodrum - Antik Tarih ve Modern Lüksün Buluşması",
        description:
          "Efsanevi antik Halikarnas olan, şimdi zengin tarihi kozmopolit Akdeniz yaşam tarzıyla harmanlayan sofistike tatil beldesi Bodrum'u keşfedin.",
        longDescription: `Bodrum, antik Halikarnas, Dünyanın Yedi Harikası'ndan biri olan Mozole'nin bir zamanlar yükseldiği yerdir. Bugün Ege kıyısındaki bu hikaye dolu şehir, olağanüstü mirasını korurken Türkiye'nin en göz alıcı tatil destinasyonu olarak kendini yeniden keşfetti.

Şehir, antik Mozole'nin taşları kullanılarak St. John Şövalyeleri tarafından inşa edilen muhteşem ortaçağ St. Peter Kalesi ile tanımlanır. Kale şimdi dünyanın en iyi sualtı arkeoloji müzelerinden birine ev sahipliği yapmaktadır.

Bodrum uzun süredir Türkiye'nin sanatsal ve entelektüel elitinin çekim merkezi olmuş, bu da ona benzersiz sofistike bir atmosfer kazandırmıştır. Şehir mükemmel restoranlar, şık butikler ve ünlü gece hayatı sahnesi sunarken, çevredeki yarımada daha sessiz köyler, antik kalıntılar ve güzel plajlar sunmaktadır.

Yat kiralamaları için Bodrum, muhteşem Gökova Körfezi'ne ve benzersiz olarak yakın Yunan adaları Kos, Rodos ve Symi'ye kolay erişim sağlayarak uluslararası yelken rotaları için ideal kılmaktadır.`,
        highlights: [
          "Tarihi St. Peter Kalesi",
          "Yunan adalarına açılan kapı",
          "Sofistike marina ortamı",
          "Ünlü Bodrum gece hayatı",
          "Gökova Körfezi'ne erişim",
          "Zengin antik tarih",
        ],
        bestTime: "Mayıs - Ekim arası, Haziran - Eylül arası en iyi hava",
        idealFor: [
          "Tarih meraklıları",
          "Yunan adaları gezginleri",
          "Gece hayatı severler",
          "Kültür arayanlar",
          "Sofistike gezginler",
        ],
        keyAttractions: [
          {
            name: "St. Peter Kalesi",
            description:
              "Antik gemi enkazı eserleriyle Sualtı Arkeoloji Müzesi'ne ev sahipliği yapan muhteşem haçlı kalesi.",
          },
          {
            name: "Gökova Körfezi",
            description:
              "Dramatik manzaralar, antik kalıntılar ve mükemmel yüzme koyları sunan muhteşem yelken destinasyonu.",
          },
          {
            name: "Yunan Adaları",
            description:
              "Kos'a kolay günlük yelken veya uluslararası yelken maceraları için Rodos ve Symi'ye daha uzun yolculuklar.",
          },
          {
            name: "Türkbükü",
            description:
              "Ünlülerin buluşma noktası olan ve mükemmel plaj kulüplerine sahip özel koy köyü.",
          },
          {
            name: "Gümüşlük (Myndos)",
            description:
              "Antik Myndos üzerine kurulmuş, gün batımı balık restoranlarıyla ünlü büyüleyici sanatçı köyü.",
          },
        ],
      },
    },
  },
  {
    id: "kekova",
    slug: "kekova",
    name: "Kekova",
    image: "/assets/images/itineraries/kekova.jpg",
    thumbnail: "/assets/images/itineraries/kekova.jpg",
    relatedItineraries: ["fethiye-kekova-fethiye"],
    translations: {
      tr: {
        title: "Kekova - Batık Şehir Gizemi",
        description:
          "Ünlü Batık Şehir'e, antik Likya kalıntılarına ve Türkiye'nin en bozulmamış ve korunaklı yelken sularından bazılarına ev sahipliği yapan Kekova'yı ziyaret edin.",
        longDescription: `Kekova, Türkiye'nin en büyülü destinasyonlarından biridir - olağanüstü doğal güzellik ve dikkat çekici Batık Şehir merkezli büyüleyici antik tarih bölgesi. Bu korumalı deniz alanı, Akdeniz'in en berrak sularından ve en atmosferik demir yerlerinden bazılarını sunmaktadır.

Batık Şehir, MS 2. yüzyılda depremlerle kısmen su altında kalmış, antik binalar, merdivenler ve liman duvarlarını kristal berraklığında suların altında görünür bırakmıştır. Alan koruma altındadır ve sadece teknelerden görülebilir, bu da yat kiralamasını bu harikayı deneyimlemenin mükemmel yolu yapmaktadır.

Kekova Adası'nın karşısında, ortaçağ kalesiyle taçlanmış ve sadece tekneyle ulaşılabilen resim gibi Kaleköy köyü (antik Simena) yer almaktadır. Zaman burada durmuş gibi görünüyor - araba yok, yol yok, sadece antik duvarlar, basit pansiyonlar ve dost canlısı yerel halk.

Çevredeki kıyı şeridi, etkileyici lahitler, kaya mezarları ve antik limanlar dahil çok sayıda Likya arkeolojik alanına ev sahipliği yaparak bu bölgeyi tarih severler ve doğa tutkunları için cennet haline getirmektedir.`,
        highlights: [
          "Ünlü Batık Şehir kalıntıları",
          "Kristal berraklığında korunaklı sular",
          "Arabasız Kaleköy köyü",
          "Antik Likya kalıntıları",
          "Muhteşem şnorkel",
          "Uzak ve bozulmamış",
        ],
        bestTime: "Mayıs - Ekim arası, Eylül büyüleyici ışık sunar",
        idealFor: [
          "Tarih ve arkeoloji severler",
          "Şnorkel tutkunları",
          "Fotoğrafçılar",
          "Huzur arayanlar",
          "Macera arayanlar",
        ],
        keyAttractions: [
          {
            name: "Batık Şehir",
            description:
              "Depremlerle kısmen su altında kalmış antik Likya şehri, kristal berraklığında suların altında görünen kalıntılarla.",
          },
          {
            name: "Kaleköy (Simena)",
            description:
              "Ortaçağ kalesi, Likya mezarları ve atmosferik sahil restoranlarına sahip büyüleyici arabasız köy.",
          },
          {
            name: "Üçağız",
            description:
              "Likya lahitleri ve antik liman kalıntılarıyla çevrili huzurlu balıkçı köyü.",
          },
          {
            name: "Tersane Koyu",
            description:
              "Antik tersane kalıntıları ve mükemmel yüzme imkanı sunan muhteşem demir yeri.",
          },
          {
            name: "Gökkaya Koyu",
            description:
              "Derin mavi suları ve dramatik kaya oluşumlarıyla muhteşem korsan koyu.",
          },
        ],
      },
    },
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((dest) => dest.slug === slug);
}

export function getAllDestinations(): Destination[] {
  return destinations;
}

// Helper function to get translated destination data
export function getTranslatedDestination(
  destination: Destination,
  language: Language
): Destination & DestinationTranslation {
  const translation = destination.translations[language] || destination.translations.tr;
  return {
    ...destination,
    ...translation,
  };
}
