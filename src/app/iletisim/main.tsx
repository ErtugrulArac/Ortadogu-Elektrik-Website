// src/app/iletisim/page.tsx
"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

export default function IletisimPage() {
  // basit bir sayaçla gecikmeleri artırıyoruz
  let d = 0;
  const step = 120; // ms

  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-transparent pt-16 text-slate-200">
      {/* arka plan ışıma (global gradient’i bozmaz) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-20%] top-[-25%] h-[55vh] w-[55vw] rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute right-[-18%] bottom-[-28%] h-[60vh] w-[60vw] rounded-full bg-indigo-600/10 blur-[160px]" />
      </div>

      <div className="mx-auto w-[92%] max-w-7xl py-12 md:py-18">
        {/* başlık */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          <span className="relative inline-block">
            İletişime
            <span className="absolute left-0 top-full mt-2 h-[3px] w-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
          </span>{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
            geçelim
          </span>
        </h1>

        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-400">
          Ortadoğu Elektrik’te keşif, teklif, bakım ve proje yönetimi süreçlerini uçtan uca
          üstleniyoruz. Saha keşfi, pano/tesisat uygulamaları, test ve raporlama adımlarında
          teknik ekibimizle yanınızdayız. Aşağıdaki kanallardan bize ulaşabilir; çalışma
          saatlerimizi, merkez ofis adresimizi ve güncel web bağlantımızı hemen inceleyebilirsiniz.
        </p>

        {/* 1. satır: Adres & Çalışma Saatleri */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <InfoCard
            icon={<MapPin className="h-6 w-6" />}
            title="Adres"
            lines={["Ankara, Etimesgut Sanayi Bölgesi", "No: 123, Türkiye"]}
            delayMs={(d += step)}
          />
          <InfoCard
            icon={<Clock className="h-6 w-6" />}
            title="Çalışma Saatleri"
            lines={["Pazartesi – Cuma: 09:00 – 18:00", "Cumartesi: 09:00 – 13:00", "Pazar: Kapalı"]}
            delayMs={(d += step)}
          />
        </div>

        {/* 2. satır: Telefon & Web Sitesi */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <InfoCard
            icon={<Phone className="h-6 w-6" />}
            title="Telefon"
            lines={["+90 (312) 123 45 67", "Hafta içi 09:00–18:00"]}
            delayMs={(d += step)}
          />
          <InfoCard
            icon={<Globe className="h-6 w-6" />}
            title="Web Sitesi"
            lines={["www.ortadoguelektrik.com", "Güncel projeler & haberler"]}
            delayMs={(d += step)}
          />
        </div>

        {/* 3. satır: E-posta & Merkez Ofis */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <InfoCard
            icon={<Mail className="h-6 w-6" />}
            title="E-posta"
            lines={["info@ortadoguelektrik.com", "1 iş günü içinde dönüş"]}
            delayMs={(d += step)}
          />
          <InfoCard
            icon={<MapPin className="h-6 w-6" />}
            title="Merkez Ofis"
            lines={["Ahi Mesut Bulvarı, Elvankent", "Etimesgut / Ankara"]}
            delayMs={(d += step)}
          />
        </div>
      </div>

      {/* Animasyon util: SEO-safe (DOM sabit), motion-safe ile kısıtlı */}
      <style jsx global>{`
        @layer utilities {
          @keyframes fadeSlideUp {
            0% {
              opacity: 0;
              transform: translateY(14px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeSlideUp {
            animation: fadeSlideUp 0.7s ease-out both;
          }
        }
      `}</style>
    </main>
  );
}

/* ---------- Revize Kart Bileşeni (kurumsal gri-mavi + SEO-safe animasyon + stagger) ---------- */
function InfoCard({
  icon,
  title,
  lines,
  delayMs = 0,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  delayMs?: number; // ⬅️ sırayla giriş için gecikme
}) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-[#111827]/70  /* koyu gri-mavi taban (slate-900 benzeri) */
        p-6
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        ring-1 ring-black/40
        transition-all duration-500 ease-out
        hover:-translate-y-[6px]
        hover:bg-[#1e293b]/80  /* hover'da bir tık açılıyor (slate-800 tonu) */
        hover:shadow-[0_18px_46px_rgba(0,0,0,0.28)]
        motion-safe:animate-fadeSlideUp
      "
      style={{ animationDelay: `${Math.max(0, delayMs)}ms` }}
    >
      {/* üst ince çizgi parıltı (cyan→indigo kurumsal vurgu) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 right-4 top-0 h-px
                   bg-[linear-gradient(90deg,rgba(34,211,238,.35),rgba(99,102,241,.35))]"
      />

      <div className="relative z-10 flex gap-4">
        {/* ikon kutusu (kurumsal degrade) */}
        <div
          className="
            grid h-12 w-12 shrink-0 place-items-center rounded-xl
            bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-300
            ring-1 ring-white/10
            transition-transform duration-500
            group-hover:rotate-6 group-hover:scale-110
          "
        >
          {icon}
        </div>

        {/* içerik */}
        <div className="transition-all duration-500 group-hover:translate-x-1">
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          <div className="mt-1 space-y-0.5 text-sm text-slate-300">
            {lines.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </div>
      </div>

      {/* alt soft halo (çok hafif, kartın çevresine derinlik) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl
                   bg-[radial-gradient(70%_60%_at_50%_110%,rgba(34,211,238,0.10),transparent_62%)]"
      />
    </div>
  );
}
