import { Language } from "@/contexts/LanguageContext";

export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  image: string;
  category: "destinations" | "tips" | "guides" | "news";
  author: string;
  publishedAt: string;
  readTime: number;
  translations: { tr: BlogPostTranslation };
}

export interface TranslatedBlogPost extends BlogPost, BlogPostTranslation {}

export const blogPosts: BlogPost[] = [
  {
    id: "best-time-blue-cruise-turkey",
    slug: "best-time-for-blue-cruise-turkey",
    image: "/assets/images/itineraries/kekova.jpg",
    category: "guides",
    author: "Mavi Yolculuk Gezisi Ekibi",
    publishedAt: "2024-11-15",
    readTime: 5,
    translations: {
      tr: {
        title: "Türkiye'de Mavi Yolculuk İçin En İyi Zaman: 2025 Rehberi",
        excerpt:
          "Türkiye'nin Turkuaz Kıyısı'nda yelken açmak için en uygun ayları keşfedin. Hava koşullarından kalabalık seviyelerine kadar ideal yat kiralama planınız için bilmeniz gereken her şeyi ele alıyoruz.",
        content: `
## Türkiye'de Mavi Yolculuk İçin En İyi Zaman Ne Zaman?

Türk kıyıları Mayıs'tan Ekim'e kadar muhteşem yelken koşulları sunar, ancak her ayın kendine özgü avantajları vardır.

### Yüksek Sezon: Temmuz ve Ağustos

**Hava:** Sıcak ve güneşli, 30-35°C hava sıcaklığı, 25-28°C su sıcaklığı
**Artıları:** Mükemmel yüzme koşulları, en uzun günler, canlı gece hayatı
**Eksileri:** En kalabalık dönem, en yüksek fiyatlar, popüler koylar yoğun olabilir

Bu dönem okul çağındaki çocuklu aileler ve sıcak havayı ve sosyal ortamları sevenler için idealdir.

### Ara Sezon: Haziran ve Eylül

**Hava:** Ilık ve keyifli, 25-30°C hava, 22-25°C su
**Artıları:** Daha az kalabalık, uygun fiyatlar, konforlu sıcaklıklar
**Eksileri:** Haziran başında su biraz daha serin olabilir

Deneyimli denizcilerin çoğu bu ayları en iyi dönem olarak değerlendiriyor - yoğun sezon kalabalığı olmadan mükemmel hava koşullarının tadını çıkarırsınız.

### Erken/Geç Sezon: Mayıs ve Ekim

**Hava:** Ilıman, 20-25°C hava, 18-22°C su
**Artıları:** En düşük fiyatlar, boş koylar, yeşil manzaralar
**Eksileri:** Akşamları serin, ara sıra yağmur, daha kısa günler

Huzur arayanlar ve en iyi fiyat-performans oranını isteyenler için mükemmel.

## Önerimiz

İlk kez gelenler için **Haziran başı veya Eylül ortası** öneriyoruz. Şunların tadını çıkaracaksınız:
- Ilık ama bunaltıcı olmayan sıcaklıklar
- Sakin, kristal berraklığında sular
- En iyi demir yerlerinde uygunluk
- Yüksek sezonda daha iyi fiyatlar

## En İyi Seçim İçin Erken Rezervasyon Yapın

Popüler yatlar yaz tarihleri için 4-6 ay önceden rezerve edilir. Tercih ettiğiniz yat ve güzergahı güvence altına almak için bizimle erken iletişime geçin.
        `,
        tags: ["mavi yolculuk", "türkiye", "en iyi zaman", "hava", "planlama"],
      },
    },
  },
  {
    id: "fethiye-vs-bodrum",
    slug: "fethiye-vs-bodrum-which-to-choose",
    image: "/assets/images/itineraries/fethiye.jpg",
    category: "destinations",
    author: "Mavi Yolculuk Gezisi Ekibi",
    publishedAt: "2024-10-28",
    readTime: 6,
    translations: {
      tr: {
        title: "Fethiye vs Bodrum: Hangi Türk Yelken Destinasyonu Size Uygun?",
        excerpt:
          "Türkiye'nin en popüler iki yat kiralama destinasyonunu karşılaştırıyoruz. Mükemmel mavi yolculuk başlangıç noktanızı seçmek için her bölgenin benzersiz özelliklerini keşfedin.",
        content: `
## Fethiye vs Bodrum: Kapsamlı Karşılaştırma

Hem Fethiye hem de Bodrum dünya standartlarında yelken imkanı sunar, ancak farklı tercihlere hitap ederler. İşte aralarında seçim yapmanız için içeriden bir rehber.

### Fethiye Bölgesi

**En Uygun:** Doğa severler, aileler, dinlenme arayanlar

**Öne Çıkanlar:**
- Ölüdeniz Mavi Lagünü - Türkiye'nin en çok fotoğraflanan plajı
- Kelebekler Vadisi - El değmemiş doğa koruma alanı
- 12 Adalar Turu - Klasik günlük yelken rotası
- Göcek - Korunaklı koyları olan lüks marina kasabası
- Kekova - Batık şehir ve antik kalıntılar

**Karakteri:** Daha sakin, doğal güzellik, korunaklı sular, ilk kez yelken açanlar için mükemmel

### Bodrum Bölgesi

**En Uygun:** Tarih meraklıları, gece hayatı severler, Yunan adalarına gitmek isteyenler

**Öne Çıkanlar:**
- Bodrum Kalesi - Etkileyici Haçlı kalesi
- Yunan Adaları - Kos, Rodos, Symi'ye kolay yelken
- Türkbükü - Ünlülerin buluşma noktası
- Gümüşlük - Şirin balıkçı köyü
- Deniz manzaralı antik tiyatro

**Karakteri:** Daha kozmopolit, tarihi mekanlar, açık sular, daha canlı atmosfer

### Hangisini Seçmelisiniz?

**Fethiye'yi seçin eğer istiyorsanız:**
- Daha sakin, daha korunaklı sular
- Doğal güzellik ve yüzme odaklı tatil
- Aile dostu atmosfer
- En iyi fiyat-performans oranı

**Bodrum'u seçin eğer istiyorsanız:**
- Uluslararası Yunan adası gezileri
- Tarihi mekanlar ve kültür
- Canlı gece hayatı seçenekleri
- Ünlü marina sahnesi

### Bizim Değerlendirmemiz

Rahatlama ve doğal güzelliğe odaklanan klasik bir Türk Mavi Yolculuğu için **Fethiye'yi yenmek zor**. Filomuzu burada konuşlandırmamızın nedeni bu - muhteşem manzara, korunaklı demirleme yerleri ve otantik Türk misafirperverliği kombinasyonu mükemmel bir yelken tatili yaratıyor.

Türkiye'yi Yunan adalarıyla birleştirmek isteyenler veya daha kozmopolit bir deneyim arayanlar için Bodrum mükemmel bir seçim.
        `,
        tags: ["fethiye", "bodrum", "karşılaştırma", "destinasyonlar", "türkiye"],
      },
    },
  },
  {
    id: "what-to-pack-yacht-charter",
    slug: "what-to-pack-for-yacht-charter-turkey",
    image: "/assets/images/about/about-h4.jpg",
    category: "tips",
    author: "Mavi Yolculuk Gezisi Ekibi",
    publishedAt: "2024-10-15",
    readTime: 4,
    translations: {
      tr: {
        title: "Yat Kiralama İçin Ne Paketlemeli: Eksiksiz Paketleme Listesi",
        excerpt:
          "Türkiye'de gulet turu için temel paketleme rehberimiz. Kıyafetten cihazlara kadar mükemmel yelken tatili için ihtiyacınız olan her şey.",
        content: `
## Temel Yat Kiralama Paketleme Listesi

Yat kiralama için bavul hazırlamak normal bir tatilden farklıdır. Alan sınırlıdır ve zamanınızın çoğunu mayo ile geçireceksiniz. İşte denenmiş ve test edilmiş paketleme rehberimiz.

### Altın Kurallar

1. **Yumuşak çantalar kullanın** - Sert valizler kabin deposuna sığmaz
2. **Hafif paketleyin** - Düşündüğünüzden daha azına ihtiyacınız olacak
3. **Kat kat giyin** - Akşamları denizde serin olabilir
4. **Sadece iz bırakmayan tabanlar** - Tik güverteyi korur

### Temel Kıyafetler

**Gündüz:**
- 3-4 mayo (kurumaları için zamana ihtiyaçları var)
- Hafif örtüler ve parolar
- Şort ve tişörtler
- Hafif uzun kollu gömlek (güneş koruması)

**Akşam:**
- 2-3 günlük akşam kıyafeti
- Hafif hırka veya ceket
- Marina yemekleri için bir şık-günlük kıyafet

**Ayakkabı:**
- İz bırakmayan beyaz tabanlı güverte ayakkabısı
- Kayalık plajlar için deniz ayakkabısı
- Kıyı gezileri için sandaletler

### Güneş Koruması

- Yüksek SPF güneş kremi (resif dostu tercih edilir)
- Geniş kenarlı şapka
- Kayışlı kaliteli güneş gözlüğü
- UV korumalı döşeme yeleği

### Pratik Eşyalar

- Su geçirmez telefon kılıfı
- Geziler için kuru çanta
- Şnorkel maskesi (ekipman sağlıyoruz, ancak kendinizinki daha iyi oturur)
- Gerekirse deniz tutması ilaçları
- Temel ilk yardım ve ilaçlar

### Bizim Sağladıklarımız

Getirmenize gerek yok:
- Plaj havluları
- Yatak takımları
- Şnorkel ekipmanı
- Su oyuncakları (kayaklar, kürekli tahtalar)
- Temel tuvalet malzemeleri

### Mürettebatımızdan Profesyonel İpuçları

1. Hafif bir rüzgarlık getirin - deniz esintileri serin olabilir
2. Çabuk kuruyan kumaşlar paketleyin
3. Mücevherleri evde bırakın - ihtiyacınız olmayacak
4. İyi bir kitap getirin - güneşlenme güvertesinde rahatlama için mükemmel
5. Kıyı gezileri için küçük bir sırt çantası kullanışlıdır

### GETİRMEMENİZ Gerekenler

- Yüksek topuklu ayakkabılar (ciddiyiz!)
- Aşırı bagaj
- Değerli mücevherler
- Koyu tabanlı ayakkabılar
- Saç kurutma makineleri (gemide var)

Hafif seyahat edin, hafif yaşayın ve mavi yolculuk maceranızın her anının tadını çıkarın!
        `,
        tags: ["paketleme", "ipuçları", "hazırlık", "ne getirmeli"],
      },
    },
  },
  {
    id: "turkish-cuisine-on-gulet",
    slug: "turkish-cuisine-gulet-experience",
    image: "/assets/images/about/about-h41.jpg",
    category: "guides",
    author: "Mavi Yolculuk Gezisi Ekibi",
    publishedAt: "2024-09-20",
    readTime: 5,
    translations: {
      tr: {
        title: "Bir Lezzet Yolculuğu: Gulet Kiralamada Türk Mutfağı",
        excerpt:
          "Gemideki şeflerimiz tarafından her gün taze hazırlanan Türk mutfağının lezzetli dünyasını keşfedin. Mezeden taze deniz ürünlerine, her öğün bir kutlama.",
        content: `
## Türk Mutfağı: Mavi Yolculuğunuzun Öne Çıkanı

Gulet kiralamanın en unutulmaz yönlerinden biri olağanüstü yemeklerdir. Gemideki şeflerimiz her gün taze, yerel malzemeler kullanarak otantik Türk mutfağı hazırlar.

### Tipik Bir Yemek Günü

**Kahvaltı (08:30-10:00)**
Her sabah zengin bir sofra sizi bekliyor:
- Yerel fırınlardan taze ekmek
- Türk peynirleri ve zeytinler
- İstediğiniz şekilde hazırlanan organik yumurtalar
- Bal, reçeller ve kaymak
- Taze meyveler ve sebzeler
- Türk çayı ve kahvesi

**Öğle Yemeği (13:00-14:00)**
Sıcak günler için mükemmel, hafif ama doyurucu yemekler:
- Yerel ürünlerle taze salatalar
- Izgara balık veya tavuk
- Akdeniz meze seçkisi
- Makarna yemekleri
- Türk pidesi

**Akşam Yemeği (20:00-21:30)**
Ana mutfak etkinliği:
- Çeşitli meze başlangıçlar
- Günün taze avı
- Izgara etler veya deniz ürünleri
- Geleneksel Türk yemekleri
- Ev yapımı tatlılar

### Tadacağınız İmza Türk Yemekleri

- **Meze** - Humus, sarma, patlıcan salataları gibi küçük tabaklar
- **Taze Balık** - Yerelde avlanan, mükemmelce ızgara edilmiş
- **Köfte** - Otlar ve baharatlarla Türk köftesi
- **İmam Bayıldı** - Zeytinyağlı dolma patlıcan
- **Baklava** - Fındık ve ballı katmanlı hamur işi
- **Lokum** - Çayla servis edilen tatlı ikramlar

### Diyet Gereksinimleri

Şeflerimiz memnuniyetle karşılar:
- Vejetaryen ve vegan diyetler
- Glutensiz gereksinimler
- Gıda alerjileri
- Çocuk tercihleri
- Dini beslenme ihtiyaçları

Lütfen buna göre hazırlanabilmemiz için rezervasyon yaparken bizi bilgilendirin.

### Taze ve Yerel

Malzemeleri şuralardan temin ediyoruz:
- Sabah balık pazarları
- Yerel çiftçi pazarları
- Bölgesel üreticiler
- Gemideki bahçemiz

Her şey taze hazırlanır - burada paketlenmiş yemek yok!

### Sosyal Deneyim

Gulette yemekler sosyal olaylardır. Yıldızların altında, dalgaların nazik sesiyle kıç güvertede birlikte yemek yemek unutulmaz anılar yaratır. Bu sadece yemek değil - bir deneyim.
        `,
        tags: ["yemek", "mutfak", "türk", "yemek yeme", "şef"],
      },
    },
  },
];

export function getTranslatedBlogPost(
  post: BlogPost,
  language: Language
): TranslatedBlogPost {
  const translation = post.translations[language] || post.translations.tr;
  return { ...post, ...translation };
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
