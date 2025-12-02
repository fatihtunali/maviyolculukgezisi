"use client";

import { createContext, useContext, ReactNode } from "react";

export type Language = "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);


const translations: { tr: Record<string, string> } = {
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.yachts": "Yatlarımız",
    "nav.itineraries": "Rotalar",
    "nav.destinations": "Destinasyonlar",
    "nav.about": "Hakkımızda",
    "nav.blog": "Blog",
    "nav.contact": "İletişim",
    "nav.booking": "Rezervasyon",

    // Home Hero
    "home.hero.badge": "1989'dan Beri Lüks Mavi Yolculuk",
    "home.hero.title": "Türkiye'nin Turkuaz Kıyılarını Lüks İçinde Keşfedin",
    "home.hero.subtitle": "El yapımı guletlerimizde unutulmaz bir mavi yolculuk deneyimi yaşayın. Kristal berraklığında sular, antik kalıntılar ve beş yıldızlı hizmet sizi bekliyor.",
    "home.hero.cta.fleet": "Filomuzu Keşfedin",
    "home.hero.cta.contact": "Teklif Alın",

    // Home Features
    "home.features.experience.title": "35+ Yıl Deneyim",
    "home.features.experience.desc": "1989'dan beri binlerce misafirin güvendiği",
    "home.features.crew.title": "Profesyonel Ekip",
    "home.features.crew.desc": "Deneyimli kaptan ve özenli personel",
    "home.features.cuisine.title": "Gurme Mutfak",
    "home.features.cuisine.desc": "Akdeniz lezzetleriyle tam pansiyon",
    "home.features.certified.title": "TÜRSAB Belgeli",
    "home.features.certified.desc": "Lisanslı seyahat acentası #1739",

    // Home Fleet
    "home.fleet.badge": "Filomuz",
    "home.fleet.title": "El Yapımı Lüks Guletler",
    "home.fleet.subtitle": "Her biri benzersiz karakter ve dünya standartlarında olanaklar sunan özenle bakılan guletlerimizden seçim yapın.",
    "home.fleet.viewAll": "Tüm Yatları Gör",

    // Home Itineraries
    "home.itineraries.badge": "Rotalar",
    "home.itineraries.title": "Rotalarımızı Keşfedin",
    "home.itineraries.subtitle": "Özenle hazırlanmış yelken rotalarımızla Türk Rivierası'nın en güzel yerlerini keşfedin.",
    "home.itineraries.viewAll": "Tüm Rotaları Gör",

    // Home About
    "home.about.title": "Akdeniz Rüyasına Açılan Kapınız",
    "home.about.desc1": "1989'dan beri Mavi Yolculuk Gezisi, Türkiye'nin muhteşem Turkuaz Kıyıları boyunca unutulmaz mavi yolculuk deneyimleri sunuyor. Light Tours ailesinin bir parçası olarak, onlarca yıllık denizcilik uzmanlığını gerçek Türk misafirperverliğiyle birleştiriyoruz.",
    "home.about.desc2": "El yapımı gulet filomuz, modern konfor ve olanaklarla güçlendirilmiş geleneksel Türk tekne yapımının en iyisini temsil ediyor.",

    // Home Stats
    "home.stats.years": "Yıllık Mükemmellik",
    "home.stats.yachts": "Lüks Gulet",
    "home.stats.guests": "Mutlu Misafir",
    "home.stats.support": "Destek",
    "home.stats.satisfaction": "Memnuniyet",
    "home.stats.destinations": "Destinasyon",

    // Home Testimonials
    "home.testimonials.badge": "Misafir Yorumları",
    "home.testimonials.title": "Misafirlerimiz Ne Diyor",
    "home.testimonial1": "Kesinlikle büyülü bir deneyim! Ekip olağanüstüydü, yemekler inanılmazdı ve manzara nefes kesiciydi. Kesinlikle tekrar geleceğiz!",
    "home.testimonial2": "Rezervasyondan inişe kadar her şey mükemmeldi. Yat güzeldi ve kusursuz bakılıydı. Yaptığımız en iyi tatil!",
    "home.testimonial3": "Detaylara gösterilen özen dikkat çekici. Kristal berraklığında koylarda yüzmek ve yıldızların altında yemek yemek - bundan iyisi olamaz.",

    // Home CTA
    "home.cta.title": "Hayalinizdeki Yolculuğa Hazır mısınız?",
    "home.cta.subtitle": "Mükemmel mavi yolculuk deneyiminizi planlamamıza yardımcı olalım. Kişisel teklif için bugün bize ulaşın.",
    "home.cta.button": "Yolculuğunuzu Planlayın",

    // Home Partners
    "home.partners.partOf": "Bir parçası",

    // Yachts Page
    "yachts.badge": "Premium Gulet Koleksiyonu",
    "yachts.title": "Filomuz",
    "yachts.subtitle": "El yapımı seçkin guletlerimizi keşfedin. Her biri olağanüstü konfor ve otantik Türk işçiliği sunuyor.",
    "yachts.stats.gulets": "Lüks Gulet",
    "yachts.stats.capacity": "Misafir Kapasitesi",
    "yachts.stats.length": "Uzunluk Aralığı",
    "yachts.stats.builtYears": "Yapım Yılları",
    "yachts.featured": "Öne Çıkan Yat",
    "yachts.allYachts": "Tüm Yatlar",
    "yachts.whyChoose": "Filomuzu Neden Tercih Etmelisiniz?",
    "yachts.whyChooseDesc": "Filomizdeki her yat en yüksek güvenlik, konfor ve lüks standartlarını karşılamaktadır.",
    "yachts.why.quality.title": "Premium Kalite",
    "yachts.why.quality.desc": "Her gulet, geleneksel teknikler ve en kaliteli malzemeler kullanılarak usta gemi yapımcıları tarafından el işçiliğiyle üretilmiştir.",
    "yachts.why.crew.title": "Uzman Ekip",
    "yachts.why.crew.desc": "Profesyonel mürettebatımız güvenliğinizi sağlarken olağanüstü hizmet sunmak için eğitilmiştir.",
    "yachts.why.amenities.title": "Modern Olanaklar",
    "yachts.why.amenities.desc": "Klima, WiFi ve eğlence sistemleri dahil çağdaş konforun tadını çıkarın.",

    // Yacht Filters
    "yachts.filters.title": "Yatları Filtrele",
    "yachts.filters.guests": "Misafir",
    "yachts.filters.length": "Uzunluk",
    "yachts.filters.weeklyPrice": "Haftalık Fiyat",
    "yachts.filters.anyGuests": "Herhangi kapasite",
    "yachts.filters.anyLength": "Herhangi uzunluk",
    "yachts.filters.anyPrice": "Herhangi fiyat",
    "yachts.filters.under15k": "€15.000 altı",
    "yachts.filters.under20k": "€20.000 altı",
    "yachts.filters.under25k": "€25.000 altı",
    "yachts.filters.clear": "Filtreleri temizle",
    "yachts.filters.active": "Aktif",
    "yachts.filters.noResults": "Filtrelerinize uyan yat bulunamadı",
    "yachts.filters.noResultsDesc": "Filtre kriterlerinizi değiştirmeyi deneyin",

    // Yacht Details
    "yacht.cabins": "Kabin",
    "yacht.guests": "Misafir",
    "yacht.length": "Uzunluk",
    "yacht.crew": "Mürettebat",
    "yacht.priceFrom": "Başlayan",
    "yacht.perWeek": "/hafta",
    "yacht.bookNow": "Bu Yatı Rezerve Et",
    "yacht.requestQuote": "Teklif İste",
    "yacht.amenities": "Olanaklar",
    "yacht.specifications": "Teknik Özellikler",
    "yacht.gallery": "Galeri",
    "yacht.overview": "Genel Bakış",
    "yacht.features": "Özellikler",
    "yacht.seasonPrices": "Sezon Fiyatları",
    "yacht.lowSeason": "Düşük Sezon",
    "yacht.midSeason": "Orta Sezon",
    "yacht.highSeason": "Yüksek Sezon",
    "yacht.aprilMay": "Nisan - Mayıs",
    "yacht.juneSeptember": "Haziran & Eylül",
    "yacht.julyAugust": "Temmuz - Ağustos",
    "yacht.october": "Ekim",
    "yacht.perDayShort": "/gün",

    // Booking
    "booking.title": "Charter Rezervasyonu",
    "booking.subtitle": "Müsaitliği kontrol edin ve hayalinizdeki yatı birkaç adımda rezerve edin.",
    "booking.selectYacht": "Yatınızı Seçin",
    "booking.selectYachtDesc": "Lüks gulet filomuzdan seçim yapın.",
    "booking.selectDates": "Tarihlerinizi Seçin",
    "booking.minNights": "Min. 7 gece",
    "booking.available": "Müsait",
    "booking.booked": "Dolu",
    "booking.selected": "Seçili",
    "booking.checkIn": "Giriş",
    "booking.checkOut": "Çıkış",
    "booking.duration": "Süre",
    "booking.nights": "gece",
    "booking.guestDetails": "Misafir Bilgileri",
    "booking.firstName": "Ad",
    "booking.lastName": "Soyad",
    "booking.email": "E-posta Adresi",
    "booking.phone": "Telefon Numarası",
    "booking.country": "Ülke",
    "booking.guests": "Misafir Sayısı",
    "booking.specialRequests": "Özel İstekler",
    "booking.submit": "Rezervasyon Talebi Gönder",
    "booking.changeYacht": "← Yat Değiştir",
    "booking.whyBookDirect": "Neden Doğrudan Bizden Rezervasyon Yapmalısınız?",
    "booking.bestPrice": "En İyi Fiyat Garantisi",
    "booking.noHiddenFees": "Gizli Ücret Yok",
    "booking.flexibleCancellation": "Esnek İptal",
    "booking.support247": "7/24 Destek",
    "booking.needHelp": "Rezervasyonunuzla ilgili yardıma mı ihtiyacınız var?",

    // Booking Form
    "bookingForm.confirmation": "Onay",
    "bookingForm.priceSummary": "Fiyat Özeti",
    "bookingForm.fullBoardIncluded": "Tam pansiyon dahil",
    "bookingForm.total": "Toplam",
    "bookingForm.continueToDetails": "Detaylara Devam Et",
    "bookingForm.guestInfo": "Misafir Bilgileri",
    "bookingForm.firstNameRequired": "Ad gerekli",
    "bookingForm.lastNameRequired": "Soyad gerekli",
    "bookingForm.emailRequired": "E-posta gerekli",
    "bookingForm.emailInvalid": "Geçersiz e-posta adresi",
    "bookingForm.phoneRequired": "Telefon gerekli",
    "bookingForm.countryRequired": "Ülke gerekli",
    "bookingForm.guest": "misafir",
    "bookingForm.specialRequestsPlaceholder": "Diyet gereksinimleri, özel günler veya tercihler...",
    "bookingForm.agreeToTerms": "Kabul ediyorum:",
    "bookingForm.termsConditions": "Şartlar ve Koşullar",
    "bookingForm.and": "ve",
    "bookingForm.privacyPolicy": "Gizlilik Politikası",
    "bookingForm.termsRequired": "Şartları kabul etmelisiniz",
    "bookingForm.back": "Geri",
    "bookingForm.requestSubmitted": "Rezervasyon Talebi Gönderildi!",
    "bookingForm.thankYou": "İlginiz için teşekkür ederiz:",
    "bookingForm.willContact": "Ekibimiz talebinizi inceleyecek ve rezervasyonunuzu onaylamak için 24 saat içinde sizinle iletişime geçecektir.",
    "bookingForm.bookingSummary": "Rezervasyon Özeti",
    "bookingForm.yacht": "Yat",
    "bookingForm.dates": "Tarihler",
    "bookingForm.returnHome": "Ana Sayfaya Dön",

    // Calendar
    "calendar.selectDates": "Tarihlerinizi Seçin",
    "calendar.minNights": "Min. {min} gece",
    "calendar.available": "Müsait",
    "calendar.booked": "Rezerveli",
    "calendar.selected": "Seçili",
    "calendar.checkIn": "Giriş",
    "calendar.checkOut": "Çıkış",
    "calendar.duration": "Süre",
    "calendar.nights": "gece",
    "calendar.minNightsWarning": "Lütfen en az {min} gece seçin",

    // Yacht Detail Page
    "yachtDetail.backToFleet": "Filoya Dön",
    "yachtDetail.about": "Hakkında",
    "yachtDetail.photoGallery": "Fotoğraf Galerisi",
    "yachtDetail.amenitiesFeatures": "Olanaklar ve Özellikler",
    "yachtDetail.startingFrom": "Başlayan fiyat",
    "yachtDetail.perWeek": "haftalık",
    "yachtDetail.perDay": "günlük",
    "yachtDetail.minDays": "Minimum {days} gün charter",
    "yachtDetail.notIncluded": "Dahil değil:",
    "yachtDetail.callForQuote": "Teklif için Arayın",
    "yachtDetail.sendInquiry": "Sorgu Gönder",
    "yachtDetail.charterIncludes": "Charter şunları içerir:",
    "yachtDetail.professionalCrew": "Profesyonel mürettebat",
    "yachtDetail.fullBoardMeals": "Tam pansiyon yemekler",
    "yachtDetail.fuelCruising": "Seyir yakıtı",
    "yachtDetail.waterSports": "Su sporları ekipmanı",
    "yachtDetail.portFees": "Liman ücretleri",
    "yachtDetail.built": "Yapım yılı",
    "yachtDetail.renovated": "Yenilenme",

    // Itinerary Detail Page
    "itineraryDetail.allItineraries": "Tüm Rotalar",
    "itineraryDetail.days": "Gün",
    "itineraryDetail.dayByDay": "Günlük Program",
    "itineraryDetail.dayByDayDesc": "Yolculuğunuz, bölgenin en iyilerini sergilemek için tasarlanmış özenle planlanmış duraklar, aktiviteler ve deneyimlerle açılır.",
    "itineraryDetail.recommendedYachts": "Önerilen Yatlar",
    "itineraryDetail.recommendedYachtsDesc": "Bu yatlar, konfor ve kapasitenin ideal kombinasyonunu sunarak bu rota için mükemmel şekilde uygundur.",
    "itineraryDetail.readyToExperience": "Bu Rotayı Deneyimlemeye Hazır mısınız?",
    "itineraryDetail.contactUs": "Hayalinizdeki yelken macerası için müsaitliği kontrol etmek ve kişiselleştirilmiş teklif almak için bizimle iletişime geçin.",
    "itineraryDetail.getQuote": "Teklif Al",

    // Contact
    "contact.title": "İletişim",
    "contact.subtitle": "Sorularınız mı var veya hayalinizdeki yolculuğu rezerve etmeye hazır mısınız?",
    "contact.phone": "Telefon",
    "contact.email": "E-posta",
    "contact.address": "Adres",
    "contact.workingHours": "Çalışma Saatleri",
    "contact.sendMessage": "Bize Mesaj Gönderin",
    "contact.sendMessageDesc": "Formu doldurun, 24 saat içinde size dönüş yapacağız.",
    "contact.yourName": "Adınız",
    "contact.yourEmail": "E-posta Adresiniz",
    "contact.phoneNumber": "Telefon Numarası",
    "contact.subject": "Konu",
    "contact.selectSubject": "Bir konu seçin",
    "contact.subjectBooking": "Rezervasyon Sorgusu",
    "contact.subjectQuote": "Teklif Talebi",
    "contact.subjectInfo": "Genel Bilgi",
    "contact.subjectCustom": "Özel Rota",
    "contact.subjectOther": "Diğer",
    "contact.interestedYacht": "İlgilendiğiniz Yat?",
    "contact.selectYacht": "Bir yat seçin (isteğe bağlı)",
    "contact.yourMessage": "Mesajınız",
    "contact.messagePlaceholder": "Hayalinizdeki yolculuğu bize anlatın...",
    "contact.send": "Mesaj Gönder",
    "contact.messageSent": "Mesaj Gönderildi!",
    "contact.messageSentDesc": "Bizimle iletişime geçtiğiniz için teşekkürler.",
    "contact.sendAnother": "Başka Mesaj Gönder",
    "contact.immediateHelp": "Acil Yardıma mı İhtiyacınız Var?",
    "contact.immediateHelpDesc": "Ekibimiz çalışma saatleri içinde hizmetinizdedir.",

    // About
    "about.badge": "1989'dan Beri",
    "about.title": "Mavi Yolculuk Gezisi Hakkında",
    "about.subtitle": "Otuz yılı aşkın süredir unutulmaz mavi yolculuk deneyimleri sunuyoruz.",
    "about.stats.years": "Yıllık Deneyim",
    "about.stats.gulets": "Lüks Gulet",
    "about.stats.guests": "Mutlu Misafir",
    "about.stats.destinations": "Destinasyon",
    "about.story.badge": "Hikayemiz",
    "about.story.title": "Turkuaz Kıyıları'nda Mükemmellik Mirası",
    "about.story.p1": "1989 yılında şirin kıyı kasabası Fethiye'de kurulan Mavi Yolculuk Gezisi, basit bir vizyonla başladı: Türkiye'nin Akdeniz kıyılarının nefes kesici güzelliğini dünyadan gelen gezginlerle paylaşmak.",
    "about.story.p2": "Light Tours ailesinin bir parçası olarak, küçük bir yerel işletmeden bölgenin en saygın yat kiralama şirketlerinden birine dönüştük.",
    "about.story.p3": "Bugün, 35 yılı aşkın süredir bize yol gösteren değerleri sürdürüyoruz: olağanüstü hizmet, otantik deneyimler ve misafir memnuniyetine sarsılmaz bağlılık.",
    "about.values.badge": "Değerlerimiz",
    "about.values.title": "Bizi Farklı Kılan",
    "about.values.safety": "Önce Güvenlik",
    "about.values.safetyDesc": "Güvenliğiniz en büyük önceliğimizdir.",
    "about.values.hospitality": "Gerçek Misafirperverlik",
    "about.values.hospitalityDesc": "Otantik Türk misafirperverliğini deneyimleyin.",
    "about.values.excellence": "Mükemmellik",
    "about.values.excellenceDesc": "Her aşamada mükemmellik için çabalıyoruz.",
    "about.values.personal": "Kişisel Dokunuş",
    "about.values.personalDesc": "Her charter tercihlerinize göre özelleştirilir.",
    "about.team.badge": "Ekibimiz",
    "about.team.title": "Mürettebatla Tanışın",
    "about.team.subtitle": "Deneyimli mürettebat üyelerimiz Mavi Yolculuk Gezisi'nin kalbidir.",
    "about.team.captain": "Kaptan",
    "about.team.captainDesc": "Onlarca yıllık deneyime sahip uzman denizciler.",
    "about.team.chef": "Şef",
    "about.team.chefDesc": "Lezzetli Akdeniz mutfağı yaratan mutfak sanatçıları.",
    "about.team.crew": "Mürettebat",
    "about.team.crewDesc": "Konforunuzu ve güvenliğinizi sağlayan özenli personel.",
    "about.cta.title": "Yolculuğunuza Başlamaya Hazır mısınız?",
    "about.cta.subtitle": "Ömür boyu sürecek anılar yaratmanıza yardımcı olalım.",
    "about.cta.fleet": "Filomuzu Keşfedin",
    "about.cta.contact": "Bize Ulaşın",
    "about.lightTours.title": "Light Tours Ailesinin Bir Parçası",
    "about.lightTours.desc": "Mavi Yolculuk Gezisi, kapsamlı bir seyahat acentası olan Light Tours'un gurur duyduğu bir parçasıdır.",

    // Itineraries
    "itineraries.badge": "Özel Rotalar",
    "itineraries.title": "Yelken Rotaları",
    "itineraries.subtitle": "Uzman ekibimiz tarafından planlanan rotalarla Türk Rivierası'nın büyüsünü keşfedin.",
    "itineraries.days": "Gün",
    "itineraries.highlights": "Öne Çıkanlar",
    "itineraries.viewFull": "Tam Rotayı Gör",
    "itineraries.dayByDay": "Günlük Program",
    "itineraries.dayByDayDesc": "Yolculuğunuz özenle planlanmış duraklar ve deneyimlerle açılır.",
    "itineraries.recommendedYachts": "Önerilen Yatlar",
    "itineraries.recommendedYachtsDesc": "Bu yatlar bu rota için mükemmel şekilde uygundur.",
    "itineraries.customRoute": "Özel Rota mı Arıyorsunuz?",
    "itineraries.customRouteDesc": "Tercihlerinize göre kişiselleştirilmiş bir rota oluşturabiliriz.",
    "itineraries.requestCustom": "Özel Rota Talep Et",
    "itineraries.readyToExperience": "Bu Rotayı Deneyimlemeye Hazır mısınız?",
    "itineraries.checkAvailability": "Müsaitliği Kontrol Et",
    "itineraries.getQuote": "Teklif Al",
    "itineraries.allRoutes": "Tüm Rotalar",

    // Error Pages
    "error.pageNotFound": "Sayfa Bulunamadı",
    "error.pageNotFoundDesc": "Aradığınız sayfa denize açılmış gibi görünüyor. Belki de Türk kıyılarını keşfediyor!",
    "error.backToHome": "Ana Sayfaya Dön",
    "error.viewFleet": "Filomuzu Görün",
    "error.contactUs": "Bize Ulaşın",

    // Footer
    "footer.description": "1989'dan beri Türkiye'nin muhteşem Turkuaz Kıyıları boyunca premium gulet charterları.",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.contactInfo": "İletişim Bilgileri",
    "footer.followUs": "Bizi Takip Edin",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.tursab": "TÜRSAB Lisans #1739",
    "footer.workingHours": "Pzt - Cmt: 09:00 - 18:00",

    // Common
    "common.select": "Seç",
    "common.viewDetails": "Detayları Gör",
    "common.learnMore": "Daha Fazla",
    "common.callUs": "Bizi Arayın",

    // Search
    "search.placeholder": "Yat, destinasyon, güzergah ara...",
    "search.noResults": "Sonuç bulunamadı",
    "search.quickLinks": "Hızlı Bağlantılar",
    "search.hint": "Aramak için yazın",
    "search.toClose": "kapatmak için",

    // Favorites
    "favorites.title": "Favorilerim",
    "favorites.subtitle": "Kaydettiğiniz yatlar ve güzergahlar",
    "favorites.empty": "Henüz favori yok",
    "favorites.emptyDesc": "Beğendiğiniz yat ve güzergahları kalp simgesine tıklayarak kaydedin",
    "favorites.browseYachts": "Yatlara Göz At",
    "favorites.browseItineraries": "Güzergahlara Göz At",
    "favorites.yachts": "Yatlar",
    "favorites.itineraries": "Güzergahlar",
    "favorites.destinations": "Destinasyonlar",
    "favorites.clearAll": "Tümünü Temizle",
    "favorites.addedToFavorites": "Favorilere eklendi",
    "favorites.removedFromFavorites": "Favorilerden kaldırıldı",
    "common.whatsapp": "WhatsApp",
    "common.loading": "Yükleniyor...",
    "common.from": "Başlayan",
    "common.perWeek": "haftalık",
    "common.share": "Paylaş",

    // Blog
    "blog.badge": "Blogumuz",
    "blog.title": "Mavi Yolculuk Tavsiyeleri ve Seyahat İpuçları",
    "blog.subtitle": "Mükemmel yat kiralama deneyiminiz için uzman tavsiyeleri, destinasyon rehberleri ve içeriden ipuçları",
    "blog.allPosts": "Tüm Yazılar",
    "blog.destinations": "Destinasyonlar",
    "blog.tips": "İpuçları",
    "blog.guides": "Rehberler",
    "blog.news": "Haberler",
    "blog.readMore": "Devamını Oku",
    "blog.minRead": "dk okuma",
    "blog.backToBlog": "Bloga Dön",
    "blog.relatedArticles": "İlgili Makaleler",
    "blog.moreFromBlog": "Blogumuzdan Daha Fazlası",
    "blog.popularTopics": "Popüler Konular",
    "blog.readyForCruise": "Mavi Yolculuğunuza Hazır mısınız?",
    "blog.contactUsDesc": "Türk kıyıları boyunca mükemmel yat charter deneyiminizi planlamak için bizimle iletişime geçin.",
    "blog.getQuote": "Teklif Al",
    "blog.stayUpdated": "En Son Makalelerimizden Haberdar Olun",
    "blog.subscribeDesc": "Özel seyahat ipuçları, özel teklifler ve Türk kıyılarına dair rehberler için bültenimize abone olun.",
    "blog.subscribeNow": "Şimdi Abone Ol",
    "blog.shareArticle": "Bu makaleyi paylaş:",
    "blog.noPosts": "Bu kategoride yazı bulunamadı.",

    // Destinations
    "destinations.badge": "Türkiye'yi Keşfedin",
    "destinations.title": "Yelken Destinasyonları",
    "destinations.subtitle": "Türkiye'nin Turkuaz Kıyıları'nın muhteşem limanlarını ve kıyı mücevherlerini keşfedin, her biri Mavi Yolculuk maceranız için benzersiz deneyimler sunuyor",
    "destinations.turquoiseAwaits": "Turkuaz Kıyıları Sizi Bekliyor",
    "destinations.turquoiseDesc": "Türkiye'nin güneybatı kıyıları, Akdeniz'in en muhteşem yelken sularından bazılarına ev sahipliği yapıyor. Antik liman kasabalarından el değmemiş koylara kadar her destinasyon kendi karakterini ve cazibe noktalarını sunuyor.",
    "destinations.explore": "Keşfet",
    "destinations.notSure": "Nereden Başlayacağınızdan Emin Değil misiniz?",
    "destinations.notSureDesc": "Ekibimiz Türk kıyılarındaki her koyu ve limanı biliyor. Hayalinizdeki Mavi Yolculuk için mükemmel rotayı seçmenize yardımcı olalım.",
    "destinations.contactExperts": "Uzmanlarımızla İletişime Geçin",
    "destinations.about": "Hakkında",
    "destinations.whyVisit": "Neden Ziyaret Etmeli",
    "destinations.mustSee": "Görülmesi Gereken Yerler",
    "destinations.itinerariesFrom": "Rotalar -",
    "destinations.planCruise": "Planlayın",
    "destinations.planCruiseDesc": "Mükemmel Mavi Yolculuğunuzu planlamak için bizimle iletişime geçin -",
    "destinations.idealFor": "İdeal",
    "destinations.bestTime": "Ziyaret için En İyi Zaman",
    "destinations.sailInStyle": "Stil ile Yelken",
    "destinations.sailInStyleDesc": "Tamamı charter için uygun lüks gulet filomuzu keşfedin -",
    "destinations.exploreOther": "Diğer Destinasyonları Keşfedin",
    "destinations.viewAll": "Tüm Destinasyonları Gör",
    "destinations.allDestinations": "Tüm Destinasyonlar",
    "destinations.turkey": "Türkiye",

    // Newsletter
    "newsletter.title": "Bültenimize Abone Olun",
    "newsletter.subtitle": "Özel seyahat ipuçları, fırsatlar ve Türk kıyılarına dair rehberler doğrudan e-postanıza gelsin.",
    "newsletter.placeholder": "E-posta adresinizi girin",
    "newsletter.subscribe": "Şimdi Abone Ol",
    "newsletter.subscribing": "Abone olunuyor...",
    "newsletter.success": "Abone olduğunuz için teşekkürler! Onay e-postası için gelen kutunuzu kontrol edin.",
    "newsletter.error": "Bir şeyler yanlış gitti. Lütfen daha sonra tekrar deneyin.",
    "newsletter.invalidEmail": "Lütfen geçerli bir e-posta adresi girin",
    "newsletter.required": "Lütfen e-posta adresinizi girin",
    "newsletter.privacy": "Spam yok, istediğiniz zaman abonelikten çıkın. Gizliliğinize saygı duyuyoruz.",
    "newsletter.compact.title": "Bülten",
    "newsletter.compact.subtitle": "Seyahat ipuçları ve özel fırsatlar alın",
    "newsletter.compact.subscribed": "Abone oldunuz!",
  },
};
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Turkish only for maviyolculukgezisi.com
  const language: Language = "tr";

  // No-op since we only support Turkish
  const setLanguage = (_lang: Language) => {};

  const t = (key: string): string => {
    return translations.tr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
