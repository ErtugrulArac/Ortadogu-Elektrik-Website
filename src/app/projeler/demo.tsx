"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Check } from "lucide-react";

/* ---------- Types ---------- */
type Project = {
  id: string;
  title: string;
  location?: string;
  meta?: string;
  cover: string;
  images: string[];
  summary?: string; // İki paragraf: "\n\n" ile ayrılmış
  scope?: string[];
  tagline?: string;
};

/* ---------- Data (İçerik aynen korundu) ---------- */
const PROJECTS: Project[] = [
    {
    id: "alanya-erkekyurdu",
    title: "Alanya  Öğrenci Yurdu - Devam Ediyor... ",
    location: "Alanya",
    meta: "Kamu Projesi",
    cover: "/proje/alanyaerkekyurdukapak.webp",
    images: ["/proje/alanyaerkekyurdu1.webp", "/proje/alanyaerkekyurdu2.webp", "/proje/alanyaerkekyurdu3.webp",],
    summary:
  "Alanya  Öğrenci Yurdu projesi kapsamında, binanın OG/AG enerji dağıtım sistemleri, aydınlatma altyapısı, zayıf akım sistemleri ve yangın algılama tesisatları anahtar teslim olarak projelendirilmiş ve uygulanmıştır. Öğrencilerin güvenli, konforlu ve kesintisiz bir yaşam alanına sahip olması amacıyla tüm elektrik altyapısı güncel standartlara uygun şekilde tasarlanmış, enerji dağıtımı yüksek verimlilik ve işletme sürekliliği esas alınarak tamamlanmıştır.\n\n" +
  "Proje kapsamında enerji dağıtım panoları, ortak yaşam alanları ve odalara ait aydınlatma sistemleri, acil durum aydınlatmaları, data ve internet altyapısı, yangın algılama ve ihbar sistemleri ile topraklama ve yıldırımdan korunma tesisatları eksiksiz olarak hayata geçirilmiştir. Devreye alma testleri tamamlanmış, tüm sistemler ilgili teknik şartnamelere uygun şekilde teslim edilerek uzun ömürlü ve güvenilir bir elektrik altyapısı oluşturulmuştur.",

scope: [
  "OG/AG enerji dağıtım sistemleri",
  "İç ve dış aydınlatma sistemleri",
  "Yangın algılama ve acil aydınlatma",
  "Data, internet ve zayıf akım altyapısı",
  "Topraklama ve yıldırımdan korunma sistemleri",
],

tagline: "Modern öğrenci yaşamı için güvenli ve kesintisiz enerji altyapısı.",
  },
    {
    id: "zenith-ankara",
    title: "Zenith Ankara Projesi - Devam Ediyor...",
    location: "Ankara",
    meta: "Kurumsal Kampüs",
    cover: "/proje/zenith1.webp",
    images: ["/proje/zenith2.webp", "/proje/zenith3.webp", "/proje/zenith4.webp", "/proje/zenith5.webp"],
    summary:
      "Ankara’nın yükselen değeri Zenith Ankara, modern mimarisi ve ayrıcalıklı yaşam alanlarıyla şehre prestij katıyor. Bu seçkin projede elektrik altyapısını üstlenmekten gurur duyuyoruz. Ortadoğu Elektrik & İnşaat olarak, güçlü mühendislik kadromuz ve sağlam çözümlerimizle Zenith Ankara’ya güvenli, kesintisiz ve uzun ömürlü bir enerji altyapısı kazandırıyoruz.\n\n" ,
    scope: ["Ana dağıtım & kompanzasyon", "UPS ve jeneratör senkronizasyonu", "Aydınlatma otomasyonu", "Fiber & bakır data omurgası"],
    tagline: "Verimlilik için akıllı altyapı.",
  },
  {
    id: "batman-adliye",
    title: "Batman Adliye Sarayı",
    location: "Batman",
    meta: "Kamu Projesi",
    cover: "/proje/batmanadliye1.webp",
    images: ["/proje/batmanadliye2.webp", "/proje/batmanadliye3.webp"],
    summary:
      "Adliye kompleksinin OG/AG enerji dağıtımı, aydınlatma hatları, yangın algılama ve zayıf akım sistemleri uçtan uca projelendirilip uygulanmıştır. Yoğun kullanıcı trafiği ve güvenlik gereklilikleri dikkate alınarak kritik devrelere yedekli hatlar, enerji izleme ve raporlama altyapısı kurulmuştur. Tüm devreye alma testleri kurum şartnamelerine uygun şekilde tamamlanmış, as-built çizimler ve tek hat şemaları teslim edilmiştir.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: [
      "OG/AG kablolama ve dağıtım panoları",
      "Aydınlatma & acil aydınlatma",
      "Yangın algılama ve siren hatları",
      "Data–telefon altyapısı ve topraklama",
    ],
    tagline: "Adaletin işlediği her katta güvenli enerji.",
  },  


{
  id: "batman-saray-konutlari",
  title: "Batman Saray Konutları Daire İşi",
  location: "Batman",
  meta: "Konut Projesi",
  cover: "/proje/saraykonutları.webp",
  images: [
    "/proje/saraykonutları1.webp",
    "/proje/saraykonutları2.webp",
  ],
  summary:
    "Batman Saray Konutları Daire İşi kapsamında, konutların elektrik altyapısı, kuvvetli akım tesisatları, aydınlatma sistemleri ve zayıf akım uygulamaları modern yaşam standartlarına uygun olarak anahtar teslim şekilde gerçekleştirilmiştir. Daire içi elektrik tesisatları, enerji dağıtım panoları, priz ve aydınlatma hatları ile ortak kullanım alanlarına ait elektrik sistemleri yüksek güvenlik ve uzun ömürlü kullanım esas alınarak uygulanmıştır.\n\n" +
    "Proje kapsamında dekoratif ve genel aydınlatma sistemleri, data ve TV altyapıları, diafon sistemleri, yangın güvenliği için gerekli elektrik altyapıları ile topraklama tesisatları eksiksiz olarak tamamlanmıştır. Tüm sistemler detaylı testlerden geçirilerek ilgili standartlara uygun şekilde devreye alınmış ve konut sahiplerine güvenli, konforlu ve sürdürülebilir bir yaşam alanı sunulmuştur.",

  scope: [
    "Daire içi elektrik tesisatları",
    "Aydınlatma ve dekoratif aydınlatma sistemleri",
    "Data, TV ve diafon altyapıları",
    "Ortak alan elektrik sistemleri",
    "Elektrik panoları, topraklama ve test-devreye alma",
  ],

  tagline: "Modern yaşam alanlarına güvenli ve kaliteli elektrik altyapısı kazandırıyoruz.",
},

{
  id: "teb-eczacilik-tarihi-ve-guzel-sanatlar-muzesi",
  title: "Türk Eczacıları Birliği Eczacılık Tarihi ve Güzel Sanatlar Müzesi",
  location: "Ankara",
  meta: "Kamu Projesi",
  cover: "/proje/tebmüze.webp",
  images: [
    "/proje/tebmüze1.webp",
    "/proje/tebmüze2.webp",
    "/proje/tebmüze3.webp",
    "/proje/tebmüze4.webp",
    "/proje/tebmüze5.webp",
    "/proje/tebmüze6.webp",
    "/proje/tebmüze7.webp",
    "/proje/tebmüze8.webp",
  ],
  summary:
    "Türk Eczacıları Birliği Eczacılık Tarihi ve Güzel Sanatlar Müzesi projesi kapsamında, yapının elektrik altyapısı, OG/AG enerji dağıtım sistemleri, aydınlatma çözümleri ve zayıf akım sistemleri modern müzecilik standartlarına uygun olarak uygulanmıştır. Sergi salonları, eser teşhir alanları, idari birimler ve ortak kullanım alanlarının ihtiyaç duyduğu elektrik altyapısı; enerji verimliliği, ziyaretçi güvenliği ve eserlerin korunması esas alınarak projelendirilmiş ve devreye alınmıştır.\n\n" +
    "Proje kapsamında sergi aydınlatmaları, acil durum aydınlatma sistemleri, yangın algılama altyapısı, data ve haberleşme sistemleri, CCTV güvenlik altyapısı, kartlı geçiş sistemleri ile topraklama ve yıldırımdan korunma tesisatları eksiksiz olarak tamamlanmıştır. Tüm test ve devreye alma süreçleri başarıyla tamamlanarak tesis, güvenli, sürdürülebilir ve uzun ömürlü bir elektrik altyapısıyla hizmete hazır hale getirilmiştir.",

  scope: [
    "Müze sergi alanları elektrik tesisatları",
    "Mimari ve eser aydınlatma sistemleri",
    "Yangın algılama ve güvenlik altyapısı",
    "Data, CCTV ve kartlı geçiş sistemleri",
    "Elektrik panoları, topraklama ve devreye alma",
  ],

  tagline: "Tarihi mirası modern elektrik altyapısıyla geleceğe taşıyan mühendislik çözümleri.",
},
  {
    id: "izmir-ab-okul",
    title: "İzmir Avrupa Birliği 6 Adet 32 Derslik Okul Projesi",
    location: "İzmir",
    meta: "Eğitim Kampüsü",
    cover: "/proje/izmirokul5.webp",
    images: ["/proje/izmirokul2.webp", "/proje/izmirokul3.webp", "/proje/izmirokul4.webp", "/proje/izmirokul1.webp", "/proje/izmirokul6.webp"],
    summary:
      "Altı farklı okul binasının elektrik altyapıları; laboratuvar, kütüphane ve spor salonlarının güç–aydınlatma sistemleriyle birlikte tamamlanmıştır. Kampüs genelinde acil yönlendirme ve yangın algılama çözümleri kurulmuş, standartlaştırılmış detaylar sayesinde bakım ve işletme kolaylaştırılmıştır. Proje, öğrenci güvenliği ve enerji verimliliği odaklı yürütülmüştür.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Ana dağıtım–kompanzasyon", "Laboratuvar güç & aydınlatma", "Spor salonu projektörleri", "Yangın & acil yönlendirme"],
    tagline: "Kampüs genelinde standart, her binada kalite.",
  },
   {
   id: "batman-baski-mudurlugu",
  title: "Batman Belediyesi BASKİ Müdürlüğü",
  location: "Batman",
  meta: "Kamu Projesi",
  cover: "/proje/batmanbelediyesimakineikmal.webp",
  images: [
    "/proje/batmanbelediyesimakineikmal.webp",
  ],
  summary:
    "Batman Belediyesi BASKİ Müdürlüğü hizmet binası kapsamında, tesisin elektrik altyapısı, OG/AG enerji dağıtım sistemleri, kuvvetli akım tesisatları, aydınlatma sistemleri ve zayıf akım altyapıları anahtar teslim olarak uygulanmıştır. İdari birimler, teknik çalışma alanları ve operasyon merkezlerinin ihtiyaç duyduğu enerji altyapısı yüksek güvenilirlik ve kesintisiz işletme esas alınarak projelendirilmiş, tüm sistemler ilgili teknik şartnamelere uygun şekilde devreye alınmıştır.\n\n" +
    "Proje kapsamında enerji dağıtım panoları, iç ve dış aydınlatma sistemleri, data ve haberleşme altyapısı, yangın algılama sistemleri, CCTV altyapısı, kartlı geçiş sistemleri, topraklama ve yıldırımdan korunma tesisatları eksiksiz olarak tamamlanmıştır. Yapılan test ve devreye alma işlemlerinin ardından tesis, BASKİ'nin su ve kanalizasyon hizmetlerini destekleyen operasyonlarını güvenli, verimli ve sürdürülebilir şekilde destekleyecek modern bir elektrik altyapısıyla teslim edilmiştir.",


  scope: [
    "İdari hizmet binası elektrik tesisatları",
    "SCADA ve otomasyon merkezleri enerji altyapısı",
    "Pompa kontrol ve kumanda panoları beslemeleri",
    "Teknik işletme alanları kuvvetli ve zayıf akım sistemleri",
    "Su ve kanalizasyon operasyonlarına yönelik elektrik altyapısı",
  ],

  tagline: "Su altyapısını kesintisiz enerjiyle buluşturan güvenilir mühendislik çözümleri.",
},
{
  id: "batman-makina-ikmal-binasi",
  title: "Batman Belediyesi Makina İkmal Binası Yapım İşi",
  location: "Batman",
  meta: "Kamu Projesi",
  cover: "/proje/makineikmal.webp",
  images: [
    "/proje/makineikmal1.webp",
    "/proje/makineikmal2.webp",
    "/proje/makineikmal3.webp",
  ],
  summary:
    "Batman Belediyesi Makina İkmal Binası Yapım İşi kapsamında, tesisin elektrik altyapısı, OG/AG enerji dağıtım sistemleri, kuvvetli akım tesisatları, aydınlatma çözümleri ve zayıf akım sistemleri anahtar teslim olarak uygulanmıştır. Araç bakım atölyeleri, teknik servis alanları, depo bölümleri ve idari birimlerin ihtiyaç duyduğu enerji altyapısı yüksek güvenilirlik ve işletme sürekliliği esas alınarak projelendirilmiş, tüm sistemler ilgili teknik şartnamelere uygun şekilde tamamlanmıştır.\n\n" +
    "Proje kapsamında enerji dağıtım panoları, bakım ekipmanlarının enerji beslemeleri, iç ve dış saha aydınlatmaları, yangın algılama sistemleri, data ve haberleşme altyapısı, topraklama ve yıldırımdan korunma sistemleri eksiksiz olarak hayata geçirilmiştir. Devreye alma testleri başarıyla tamamlanarak tesis, belediyenin bakım, onarım ve lojistik faaliyetlerini güvenli ve verimli şekilde destekleyecek modern bir elektrik altyapısıyla hizmete sunulmuştur.",

  scope: [
    "Makina ikmal atölyeleri elektrik altyapısı",
    "Araç bakım ekipmanları enerji besleme sistemleri",
    "Depo ve idari bina elektrik tesisatları",
    "Saha aydınlatma ve enerji dağıtım sistemleri",
    "Yangın algılama, topraklama ve devreye alma hizmetleri",
  ],

  tagline: "Belediye hizmetlerine güç veren güvenilir ve sürdürülebilir elektrik altyapısı.",
},
  {
    id: "bartin-rifat-efendi-erkek-yurdu",
    title: "Bartın Mehmet Rıfat Efendi Erkek Öğrenci Yurdu",
    location: "Bartın",
    meta: "Yurt Yerleşkesi",
    cover: "/proje/memetrıfatyurt1.webp",
    images: ["/proje/memetrıfatyurt2.webp", "/proje/memetrıfatyurt3.webp"],
    summary:
      "Yurt binalarının ana ve kat dağıtımları, oda ve ortak alan aydınlatmaları ile yangın algılama ve zayıf akım sistemleri bütünleşik olarak uygulanmıştır. Enerji tasarrufu ve konfor için hareket sensörlü kontrol, sayaç bazlı tüketim takibi ve acil durum yönlendirme çözümleri devreye alınmıştır. Tüm imalatlar öğrenci yoğunluğunu dikkate alan güvenli çalışma prensibiyle gerçekleştirilmiştir.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Dağıtım panoları ve sayaçlama", "Ortak alan & oda aydınlatma", "Yangın algılama ve anons", "TV–data altyapısı"],
    tagline: "Güvenli konaklama için sağlam elektrik.",
  },
  {
  id: "ankara-golbasi-sante-park-yasam-merkezi",
  title: "Ankara Gölbaşı Sante Park Yaşam Merkezi",
  location: "Ankara",
  meta: "Özel Proje",
  cover: "/proje/santepark.webp",
  images: [
    "/proje/santepark1.webp",
    "/proje/santepark2.webp",
    "/proje/santepark3.webp",
    "/proje/santepark4.webp",
  ],
  summary:
    "Ankara Gölbaşı Sante Park Yaşam Merkezi projesi kapsamında, yaşam alanlarının ihtiyaç duyduğu elektrik altyapısı, OG/AG enerji dağıtım sistemleri, kuvvetli akım tesisatları, mimari aydınlatma çözümleri ve zayıf akım sistemleri anahtar teslim olarak uygulanmıştır. Ortak kullanım alanları, sosyal tesisler, ticari birimler ve çevre düzenlemelerine ait elektrik sistemleri yüksek enerji verimliliği ve kullanıcı güvenliği esas alınarak projelendirilmiş, tüm uygulamalar ulusal standartlara uygun şekilde tamamlanmıştır.\n\n" +
    "Proje süresince enerji dağıtım panoları, iç ve dış mekân aydınlatmaları, peyzaj aydınlatmaları, yangın algılama sistemleri, CCTV güvenlik altyapısı, data ve haberleşme sistemleri, kartlı geçiş çözümleri ile topraklama ve yıldırımdan korunma tesisatları eksiksiz olarak devreye alınmıştır. Tüm sistemler detaylı testlerden geçirilerek uzun ömürlü, güvenli ve sürdürülebilir bir elektrik altyapısıyla hizmete sunulmuştur.",

  scope: [
    "Yaşam merkezi elektrik altyapısı",
    "Peyzaj ve çevre aydınlatma sistemleri",
    "Sosyal alanlar kuvvetli ve zayıf akım tesisatları",
    "CCTV, yangın algılama ve kartlı geçiş sistemleri",
    "Enerji dağıtım panoları ve devreye alma hizmetleri",
  ],

  tagline: "Modern yaşam alanlarını güvenilir enerji ve akıllı altyapıyla buluşturuyoruz.",
},  
  {
    id: "bartin-ibrahim-pasa-kiz-yurdu",
    title: "Bartın Hacı İbrahim Paşa Kız Öğrenci Yurdu",
    location: "Bartın",
    meta: "Yurt Yerleşkesi",
    cover: "/proje/hacıibrahimkız1.webp",
    images: ["/proje/hacıibrahimkız2.webp", "/proje/hacıibrahimkız3.webp"],
    summary:
      "Kat dağıtım merkezleri, acil aydınlatma ve yönlendirme, yangın algılama, CCTV ve erişim kontrol sistemleri anahtar teslim kurulmuştur. Oda ve ortak alanlarda ışık konforu artırılırken güvenlik kameralarıyla bütünleşik altyapı sayesinde 7/24 izlenebilirlik sağlanmıştır. Topraklama ve eş potansiyel baraları ile kullanıcı güvenliği üst seviyeye çıkarılmıştır.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Kat–dağıtım panoları", "Acil aydınlatma & yönlendirme", "CCTV ve kartlı geçiş", "Topraklama & eş potansiyel"],
    tagline: "Konforu artıran güvenli altyapı.",
  },
  {
    id: "batman-rektorluk",
    title: "Batman Üniversitesi Rektörlük Binası",
    location: "Batman",
    meta: "Üniversite",
    cover: "/proje/rektörlük1.webp",
    images: ["/proje/rektörlük2.webp", "/proje/rektörlük3.webp"],
    summary:
      "Yönetim binasının OG/AG altyapısı, aydınlatma otomasyonu ve toplantı–konferans alanları için AV ve zayıf akım sistemleri devreye alınmıştır. Enerji izleme sistemi ile tüketimler canlı olarak takip edilmekte, bakım planlamaları veri odaklı yapılabilmektedir. Tüm sistemler yüksek erişilebilirlik amacıyla yedekli kurgulanmıştır.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["OG/AG dağıtım & kompanzasyon", "Aydınlatma otomasyonu", "Konferans salonu AV altyapısı", "Yangın & anons entegrasyonu"],
    tagline: "Akıllı kampüslerin kalbinde güçlü enerji.",
  },
  {
    id: "batman-teknokent",
    title: "Batman Üniversitesi Teknokent Binası",
    location: "Batman",
    meta: "Ar-Ge / Teknokent",
    cover: "/proje/teknokent1.webp",
    images: ["/proje/teknokent2.webp", "/proje/teknokent3.webp"],
    summary:
      "Ar-Ge ofisleri için esnek priz hatları, yedekli UPS altyapısı, fiber omurga ve erişim kontrol sistemleri kurulmuştur. Laboratuvar alanlarında hassas cihazlar için ayrı ve filtrelenmiş enerji hatları planlanmış, ölçeklenebilir kabinet altyapısı ile büyüme senaryoları desteklenmiştir. Tüm altyapı siber güvenlik ve erişim yetkileri gözetilerek yapılandırılmıştır.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["UPS destekli priz hatları", "Fiber omurga & kabinet", "Kartlı geçiş ve CCTV", "Topraklama & paratoner"],
    tagline: "Yenilik için kesintisiz güç.",
  },
  {
    id: "hasankeyf-yeni-sehir",
    title: "Batman–Hasankeyf Yeni Şehir Projesi",
    location: "Batman",
    meta: "Kentsel Altyapı",
    cover: "/proje/hasankeyf1.webp",
    images: ["/proje/hasankeyf2.webp", "/proje/hasankeyf3.webp", "/proje/hasankeyf4.webp"],
    summary:
      "Yeni yerleşim bölgelerinde enerji dağıtımı; yol, park ve meydan aydınlatmaları ile trafo ve kablo güzergâhları tamamlanmıştır. SCADA'ya hazır pano altyapıları kurularak merkezi izleme ve uzaktan müdahale imkânı sağlanmıştır. Proje yerel yönetmelikler ve sürdürülebilirlik hedefleri gözetilerek yürütülmüştür.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Saha kablolama & trafo bağlantıları", "Yol–park aydınlatma direkleri", "SCADA’ye hazır pano altyapısı", "Topraklama & yıldırımdan korunma"],
    tagline: "Şehre ışık, mahallelere güven.",
  },
  {
    id: "batman-ozel-yasam-hastanesi",
    title: "Batman Özel Yaşam Hastanesi",
    location: "Batman",
    meta: "Hastane",
    cover: "/proje/yaşamhastane1.webp",
    images: ["/proje/yaşamhastane2.webp", "/proje/yaşamhastane3.webp"],
    summary:
      "Hastane kritik yükleri için yedekli hatlar, jeneratör–UPS koordinasyonu ve izolasyon trafolu ameliyathane hatları kurulmuştur. BMS entegrasyonu ile alarm durumları ve enerji tüketimleri merkezi olarak izlenmektedir. Hijyen ve süreklilik gereksinimleri gözetilerek bakım kolaylığı sağlayan modüler altyapı tercih edilmiştir.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Jeneratör–UPS senkronizasyonu", "İzolasyon trafolu hatlar", "Acil & yönlendirme aydınlatması", "BMS/yangın ile entegrasyon"],
    tagline: "Hayatın sürdüğü yerde kesintisiz enerji.",
  },
  {
    id: "batman-askeri-havalimani",
    title: "Batman Askeri Havalimanı Projesi",
    location: "Batman",
    meta: "Havalimanı",
    cover: "/proje/askerihavalimanı1.webp",
    images: ["/proje/askerihavalimanı2.webp", "/proje/askerihavalimanı3.webp"],
    summary:
      "Apron ve pist çevresi enerji hatları, aydınlatma ve saha kablolamaları askeri standartlara uygun şekilde tamamlanmıştır. IEC ve SHGM gerekliliklerine uyumlu test ve raporlama süreçleri yürütülmüş, kritik devrelerde yedekli yapı tercih edilmiştir. Sistemin sürekliliği için periyodik bakım prosedürleri tanımlanmıştır.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Pist & apron aydınlatmaları", "OG ring ve saha kablolaması", "Kontrol panoları & röle sistemleri", "Topraklama/ek-paratoner hatları"],
    tagline: "Operasyon güvenliği için hassas altyapı.",
  },
  {
    id: "malatya-sanat-sokagi",
    title: "Malatya Sanat Sokağı & Galerisi",
    location: "Malatya",
    meta: "Kültür–Sanat",
    cover: "/proje/sanatsokağı1.webp",
    images: ["/proje/sanatsokağı2.webp", "/proje/sanatsokağı4.webp"],
    summary:
      "Sokak ve galeri mekânlarında dekoratif aydınlatmalar, sergi güç hatları ve kontrollü priz devreleri kurulmuştur. Dimleme ve senaryo kontrol altyapısı sayesinde sergi konseptlerine göre hızla ayarlanabilir ışık kurguları oluşturulmaktadır. Dış mekân armatürleri ile güvenli ve homojen bir aydınlık seviyesi sağlanmıştır.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Dekoratif & vitrin aydınlatma", "Sergi güç ve data prizleri", "Dış mekân armatür montajları", "Kontrol & dimleme altyapısı"],
    tagline: "Sanata değer katan ışık tasarımı.",
  },
  {
    id: "mevlana-anadolu-lisesi",
    title: "Batman Mevlana Anadolu Lisesi",
    location: "Batman",
    meta: "Eğitim Kurumu",
    cover: "/proje/mevlanalise1.webp",
    images: ["/proje/mevlanalise2.webp"],
    summary:
      "Okulun toplam enerji dağıtımı, sınıf ve laboratuvar aydınlatmaları, acil yönlendirme ve yangın algılama sistemleri tamamlanmıştır. Spor salonu ve açık alanlar için projektör çözümleri uygulanmış, eğitim saatlerine uygun senaryo bazlı kontrol sağlanmıştır. Tüm imalatlar öğrenci güvenliği öncelenerek gerçekleştirilmiştir.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Ana pano & dağıtım", "Sınıf/laboratuvar aydınlatma", "Acil aydınlatma–yönlendirme", "Yangın & anons altyapısı"],
    tagline: "Geleceği aydınlatan altyapı.",
  },
  {
    id: "oguzcan-otomotiv",
    title: "Batman Oğuzcan Otomotiv Ford & Toyota Satış ve Servis Binası",
    location: "Batman",
    meta: "Sanayi & Showroom",
    cover: "/proje/fordtoyota1.webp",
    images: ["/proje/fordtoyota2.webp", "/proje/fordtoyota3.webp", "/proje/fordtoyota4.webp"],
    summary:
      "Showroom dekoratif aydınlatmaları, servis güç hatları ve kompresör–lif tesisatları kurulmuştur. Mekânın hacmine uygun yüksek CRI’lı armatürler enerji verimliliği sağlayan kompanzasyon sistemiyle desteklenmiştir. Dış çevre aydınlatmaları güvenlik kameralarıyla entegre çalışacak şekilde planlanmış, bakım kolaylığı için modüler yapılar tercih edilmiştir.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Showroom aydınlatma tasarımı", "Servis güç hatları & makine beslemeleri", "Dış alan projektörleri", "Yangın & CCTV altyapısı"],
    tagline: "Gücü ve estetiği aynı çatı altında.",
  },
  {
    id: "sanliurfa-hacerana",
    title: "Şanlıurfa Hacerana Kız Öğrenci Yurdu",
    location: "Şanlıurfa",
    meta: "Yurt Yerleşkesi",
    cover: "/proje/haceranakız1.webp",
    images: ["/proje/haceranakız2.webp", "/proje/haceranakız3.webp"],
    summary:
      "Yurt genelinde enerji dağıtımı, acil aydınlatma ve yangın algılama sistemleri uygulanmış; CCTV ve data altyapısı ile güvenli ve kesintisiz iletişim sağlanmıştır. Enerji tüketimi alt sayaçlar aracılığıyla izlenmekte, ortak alanlarda hareket algılamalı kontrol ile tasarruf elde edilmektedir.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Dağıtım panoları", "Acil aydınlatma–yönlendirme", "Yangın algılama ve anons", "CCTV & data altyapısı"],
    tagline: "Güvenli yaşam alanları için akıllı şebeke.",
  },
  {
    id: "diyarbakir-tpao-kurkan",
    title: "Diyarbakır Kurkan TPAO Petrol Arama Sahası",
    location: "Diyarbakır",
    meta: "Endüstriyel Saha",
    cover: "/proje/petrolarama1.webp",
    images: ["/proje/petrolarama2.webp", "/proje/petrolarama3.webp"],
    summary:
      "Saha içi enerji dağıtımı, patlayıcı ortam uygunluğu (Ex-proof) ekipman montajları ve aydınlatma sistemleri gerçekleştirilmiştir. Saha panoları SCADA’ya uyumlu izleme noktaları ile donatılmış, topraklama ve katodik koruma çözümleriyle güvenlik en üst düzeye çıkarılmıştır.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Ex-proof aydınlatma ve ekipmanlar", "Saha panoları & kablo tavaları", "Topraklama–katodik koruma", "SCADA’ye uygun izleme"],
    tagline: "Zorlu şartlarda güvenli enerji.",
  },
  {
    id: "batman-tp-bolge",
    title: "Batman Türkiye Petrolleri Bölge Binası",
    location: "Batman",
    meta: "Kurumsal",
    cover: "/proje/türkiyepetrolleri1.webp",
    images: ["/proje/türkiyepetrolleri2.webp", "/proje/türkiyepetrolleri3.webp"],
    summary:
      "İdari binada güç–aydınlatma dağıtımı, toplantı salonlarının AV ve data altyapıları anahtar teslim tamamlanmıştır. Enerji tüketimleri alt sayaçlarla izlenmekte, raporlama sistemi sayesinde operasyonel verimlilik artırılmaktadır. Yangın ve ikaz sistemleri ile entegre çalışan çözümle güvenlik katmanı güçlendirilmiştir.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Güç & aydınlatma panoları", "Toplantı AV & data", "Yangın/ikaz sistemleri", "Enerji izleme altyapısı"],
    tagline: "Kurumsal verimlilik için kesintisiz ağ.",
  },
  {
    id: "suveybe-kiz-yurdu",
    title: "Batman Süveybe Ana Kız Öğrenci Yurdu",
    location: "Batman",
    meta: "Yurt Yerleşkesi",
    cover: "/proje/süveybeanakız1.webp",
    images: ["/proje/süveybeanakız2.webp"],
    summary:
      "Oda, çamaşırhane ve ortak alanların elektrik işleri; CCTV ve kartlı geçiş sistemleri ile birlikte tamamlanmıştır. Sayaç bazlı tüketim takibi ve ortak alanlarda otomatik kontrol sayesinde işletme maliyetleri düşürülmüştür. Topraklama ve eş potansiyel uygulamaları ile kullanıcı güvenliği artırılmıştır.\n\n" +
      "Proje kapsamında, enerji verimliliği ve işletme güvenliği en üst düzeyde tutulmuştur. Bu amaçla, tüm AG panolarında akıllı şalt malzemeleri ve uzaktan izlemeye olanak tanıyan SCADA entegrasyonu kullanılmıştır. Acil durum aydınlatma sistemleri için merkezi batarya üniteleri tesis edilmiş, bu sayede olası bir enerji kesintisinde dahi bina içi yönlendirme ve tahliye yolları kesintisiz aydınlatılmıştır. Yangın algılama sistemi, adreslenebilir dedektörler ve acil anons sistemleri ile entegre edilerek, herhangi bir risk durumunda hızlı ve doğru müdahale için otomatik senaryolar oluşturulmuştur.",
    scope: ["Kat panoları & sayaç takibi", "CCTV & kartlı geçiş", "Ortak alan aydınlatma", "Topraklama ve eş potansiyel"],
    tagline: "Konforlu yurt yaşamı için güvenli ağ.",
  },
];

/* ---------- Utils ---------- */
function useKey(handler: (e: KeyboardEvent) => void) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => handler(e);
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [handler]);
}

function firstParagraph(text?: string) {
  if (!text) return "";
  return text.split("\n\n")[0] || text;
}
function paragraphs(text?: string) {
  if (!text) return [];
  return text.split("\n\n").filter(Boolean);
}

/* ---------- Modal ---------- */
function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const prevBody = document.body.style.overflow;
    const prevHtmlX = document.documentElement.style.overflowX;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflowX = prevHtmlX;
    };
  }, [open]);

  useKey((e) => {
    if (!open) return;
    if (e.key === "Escape") onClose();
  });

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-start md:place-items-center overflow-y-auto overflow-x-hidden"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 z-0 bg-black/55 backdrop-blur-sm" onClick={onClose} aria-hidden />
      {/* Küçük ekranda üstten akış, büyükte ortalı */}
      <div className="relative z-10 w-full max-w-6xl mx-auto my-4 md:my-0 px-4 md:px-0">
        <div className="relative w-full rounded-2xl bg-neutral-900 shadow-xl ring-1 ring-white/10 overflow-hidden">
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-sm hover:bg-black/70 active:scale-95"
          >
            <X className="h-4 w-4" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------- Component ---------- */
export default function Referanslar({ projects = PROJECTS }: { projects?: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);

  const openProject = (p: Project) => {
    setActive(p);
    setIndex(0);
  };
  const close = () => setActive(null);

  useKey((e) => {
    if (!active) return;
    if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    if (e.key === "ArrowRight") setIndex((i) => Math.min((active?.images?.length || 1) - 1, i + 1));
  });

  return (
    <section className="relative mx-auto w-[92%] max-w-7xl py-2 overflow-x-hidden">
      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.id} className="group relative h-full isolate">
            {/* gradient çerçeve: mobilde açık, desktop'ta hover (z-index düzeltildi) */}
            <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600" />
            </div>

            {/* İç kutu: eşit yükseklik */}
            <div className="relative z-10 m-[2px] rounded-2xl bg-neutral-900 shadow-md flex h-full flex-col">
              <button
                className="block aspect-square w-full overflow-hidden rounded-t-2xl"
                onClick={() => openProject(p)}
                aria-label={`${p.title} görsellerini aç`}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </button>

              {/* İçerik */}
              <div className="p-5 flex flex-1 flex-col">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                  {p.title}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                  {p.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location}
                    </span>
                  )}
                  {p.meta && <span className="text-neutral-500">• {p.meta}</span>}
                </div>

                {p.summary && (
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300 line-clamp-6 md:line-clamp-5 min-h-[6.5rem] md:min-h-[5.5rem]">
                    {firstParagraph(p.summary)}
                  </p>
                )}

                {p.tagline && (
                  <p className="mt-3 text-sm italic font-medium bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent min-h-[1.25rem]">
                    {p.tagline}
                  </p>
                )}

                <div className="mt-auto flex justify-end pt-4">
                  <button
                    onClick={() => openProject(p)}
                    className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-gradient-to-r from-sky-500 to-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow ring-1 ring-white/10 transition hover:from-sky-400 hover:to-indigo-500"
                  >
                    Proje Detayı
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      <Modal open={!!active} onClose={close}>
        {active && <ModalBody active={active} index={index} setIndex={setIndex} />}
      </Modal>
    </section>
  );
}

/* ---------- Modal İçerik ---------- */
function ModalBody({
  active,
  index,
  setIndex,
}: {
  active: Project;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const touchX = useRef<number | null>(null);
  const canPrev = index > 0;
  const canNext = index < active.images.length - 1;

  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 40 && canPrev) setIndex((i) => i - 1);
    if (dx < -40 && canNext) setIndex((i) => i + 1);
    touchX.current = null;
  };

  return (
    <div className="relative">
      {/* üst bilgi */}
      <div className="px-5 pt-5">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
          {active.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {active.location}
            </span>
          )}
          {active.meta && <span className="text-neutral-500">• {active.meta}</span>}
        </div>
      </div>

      {/* İçerik grid — alt boşluk optimize */}
      <div className="grid gap-5 px-5 pb-4 md:max-h-[78vh] md:overflow-y-auto md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* Sol: görsel ve kontroller */}
        <div className="relative mx-auto w-full max-w-xl">
          <div
            className="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-2xl border border-white/20 bg-neutral-800 select-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={active.images[index]}
              alt={`${active.title} görsel ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
            <button
              onClick={() => canPrev && setIndex((i) => Math.max(0, i - 1))}
              disabled={!canPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white shadow-sm disabled:opacity-50"
              aria-label="Önceki görsel"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => canNext && setIndex((i) => Math.min(active.images.length - 1, i + 1))}
              disabled={!canNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white shadow-sm disabled:opacity-50"
              aria-label="Sonraki görsel"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Alt kontrol barı */}
          <div className="mt-3 w-full text-center">
            <div className="inline-flex items-center gap-4">
              <button
                onClick={() => canPrev && setIndex((i) => Math.max(0, i - 1))}
                disabled={!canPrev}
                className="h-9 w-9 rounded-full ring-1 ring-white/15 border border-white/10 bg-neutral-800/60 text-white text-base leading-none disabled:opacity-40 hover:bg-neutral-800"
                aria-label="Önceki"
              >
                {"<"}
              </button>
              <span className="text-xs text-neutral-400 select-none">
                {index + 1} / {active.images.length}
              </span>
              <button
                onClick={() => canNext && setIndex((i) => Math.min(active.images.length - 1, i + 1))}
                disabled={!canNext}
                className="h-9 w-9 rounded-full ring-1 ring-white/15 border border-white/10 bg-neutral-800/60 text-white text-base leading-none disabled:opacity-40 hover:bg-neutral-800"
                aria-label="Sonraki"
              >
                {">"}
              </button>
            </div>

            {active.tagline && (
              <p className="mt-2 text-sm italic font-medium bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {active.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Sağ: içerik */}
        <div className="min-w-0 pb-1">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
            {active.title}
          </h3>

          {/* İki paragrafı ayrı ayrı göster */}
          {paragraphs(active.summary).map((para, i) => (
            <p key={i} className={`${i === 0 ? "mt-2" : "mt-3"} text-[13.5px] leading-7 text-neutral-300 md:text-[14.5px]`}>
              {para}
            </p>
          ))}

          {active.scope && active.scope.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white/90">İş Kapsamı</h4>
              <ul className="mt-2 space-y-1.5">
                {active.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="mt-0.5 h-4 w-4 text-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
