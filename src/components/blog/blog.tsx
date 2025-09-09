"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Post = {
  id: string;
  title: string;    // Genel başlık
  summary: string;  // SEO: Ortadoğu Elektrik, uzun özet
  detail: string;   // paragraf kırımı için \n\n
  img: string;
  tag: string;
  mins: number;
};

const POSTS: Post[] = [
  {
    id: "1",
    title: "Verimliliği Her Yerde Artırmak",
    summary:
      "Ortadoğu Elektrik; ölç, doğrula, iyileştir prensibiyle üretimden idari alanlara kadar tüm süreçlerde enerji verimliliğini yükseltir. İzleme, raporlama ve sürekli iyileştirme kültürüyle görünmeyen kayıplar ortaya çıkar, işletme davranışları kolayca optimize edilir.",
    detail:
      "Verimlilik bir proje değil, sürdürülen bir disiplindir. Ortadoğu Elektrik, tüketim profillerini görünür kılar ve veriye dayalı hedefler belirler.\n\nSaha ve ofis yüklerinin aynı ekranda izlenmesi, kayıpları hızlıca tespit etmeyi sağlar. Eğitim ve süreç standartlarıyla kazanımlar kalıcı hale getirilir.\n\nRaporlar yalın tutulur; karar verici için eylem adımları netleştirilir.",
    img: "/blok/verimlilik.jpg",
    tag: "Verimlilik",
    mins: 5,
  },
  {
    id: "2",
    title: "Koruma ve Güvenlikte Bütüncül Yaklaşım",
    summary:
      "Ortadoğu Elektrik; insan, ekipman ve üretim sürekliliğini birlikte ele alan koruma mimarisi kurar. Seçicilik, ölçüm ve periyodik kontroller tek çatı altında planlanır; gereksiz açmalar azalırken gerçek riskler önceliklendirilir.",
    detail:
      "Bütüncül güvenlik yaklaşımı; doğru ekipman seçimi, düzenli test ve kayıt tutma kültürünü kapsar.\n\nKoruma kademeleri, tesisin gerçek çalışma senaryolarına göre kurgulanır. Bu sayede bakım maliyetleri düşer, üretim ritmi korunur.\n\nRaporlar; mevzuat, fotoğraf ve ölçüm verileriyle desteklenerek denetime hazır hale getirilir.",
    img: "/blok/koruma.jpg",
    tag: "Koruma",
    mins: 4,
  },
  {
    id: "3",
    title: "Akıllı Şebeke ile Şeffaf Yönetim",
    summary:
      "Ortadoğu Elektrik; saha ekipmanı, ekip ve veriyi tek çatı altında toplayarak saha yönetimini standardize eder. Görev planlama, canlı izleme, alarm eşikleri ve raporlama aynı panelde ilerler; kararlar hızlanır, riskler azalır.",
    detail:
      "Saha yönetimi yaklaşımı, ekipman ve süreç bütünlüğünü temel alır. Envanter standardizasyonu, versiyon takibi ve güvenli uzaktan erişim sayesinde müdahale kalitesi artar.\n\nİş emri, bakım ve denetim akışları otomatik bildirimlerle yönetilir; KPI’lar düzenli raporlanır. Böylece ekipler aynı veriye bakar ve iletişim netleşir.\n\nUzaktan müdahale ile gereksiz saha ziyaretleri azalır, zaman ve maliyet kaybı düşer. Ortadoğu Elektrik, sürekli iyileştirme kültürüyle kazanımları kalıcı hale getirir.",
    img: "/blok/saha.jpg",
    tag: "Saha Yönetimi",
    mins: 5,
  },
  {
    id: "4",
    title: "Enerji Kalitesini Sürekli İyileştirmek",
    summary:
      "Ortadoğu Elektrik; harmonikler, gerilim dengesizlikleri ve flicker gibi başlıkları düzenli izleyerek ekipmanı ve süreçleri korur. Analizler yatırım/geri dönüş çerçevesinde yorumlanır; öneriler net, uygulanabilir ve ölçülebilirdir.",
    detail:
      "Kalite problemleri yalnız ekipmana değil süreçlere de yansır. Bu nedenle ölçüm, analiz ve doğrulama döngüsü sürekli yürütülür.\n\nFiltreleme, kablo kesiti ve sürücü ayarları gibi adımlar öncelik sırasına göre uygulanır.\n\nİyileştirme sonrası tekrar ölçülür; kazanım raporu somut verilerle ortaya konur.",
    img: "/blok/kalite.jpg",
    tag: "Enerji Kalitesi",
    mins: 4,
  },
  {
    id: "5",
    title: "Bakımda Proaktif Kültür",
    summary:
      "Ortadoğu Elektrik; arıza bulma yerine arıza olmadan önleme hedefiyle çalışır. Termal tarama, tork standardı ve kondisyon izleme gibi yöntemler planlı bakımın bir parçasıdır; süreklilik artar, sürpriz duruşlar azalır.",
    detail:
      "Proaktif bakım, kayıt ve standardı merkezine alır. Yapılan her işlem ölçülebilir sonuçla ilişkilendirilir.\n\nKritik ekipmanlar için yedek parça politikası belirlenir; tedarik süreleri plana alınır.\n\nDenetimlerde tüm veriler düzenli dosyalanır; şeffaflık güven yaratır.",
    img: "/blok/bakım.jpg",
    tag: "Bakım",
    mins: 3,
  },
  {
    id: "6",
    title: "Bütüncül Güvenlikle Kalıcı Başarı",
    summary:
      "Ortadoğu Elektrik; topraklama ve eşpotansiyel bütününü tesis güvenliğinin temeli olarak görür. Doğru ölçüm, doğru rapor ve düzenli tekrarlar sayesinde koruma seviyesi uzun yıllar sürdürülebilir kalır.",
    detail:
      "Ölçüm metodolojisi sonuçları doğrudan etkiler. Bu nedenle sahada referanslar titizlikle kurulur ve kayıt altına alınır.\n\nEksiklikler teknik gerekçelerle öneriye dönüşür; çözüm adımları net biçimde sıralanır.\n\nPeriyodik kontroller, mevsimsel etkileri ve işletme değişikliklerini görünür kılar.",
    img: "/blok/güvenlik.jpg",
    tag: "Güvenlik",
    mins: 3,
  },
  {
    id: "7",
    title: "Değer Ortaklığı ile Kalıcı Başarı",
    summary:
      "Ortadoğu Elektrik; hedeflerinizi kendi hedefimiz gibi ele alır, planlama–uygulama–izleme döngüsünü tek çatı altında yürüterek görünürlük ve verimlilik sağlar.",
    detail:
      "Değer ortaklığı yaklaşımımız, tek seferlik teslimlerden ziyade uzun vadeli iş hedeflerinize odaklanır. Yönetişim ritmi, net KPI’lar ve ortak bir gösterge paneli ile ekipler aynı veriye bakar; iletişim sadeleşir, aksiyonlar hızlanır.\n\nOrtadoğu Elektrik, saha–ofis ayrımını kaldıran görünürlükle kayıpları erkenden tespit eder. Eğitim, standart dökümantasyon ve yaşam döngüsü desteği ile kazanımlar kalıcı hale getirilir; süreçler kişilere değil sistemlere bağlanır.\n\nŞeffaf raporlama ve düzenli geri bildirim toplantılarıyla öngörülebilir maliyet, ölçülebilir fayda ve sürdürülebilir performans elde edilir. Böylece operasyonel verimlilik, güvenlik ve iş sürekliliği aynı anda güçlenir.",
    img: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1600&auto=format&fit=crop",
    tag: "Değer Ortaklığı",
    mins: 4,
  },
  {
    id: "8",
    title: "SCADA ile Görünürlük ve Hız",
    summary:
      "Ortadoğu Elektrik; tesis verisini tek bir SCADA panelinde toplayarak ekipler arası koordinasyonu güçlendirir. Alarm eşikleri, KPI’lar ve görev akışları netleşir; kararlar hızlanır, hatalar azalır.",
    detail:
      "SCADA/HMI çözümleri yalnız görselleştirme değil, standart dil oluşturma aracıdır. Herkes aynı verilere bakar ve tartışmalar veriden beslenir.\n\nUzak erişim, gereksiz saha ziyaretlerini azaltır; üretim kesintileri kısalır.\n\nYetkilendirme ve kayıt politikalarıyla bilgi güvenliği garanti altına alınır.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop",
    tag: "SCADA",
    mins: 4,
  },
];

export default function OEBlogShowcaseEqual() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const detailSectionRef = useRef<HTMLDivElement>(null); // ↓ açılan karta kaydırmak için
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToIndex(activeIdx - 1);
      if (e.key === "ArrowRight") goToIndex(activeIdx + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(el.children) as HTMLElement[];
        if (!children.length) return;
        const mid = el.scrollLeft + el.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        children.forEach((child, i) => {
          const center = child.offsetLeft + child.clientWidth / 2;
          const d = Math.abs(center - mid);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActiveIdx(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const activePost = useMemo(
    () => POSTS.find((p) => p.id === activeId) ?? null,
    [activeId]
  );

  // Devamını Oku tıklandıktan sonra detay açılınca sayfayı aşağıdaki panele kaydır
  useEffect(() => {
    if (!activeId) return;
    const el = detailSectionRef.current;
    if (!el) return;
    // Detay paneli DOM'a girsin ve animasyon başlasın diye küçük gecikme
    const t = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const y = rect.top + window.scrollY - 72; // hafif üst boşluk
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 220);
    return () => clearTimeout(t);
  }, [activeId]);

  const goToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const children = el.children as unknown as HTMLElement[];
    const maxIdx = children.length - 1;
    const next = Math.max(0, Math.min(i, maxIdx));
    const child = children[next];
    if (!child) return;
    const target = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    el.scrollTo({ left: Math.max(0, Math.min(target, max)), behavior: "smooth" });
    setActiveIdx(next);
  };

  return (
    <section className="relative overflow-hidden">
      {/* sade arka plan */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(#e8eef6_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Özen göstermek yeni pazarlamadır
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Ortadoğu Elektrik’te verimlilik, koruma, izleme ve bakım bir bütünün parçalarıdır.
            Burada sahadan gelen deneyimleri yalın bir dille paylaşıyor, karar almayı hızlandıran
            pratik öneriler sunuyoruz.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {POSTS.map((post, idx) => (
              <article key={post.id} className="w-[300px] shrink-0 snap-start sm:w-[340px]">
                <div className="rounded-3xl bg-[#f6f9ff] p-[1px] ring-1 ring-slate-100">
                  <div className="flex h-[520px] flex-col overflow-hidden rounded-[calc(1.5rem-1px)] border border-slate-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
                    <div className="relative">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="aspect-[16/10] w-full object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#1f6fff] shadow-sm ring-1 ring-slate-200">
                        {post.tag}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      {/* üst satır */}
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1f6fff]">
                        ORTADOĞU ELEKTRİK • {post.tag}
                      </div>

                      <h3 className="mt-1 text-[18px] font-semibold text-slate-900">
                        {post.title}
                      </h3>

                      {/* uzun özet — line-clamp kaldırıldı */}
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {post.summary}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                          {post.mins} dk okuma
                        </span>

                        {/* Devamını Oku — önce ortala, sonra aç (ve effect aşağıya kaydırır) */}
                        <button
                          onClick={() => {
                            goToIndex(idx);
                            setTimeout(
                              () => setActiveId((prev) => (prev === post.id ? null : post.id)),
                              180
                            );
                          }}
                          aria-expanded={activeId === post.id}
                          className="
                            relative inline-flex items-center gap-2 rounded-full
                            bg-[#0b1220] px-4 py-2 text-sm font-semibold text-white
                            shadow-[0_10px_24px_rgba(2,6,23,0.35)]
                            transition hover:-translate-y-[1px] hover:shadow-[0_14px_28px_rgba(2,6,23,0.45)] active:scale-[0.98]
                            before:absolute before:inset-0 before:-z-10 before:rounded-full
                            before:ring-2 before:ring-[#6ee7c8]
                            before:shadow-[0_0_0_4px_rgba(110,231,200,0.25)]
                            before:transition before:duration-150 hover:before:ring-[#53e2b9]
                            before:content-['']
                          "
                        >
                          Devamını Oku
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* alt gezinme */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => goToIndex(activeIdx - 1)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-lg font-bold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98]"
              aria-label="Sola kaydır"
            >
              &lt;
            </button>

            <div className="flex items-center gap-2">
              {POSTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToIndex(i)}
                  aria-label={`Kart ${i + 1}`}
                  className={`rounded-full transition ${
                    activeIdx === i
                      ? "h-2.5 w-2.5 bg-slate-700 shadow-[0_1px_4px_rgba(15,23,42,0.25)]"
                      : "h-1.5 w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goToIndex(activeIdx + 1)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-lg font-bold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98]"
              aria-label="Sağa kaydır"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Genişleyen detay paneli */}
        <div
          ref={detailSectionRef}
          className={`transition-all duration-500 ${
            activePost ? "mt-12 opacity-100" : "mt-2 opacity-0"
          }`}
          aria-live="polite"
        >
          {activePost && (
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative">
                  <img
                    src={activePost.img}
                    alt={activePost.title}
                    className="h-full w-full max-h-[500px] object-cover"
                  />
                </div>

                <div className="flex flex-col p-6 md:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1f6fff]">
                    ORTADOĞU ELEKTRİK • {activePost.tag}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-snug text-slate-900">
                    {activePost.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-700">{activePost.summary}</p>
                  <div className="my-3 h-px w-full rounded bg-slate-100" />

                  {activePost.detail.split("\n\n").map((p, i) => (
                    <p key={i} className="mt-4 text-[15px] leading-7 text-slate-700">
                      {p}
                    </p>
                  ))}

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      {activePost.mins} dk okuma
                    </span>
                    <button
                      onClick={() => setActiveId(null)}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      Kapat
                    </button>

                    <a
                      href="#iletisim"
                      className="
                        relative inline-flex items-center gap-2 rounded-full
                        bg-[#0b1220] px-5 py-2.5 text-sm font-semibold text-white
                        shadow-[0_10px_24px_rgba(2,6,23,0.35)]
                        transition hover:-translate-y-[1px] hover:shadow-[0_14px_28px_rgba(2,6,23,0.45)] active:scale-[0.98]
                        before:absolute before:inset-0 before:-z-10 before:rounded-full
                        before:ring-2 before:ring-[#6ee7c8]
                        before:shadow-[0_0_0_4px_rgba(110,231,200,0.25)]
                        before:transition before:duration-150 hover:before:ring-[#53e2b9]
                        before:content-['']
                        w-full sm:w-auto justify-center
                      "
                    >
                      İletişime Geç
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
