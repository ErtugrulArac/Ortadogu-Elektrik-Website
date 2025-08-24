// src/components/IntroSection.tsx
"use client";
import React from "react";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const TinyLineChart = ({ up = true }: { up?: boolean }) => (
  <svg viewBox="0 0 120 40" className="w-full h-12" fill="none">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopOpacity="0.25" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d={up ? "M2,30 L18,20 L34,23 L50,15 L66,22 L82,12 L98,16 L118,8" : "M2,10 L18,16 L34,12 L50,22 L66,18 L82,26 L98,22 L118,30"}
      stroke="currentColor"
      className="opacity-80"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/*  arka plan  */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_20%,rgba(99,102,241,0.10)_0%,rgba(99,102,241,0.04)_35%,transparent_70%)]" />

      <div className="relative mx-auto w-[92%] max-w-7xl py-14 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Ssol taraf */}
        <div className="max-w-xl">
          <span className="text-xs font-semibold tracking-wide text-indigo-500">Proje & Taahhüt</span>

          {/* H1 anahtar kelime kulanırldı  */}
          <h1 className="mt-3 text-4xl md:text-4xl font-bold tracking-tight text-slate-900">
            Ortadoğu Elektrik <br />  Gücün Ebedi Yankısı
          </h1>

          <p className="mt-4 text-slate-600 leading-7">
            <strong>Ortadoğu Elektrik</strong>, ihale ile üstlenilen site ve toplu konut projelerinde dairelerin
            <b> elektrik altyapısını</b> anahtar teslim kurar. Keşif ve projelendirmeden kablolama, pano montajı,
            zayıf akım ve kabul testlerine kadar tüm süreçleri yönetmeliklere uygun biçimde yürütür.
          </p>

          {/* özellik liste */}
          <ul className="mt-6 space-y-3">""
            {[
              "İhale dosyasına ve keşif metrajına uygun projelendirme",
              "Daire içi tesisat, kolon hattı, kaçak akım ve sigorta seçimi",
              "Enerji odası, topraklama, kompanzasyon ve kabul/test raporları",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 inline-grid place-items-center rounded-full bg-indigo-600/10 text-indigo-600 size-7">
                  <CheckIcon />
                </span>
                <span className="text-slate-700">{t}</span>
              </li>
            ))}
          </ul>

        
          <a
            href="#trial"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-slate-900 font-medium shadow-sm hover:bg-slate-200 transition"
          >
            Ücretsiz Keşif Talep Et
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>

        
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-[520px] max-w-full rounded-3xl">
           
            <img
              src="/tecrübemock.webp"
              alt="Ortadoğu Elektrik site ve daire elektrik altyapısı"
              className="w-full h-auto rounded-2xl object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
