// src/components/about/BizKimiz.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const IconCheck = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M20 6 9 17l-5-5" strokeWidth="2" />
  </svg>
);

/** Basit görünür olunca animasyon sarmalayıcısı (library yok) */
function Reveal({
  children,
  delay = 0,            // ms
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current as Element | null;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      className={[
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default function BizKimiz() {
  return (
    <section id="bizmisviz" className="relative  py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ====== BİZ KİMİZ (Kurumsal band) ====== */}
        <Reveal delay={50} className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/[0.035]">
          <div className="absolute inset-y-0 left-0 w-[6px] bg-gradient-to-b from-emerald-400 via-cyan-400 to-indigo-400" />
          <div className="pointer-events-none absolute -inset-16 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-3xl" />
          <div className="relative pl-6 sm:pl-8 md:pl-10 pr-6 sm:pr-8 md:pr-10 py-7 sm:py-9">
            <Reveal delay={120} as="h2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Biz Kimiz
                </span>
              </h2>
            </Reveal>

            <div className="mt-3 space-y-3 text-neutral-300/90 leading-relaxed max-w-5xl">
              <Reveal delay={180}>
                <p>
                  Ortadoğu Elektrik, <strong className="text-white/90">1996 yılında Batman’da</strong> kurulan,
                  kuruluşundan itibaren Güneydoğu Anadolu bölgesinin gereksinimlerine odaklanan bir
                  mühendislik şirketidir. İlk yıllarda konut ve ticari tesislerde tesisat, pano ve devreye alma
                  hizmetleriyle hızlıca büyüyerek bölgenin güvenilir çözüm ortağı haline gelmiştir.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p>
                  Sahadaki birikim ve referanslarla <strong className="text-white/90">Güneydoğu</strong> genelinde
                  faaliyet gösteren ekiplerimiz; standarda uyumlu, belgeli ve ölçüm/doğrulama odaklı çalışmayı
                  kurum kültürü haline getirmiştir. Edindiğimiz bu disiplin ile
                  <strong className="text-white/90"> Ankara ve çevresinde</strong> de güçlü bir operasyon
                  yapılanmasına geçerek İç Anadolu’da da projeler üretmeye başladık.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>
                  Bugün Ortadoğu Elektrik; keşif, projelendirme, tesisat, pano imalatı, otomasyon ve
                  enerji verimliliği danışmanlığını <strong className="text-white/90">tek çatı altında</strong> sunan;
                  şeffaf iş planı, ölçülebilir kalite ve sürdürülebilir tasarruf yaklaşımıyla hareket eden
                  kurumsal bir mühendislik ekibidir.
                </p>
              </Reveal>
            </div>

            <Reveal delay={360}>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Kuruluş: 1996 • Batman",
                  "Operasyon: Güneydoğu & İç Anadolu",
                  "Ofisler: Batman, Ankara",
                  "TSE/CE ve yönetmelik uyumu",
                ].map((t, i) => (
                  <Reveal key={t} delay={420 + i * 70}>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-white/90">
                      <IconCheck className="h-4 w-4 text-emerald-300" />
                      {t}
                    </span>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </Reveal>

        {/* ====== Misyon & Vizyon kartları ====== */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Misyon */}
          <Reveal delay={80}>
            <article className="relative overflow-hidden rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 p-6 sm:p-8 shadow-[0_18px_48px_rgba(0,0,0,0.40)]">
              <header className="mb-2">
                <h3 className="text-white text-lg sm:text-xl font-semibold">Misyon</h3>
                <p className="text-sm text-neutral-400">Güvenli, verimli ve sürdürülebilir altyapılar</p>
              </header>

              <p className="text-neutral-300/90 leading-relaxed">
                Her ölçekte projede güvenli, verimli ve sürdürülebilir elektrik altyapıları kurmak;
                işletmelerin kesintisiz çalışmasını ve hane güvenliğini garanti altına almak. Her işte
                şeffaf planlama, öngörülebilir takvim ve belgeli teslim yaklaşımıyla ilerleriz.
              </p>

              <ul className="mt-3 space-y-2 text-sm text-neutral-200/90">
                {[
                  "Şeffaf planlama ve net iş kalemleri",
                  "Yönetmeliklere tam uyum, ölçüm/doğrulama raporları",
                  "Uzun ömür maliyet optimizasyonu ve bakım kolaylığı",
                  "Saha güvenliği ve kullanıcı güvenliği odağı",
                ].map((b, i) => (
                  <Reveal key={b} delay={160 + i * 80} as="li" className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span>{b}</span>
                  </Reveal>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Vizyon */}
          <Reveal delay={140}>
            <article className="relative overflow-hidden rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 p-6 sm:p-8 shadow-[0_18px_48px_rgba(0,0,0,0.40)]">
              <header className="mb-2">
                <h3 className="text-white text-lg sm:text-xl font-semibold">Vizyon</h3>
                <p className="text-sm text-neutral-400">Bölgenin güvenilir çözüm ortağı</p>
              </header>

              <p className="text-neutral-300/90 leading-relaxed">
                Bölgenin en güvenilir elektrik çözüm ortağı olarak; dijital izleme, akıllı otomasyon ve
                enerji verimliliğiyle fark yaratan katma değer üretmek. Batman’daki köklerimizi ve Ankara’daki
                kurumsal yapımızı birleştirerek, standartları yükselten kalıcı çözümler sunmak.
              </p>

              <ul className="mt-3 space-y-2 text-sm text-neutral-200/90">
                {[
                  "Akıllı enerji yönetimi ve izleme/raporlama",
                  "Veriyle desteklenen tasarruf stratejileri",
                  "Sürekli gelişim ve yetkin ekip kültürü",
                  "Karbonsuzlaşma hedeflerine katkı",
                ].map((b, i) => (
                  <Reveal key={b} delay={220 + i * 80} as="li" className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-300" />
                    <span>{b}</span>
                  </Reveal>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
