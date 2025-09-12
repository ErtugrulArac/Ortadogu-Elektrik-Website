// src/components/about/AboutLead.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Gradyanyazı from "@/components/gradyanyazı/app";

/* ---------------- Icons (inline, minimal) ---------------- */
const IconPlan = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <rect x="3" y="4" width="18" height="14" rx="2" strokeWidth="2" />
    <path d="M7 8h10M7 12h6" strokeWidth="2" />
  </svg>
);
const IconIdea = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M9 18h6M10 22h4" strokeWidth="2" />
    <path
      d="M12 2a7 7 0 0 1 7 7c0 2.3-1.1 3.8-2.6 5-1 .8-1.4 1.7-1.4 2.5h-6c0-.8-.4-1.7-1.4-2.5C6.1 12.8 5 11.3 5 9a7 7 0 0 1 7-7Z"
      strokeWidth="2"
    />
  </svg>
);
const IconBolt = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" strokeWidth="2" />
  </svg>
);
const IconSearch = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <circle cx="11" cy="11" r="7" strokeWidth="2" />
    <path d="m21 21-3.6-3.6" strokeWidth="2" />
  </svg>
);
const IconHelmet = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M3 14a9 9 0 1 1 18 0v3H3v-3Z" strokeWidth="2" />
    <path d="M7 17v2m10-2v2" strokeWidth="2" />
  </svg>
);
const IconSignal = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M4 18a8 8 0 0 1 16 0M7 18a5 5 0 0 1 10 0M10 18a2 2 0 1 1 4 0" strokeWidth="2" />
  </svg>
);
const IconCheck = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M20 6 9 17l-5-5" strokeWidth="2" />
  </svg>
);

/* ---------------- Data ---------------- */
type Feature = {
  id: string;
  title: string;
  kicker: string;
  desc: string;
  bullets: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string; // iç gradient
  glow: string;  // ikon seçiliyken dış glow
};

const FEATURES: Feature[] = [
  {
    id: "eff",
    title: "Verimlilik & Tasarruf",
    kicker: "İzleme ve raporlamayla destekli",
    desc:
      "Enerji analizi, yük profili ve kompanzasyon optimizasyonu ile sürdürülebilir tasarruf.",
    bullets: ["Gerçek zamanlı takip", "Periyodik raporlar", "Tasarruf senaryoları", "Bakım kolaylığı"],
    icon: IconIdea,
    color: "from-teal-400 to-sky-400",
    glow: "from-teal-400/30 to-sky-400/30",
  },
  {
    id: "safety",
    title: "Güvenlik & Uyum",
    kicker: "TSE/CE standartlarına göre",
    desc:
      "Topraklama, kaçak akım ve kısa devre riskleri ölçülür; yönetmeliklere tam uygun teslim.",
    bullets: ["Raporlu testler", "Risk azaltma planı", "Periyodik ölçümler", "Uygulama kontrolü"],
    icon: IconHelmet,
    color: "from-indigo-400 to-violet-400",
    glow: "from-indigo-400/30 to-violet-400/30",
  },
  {
    id: "speed",
    title: "Hızlı Kurulum",
    kicker: "Planlı ilerleme, net takvim",
    desc:
      "Randevulu servis ve etap yönetimiyle minimum kesinti. Zamanında devreye alma.",
    bullets: ["Etap planı", "Temiz montaj", "Zamanında kabul", "Saha koordinasyonu"],
    icon: IconBolt,
    color: "from-cyan-400 to-blue-400",
    glow: "from-cyan-400/30 to-blue-400/30",
  },
  {
    id: "audit",
    title: "Keşif & Denetim",
    kicker: "Şantiye gerçeklerine uygun",
    desc:
      "Ön keşif ve risk analiziyle malzeme, güzergah ve pano yerleşimi optimize edilir.",
    bullets: ["Ön keşif raporu", "Risk analizi", "Doğru malzeme listesi", "Saha doğrulaması"],
    icon: IconSearch,
    color: "from-emerald-400 to-cyan-400",
    glow: "from-emerald-400/30 to-cyan-400/30",
  },
  {
    id: "signal",
    title: "Akıllı İzleme",
    kicker: "Uzaktan kontrol ve uyarı",
    desc:
      "SCADA/IoT ile tüketim, arıza ve bakım ihtiyacı anında görünür; anomali uyarıları.",
    bullets: ["Uyarı/alarmlar", "Uzaktan erişim", "Bakım planı", "Anomali tespiti"],
    icon: IconSignal,
    color: "from-amber-400 to-orange-400",
    glow: "from-amber-400/30 to-orange-400/30",
  },
  {
    id: "plan",
    title: "Proje Planlama",
    kicker: "Şeffaf maliyet & süreç",
    desc:
      "Metraj, keşif ve iş kalemleri şeffaf; tedarik ve montaj takvimi birlikte netleşir.",
    bullets: ["Detaylı metraj", "Şeffaf maliyet", "Ortak takvim", "Tedarik senkronu"],
    icon: IconPlan,
    color: "from-fuchsia-400 to-pink-400",
    glow: "from-fuchsia-400/30 to-pink-400/30",
  },
];

/* ---------------- Component ---------------- */
export default function AboutLead() {
  const [locked, setLocked] = useState<string>("eff");
  const [hovered, setHovered] = useState<string | null>(null);

  const current = FEATURES.find((f) => f.id === (hovered ?? locked))!;

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 md:pt-32">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* ---------- LEFT ---------- */}
          <div className="md:col-span-7">
            {/* Rozeti garanti ortalamak için sarmalayıcı */}
            <div className="flex justify-center md:justify-start">
              <span
                className="inline-flex items-center gap-2 rounded-full
                           bg-emerald-400/10 px-3 py-1
                           text-[11px] sm:text-xs font-medium text-emerald-300
                           ring-1 ring-emerald-400/20"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Ortadoğu Elektrik • Güvenlik Önceliği
              </span>
            </div>

            <h1 className="mt-3 text-center md:text-left font-semibold tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-tight text-white">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Ortadoğu Elektrik
              </span>{" "}
              ile enerjinin yüzünü değiştiren çözümler
            </h1>

            <p className="mt-4 text-center md:text-left max-w-2xl text-neutral-300/90 text-sm sm:text-base leading-relaxed">
              Konut, ticari ve endüstriyel projelerde keşiften kabul sürecine dek; pano, tesisat,
              otomasyon ve enerji verimliliği danışmanlığını tek çatı altında sunuyoruz. Standartlara
              tam uyum, şeffaf raporlama ve sürdürülebilir tasarruf odaklı yaklaşım.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link
                href="/teklif"
                className="rounded-xl bg-white px-5 py-3 text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
              >
                Ücretsiz Keşif / Teklif Al
              </Link>
              <Link
                href="/projeler"
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Projelerimizi İncele
              </Link>
              <Link
                href="/iletisim"
                className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/15 transition"
              >
                7/24 Acil Destek
              </Link>
            </div>

            {/* Sol altta minimal value props */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {[
                {
                  head: "Kurumsal Kültür",
                  copy: "Her projede aynı disiplin: güvenlik, şeffaflık ve kalıcı çözümler.",
                },
                {
                  head: "Deneyim & Referans",
                  copy: "Yüzlerce uygulama ve kanıtlanmış iş alışkanlıkları.",
                },
                {
                  head: "Bütünleşik Hizmet",
                  copy: "Keşif → proje → montaj → kabul zinciri tek elden, tek sorumlulukla.",
                },
                {
                  head: "Sürdürülebilir Yaklaşım",
                  copy: "Verimlilik, bakım kolaylığı ve uzun ömür maliyet optimizasyonu.",
                },
              ].map((i) => (
                <li key={i.head} className="flex gap-3">
                  <span className="mt-1 inline-grid h-6 w-6 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                    <IconCheck className="h-4 w-4 text-emerald-300" />
                  </span>
                  <div>
                    <p className="text-white font-semibold">{i.head}</p>
                    <p className="text-sm text-neutral-300/90">{i.copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- RIGHT (icons outside, panel centered) ---------- */}
          <div className="md:col-span-5 mt-12 max-md:mt-2 md:flex md:flex-col md:items-center">
            {/* ortak sarmalayıcı: hem ikon şeridi hem kart için max genişlik + merkezleme */}
            <div className="w-full max-w-[720px] sm:max-w-[680px] mx-auto">
              {/* İKON ŞERİDİ — kutunun DIŞINDA */}
              <div className="mb-4 grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
                {FEATURES.map((f) => {
                  const active = (hovered ?? locked) === f.id;
                  const Icon = f.icon;
                  return (
                    <button
                      key={f.id}
                      onMouseEnter={() => setHovered(f.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setLocked(f.id)}
                      aria-pressed={locked === f.id}
                      className={[
                        "relative rounded-xl ring-1 transition grid place-items-center h-12 sm:h-14",
                        active
                          ? "ring-cyan-400/40 bg-white/[0.07]"
                          : "ring-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:ring-white/20",
                      ].join(" ")}
                    >
                      {active && (
                        <span
                          className={`pointer-events-none absolute -inset-2 rounded-2xl blur-xl opacity-35 bg-gradient-to-br ${f.glow}`}
                        />
                      )}
                      <Icon
                        className={[
                          "relative h-6 w-6 sm:h-7 sm:w-7",
                          active ? "text-white" : "text-white/75",
                        ].join(" ")}
                      />
                      <span className="sr-only">{f.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* İÇERİK KARTI — yükseklik içeriğe göre, merkezde */}
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-900/60 shadow-[0_20px_60px_rgba(0,0,0,0.55)] p-4 sm:p-6 md:p-7">
                {/* yumuşak arka plan parıltısı */}
                <span
                  className={`pointer-events-none absolute -inset-10 -z-10 blur-2xl opacity-30 bg-gradient-to-br ${current.color}`}
                />
                {/* kart içine ince gradient kenar */}
                <div className={`rounded-2xl p-[1px] bg-gradient-to-br ${current.color} w-full mx-auto`}>
                  <div className="rounded-[14px] bg-neutral-900/70 ring-1 ring-white/10 p-4 sm:p-5">
                    <h3 className="text-white text-lg font-semibold">{current.title}</h3>
                    <p className="text-sm text-neutral-300/95">{current.kicker}</p>

                    <p className="mt-2 text-neutral-200/95 leading-relaxed">{current.desc}</p>

                    {/* 2 sütun madde listesi */}
                    <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-neutral-200/90">
                      {current.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* ipucu (gradient yazı) – soldan kırpılmasın diye küçük bir padding */}
                    <div className="mt-4 text-xs">
                      <span className="inline-block pl-2 sm:pl-3">
                        <Gradyanyazı />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /kart */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
