// src/components/Hero.tsx
"use client";

import React from "react";

type Feature = { title: string; desc: string; icon: React.ReactNode };

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5 md:size-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m13 3-8 13h6l-2 7 8-13h-6l2-7Z" />
  </svg>
);
const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5 md:size-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 16v-3a9 9 0 1 1 18 0v3" />
    <path d="M21 19a2 2 0 0 1-2 2h-3v-6h3a2 2 0 0 1 2 2zM3 19a2 2 0 0 0 2 2h3v-6H5a2 2 0 0 0-2 2z" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5 md:size-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const SmartHomeIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5 md:size-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 11L12 3l9 8" />
    <path d="M5 10v10h14V10" />
    <path d="M9 14h6v6H9z" />
    <path d="M7 6c3-3 7-3 10 0" />
  </svg>
);

const features: Feature[] = [
  { title: "Hızlı ve Temiz Montaj", desc: "Aynı gün keşif, randevulu servis ve minimum kesinti.", icon: <BoltIcon /> },
  { title: "7/24 Acil Destek", desc: "Arıza durumunda anında telefon ve yerinde müdahale.", icon: <HeadsetIcon /> },
  { title: "Güvenli ve Sertifikalı", desc: "TSE ve CE standartlarına uygun, kaçak akım korumalı çözümler.", icon: <ShieldIcon /> },
  { title: "Akıllı Enerji Sistemleri", desc: "Uzaktan izleme, tasarruf raporları ve akıllı ev otomasyonu.", icon: <SmartHomeIcon /> },
];

/* ---------------- Animated Backdrop ---------------- */
function ElectricBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* dotted grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* conic gradient beams */}
      <div
        className="absolute -left-40 top-1/2 h-[90vh] w-[90vh] -translate-y-1/2 rounded-full blur-3xl opacity-35"
        style={{
          background:
            "conic-gradient(from 120deg at 50% 50%, rgba(6,182,212,0.35), rgba(59,130,246,0.25), rgba(5,150,105,0.2), rgba(6,182,212,0.35))",
          animation: "slow-rotate 28s linear infinite",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute -right-40 top-1/2 h-[95vh] w-[95vh] -translate-y-1/2 rounded-full blur-3xl opacity-35"
        style={{
          background:
            "conic-gradient(from -60deg at 50% 50%, rgba(59,130,246,0.32), rgba(16,185,129,0.25), rgba(34,197,94,0.2), rgba(59,130,246,0.32))",
          animation: "slow-rotate-rev 32s linear infinite",
          mixBlendMode: "screen",
        }}
      />

      {/* top halo */}
      <div
        className="absolute left-1/2 top-6 h-40 w-40 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.2), rgba(34,197,94,0.18), rgba(34,197,94,0) 70%)",
          filter: "blur(26px)",
        }}
      />

      {/* neon waves — MOBILE: ÇOK DAHA BÜYÜK */}
      <svg
        className="block sm:hidden absolute left-1/2 top-[8%] -translate-x-1/2 transform scale-[1.65] w-[3200px] max-w-[280vw] h-auto opacity-65"
        viewBox="0 0 3200 520"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="m-greenArc" x1="0" y1="0" x2="3200" y2="0">
            <stop stopColor="#10b981" stopOpacity="0.95" />
            <stop offset="1" stopColor="#22c55e" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="m-blueArc" x1="0" y1="0" x2="3200" y2="0">
            <stop stopColor="#3b82f6" stopOpacity="0.95" />
            <stop offset="1" stopColor="#2563eb" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="m-cyanArc" x1="0" y1="0" x2="3200" y2="0">
            <stop stopColor="#06b6d4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        <path d="M0 230 C 360 90, 720 380, 1080 230 S 1800 90, 2160 230 2840 370, 3200 230"
              stroke="url(#m-greenArc)" strokeWidth="4.2" strokeLinecap="round" strokeDasharray="36 26">
          <animate attributeName="stroke-dashoffset" from="0" to="-720" dur="8s" repeatCount="indefinite" />
        </path>
        <path d="M0 300 C 420 150, 840 390, 1260 260 S 2040 130, 2460 260 2920 400, 3200 300"
              stroke="url(#m-blueArc)" strokeWidth="3.8" strokeLinecap="round" strokeDasharray="34 26" opacity="0.78">
          <animate attributeName="stroke-dashoffset" from="0" to="-640" dur="10s" repeatCount="indefinite" />
        </path>
        <path d="M0 150 C 380 30, 760 330, 1140 150 S 1900 30, 2280 150 2840 330, 3200 150"
              stroke="url(#m-cyanArc)" strokeWidth="3.4" strokeLinecap="round" strokeDasharray="34 28" opacity="0.68">
          <animate attributeName="stroke-dashoffset" from="0" to="-580" dur="12s" repeatCount="indefinite" />
        </path>
        <path d="M0 370 C 500 210, 1000 390, 1500 290 S 2500 190, 3000 290 3080 390, 3200 370"
              stroke="url(#m-blueArc)" strokeWidth="3.1" strokeLinecap="round" strokeDasharray="40 28" opacity="0.6">
          <animate attributeName="stroke-dashoffset" from="0" to="-760" dur="14s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* neon waves — TABLET/DESKTOP */}
      <svg
        className="hidden sm:block absolute left-1/2 top-[16%] -translate-x-1/2 w-[2200px] md:w-[2400px] lg:w-[2600px] max-w-[180vw] h-auto opacity-50"
        viewBox="0 0 2600 420"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="greenArc" x1="0" y1="0" x2="2600" y2="0">
            <stop stopColor="#10b981" stopOpacity="0.95" />
            <stop offset="1" stopColor="#22c55e" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="blueArc" x1="0" y1="0" x2="2600" y2="0">
            <stop stopColor="#3b82f6" stopOpacity="0.95" />
            <stop offset="1" stopColor="#2563eb" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="cyanArc" x1="0" y1="0" x2="2600" y2="0">
            <stop stopColor="#06b6d4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        <path d="M0 180 C 300 70, 600 280, 900 180 S 1500 70, 1800 180 2300 290, 2600 180"
              stroke="url(#greenArc)" strokeWidth="3" strokeLinecap="round" strokeDasharray="24 18">
          <animate attributeName="stroke-dashoffset" from="0" to="-460" dur="8s" repeatCount="indefinite" />
        </path>
        <path d="M0 230 C 360 110, 720 300, 1080 200 S 1800 100, 2160 200 2360 310, 2600 230"
              stroke="url(#blueArc)" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="22 16" opacity="0.75">
          <animate attributeName="stroke-dashoffset" from="0" to="-420" dur="10s" repeatCount="indefinite" />
        </path>
        <path d="M0 120 C 340 20, 680 260, 1020 120 S 1700 20, 2040 120 2320 260, 2600 120"
              stroke="url(#cyanArc)" strokeWidth="2.3" strokeLinecap="round" strokeDasharray="22 18" opacity="0.65">
          <animate attributeName="stroke-dashoffset" from="0" to="-380" dur="12s" repeatCount="indefinite" />
        </path>
        <path d="M0 300 C 420 160, 840 320, 1260 240 S 1980 160, 2340 240 2460 320, 2600 300"
              stroke="url(#blueArc)" strokeWidth="2" strokeLinecap="round" strokeDasharray="26 18" opacity="0.58">
          <animate attributeName="stroke-dashoffset" from="0" to="-520" dur="14s" repeatCount="indefinite" />
        </path>
      </svg>

      <style jsx global>{`
        @keyframes slow-rotate { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
        @keyframes slow-rotate-rev { 0%{transform:rotate(0)} 100%{transform:rotate(-360deg)} }
      `}</style>
    </div>
  );
}

/* ---------------- BrandCard (otomatik yükseklik + gradient + TAMAMI TIKLANABİLİR) ---------------- */
function BrandCard({
  titleLines,
  subtitle,
  detail,
  href,
  className = "",
}: {
  titleLines: string[];
  subtitle: string;
  detail: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={[
        "block w-full max-w-[420px] mx-auto",
        "rounded-3xl overflow-hidden ring-1 ring-white/10",
        "shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
        "bg-[#0b0f19] relative group",
        "transition duration-200 hover:scale-[1.02] hover:shadow-[0_14px_34px_rgba(0,0,0,0.55)]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(140px_140px_at_28%_18%,rgba(34,197,94,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(220px_220px_at_85%_85%,rgba(147,51,234,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-white/0 backdrop-blur-[1.5px]" />
      </div>

      <div className="relative z-[1] p-4 sm:p-5 md:p-6 text-white">
        <div className="mb-2 grid place-items-center">
          <svg viewBox="0 0 24 24" className="size-5 sm:size-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m13 3-8 13h6l-2 7 8-13h-6l2-7Z" />
          </svg>
        </div>

        <div className="text-center leading-tight">
          <div className="text-[13px] sm:text-[14px] md:text-[15px] font-extrabold">
            {titleLines[0]} <br /> {titleLines[1]}
          </div>
          <div className="mt-1 text-[12px] sm:text-[13px] text-white/70">{subtitle}</div>
        </div>

        <div className="mt-3 h-px w-10 mx-auto bg-white/10 rounded-full" />
        <p className="mt-3 text-center text-[11.5px] sm:text-[12px] leading-relaxed text-white/75">{detail}</p>
      </div>
    </a>
  );
}

/* ---------------- Main ---------------- */
export default function Hero() {
  return (
    <section aria-label="Ortadoğu Elektrik ana tanıtım" className="relative isolate">
      <ElectricBackdrop />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24 pb-14">
        {/* HEADER */}
        <div className="grid place-items-center text-center gap-3 sm:gap-4 min-h-[28vh] sm:min-h-[32vh]">
          <p className="rounded-full bg-foreground/5 px-3 py-1 text-[11px] sm:text-xs font-medium text-foreground/70">
            Ortadoğu Elektrik
          </p>

          <h1 className="mx-auto max-w-5xl font-poppins text-[28px] sm:text-4xl leading-tight tracking-tight md:text-5xl">
            Daha fazla referans kazandıran
            <br />
            <span className="text-foreground/90">güvenli elektrik çözümleri</span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm sm:text-base text-foreground/70">
            Ev ve iş yerleri için projelendirme, tesisat yenileme, pano kurulum ve akıllı enerji çözümleri.
          </p>

          <div className="mt-2 flex items-center justify-center gap-2 sm:gap-3">
            <a
              href="#teklif"
              className="rounded-2xl bg-foreground px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-background hover:opacity-90"
            >
              Ücretsiz Keşif/Teklif Al
            </a>
            <a
              href="tel:+905555555555"
              className="rounded-2xl border border-foreground/20 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-foreground/5"
            >
              7/24 Acil Destek
            </a>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-10 sm:mt-12 grid items-start gap-8 sm:gap-10 lg:grid-cols-[1.05fr_minmax(0,560px)_1.05fr]">
          {/* SOL */}
          <div className="order-2 grid gap-6 lg:order-1 lg:gap-10">
            <ul className="grid gap-6 sm:gap-8">
              {features.slice(0, 2).map((f) => (
                <li key={f.title} className="flex items-start gap-3 md:gap-4">
                  <span className="flex size-9 md:size-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-400/20">
                    {f.icon}
                  </span>
                  <div>
                    <p className="font-montserrat text-sm md:text-lg font-semibold">{f.title}</p>
                    <p className="mt-1 text-xs md:text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Kart #1 (yalnızca lg+ solda) */}
            <div className="hidden lg:block">
              <div className="max-w-[300px]">
                <BrandCard
                  href="/hakkimizda"
                  titleLines={["Ortadoğu", "Elektrik & Elektronik"]}
                  subtitle="Gücü tasarımla buluşturur"
                  detail="Akıllı çözümler • Güvenli kurulum • 7/24 servis • Kesintisiz enerji altyapısı"
                />
              </div>
            </div>
          </div>

          {/* ORTA TELEFON */}
          <div className="order-1 relative mx-auto w-full max-w-[520px] sm:max-w-[560px] lg:order-2">
            <img
              src="/mockuptel.png"
              alt="Ortadoğu Elektrik"
              className="w-full h-auto object-contain mx-auto drop-shadow-xl"
            />
          </div>

          {/* SAĞ */}
          <div className="order-3 grid gap-6 lg:gap-10">
            <ul className="grid gap-6 sm:gap-8">
              {features.slice(2, 4).map((f) => (
                <li key={f.title} className="flex items-start gap-3 md:gap-4">
                  <span className="flex size-9 md:size-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-400/20">
                    {f.icon}
                  </span>
                  <div>
                    <p className="font-montserrat text-sm md:text-lg font-semibold">{f.title}</p>
                    <p className="mt-1 text-xs md:text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Kart #2 (yalnızca lg+ sağda) */}
            <div className="hidden lg:block lg:justify-self-end">
              <div className="max-w-[300px]">
                <BrandCard
                  href="/projeler"
                  titleLines={["Projelendirme", "& Enerji Yönetimi"]}
                  subtitle="Konutta ve endüstride uzmanlık"
                  detail="Keşif & teklif • Pano ve tesisat • Otomasyon • Enerji verimliliği raporları"
                />
              </div>
            </div>
          </div>

          {/* <lg için kartlar: telefonun altında */}
          <div className="lg:hidden order-4 col-span-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <BrandCard
                href="/hakkimizda"
                titleLines={["Ortadoğu", "Elektrik & Elektronik"]}
                subtitle="Gücü tasarımla buluşturur"
                detail="Akıllı çözümler • Güvenli kurulum • 7/24 servis • Kesintisiz enerji"
              />
              <BrandCard
                href="/projeler"
                titleLines={["Projelendirme", "& Enerji Yönetimi"]}
                subtitle="Konutta ve endüstride uzmanlık"
                detail="Keşif & teklif • Pano • Otomasyon • Verimlilik raporları"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
