// src/app/lokasyon/page.tsx
"use client";

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import React from "react";

export default function LokasyonPage() {
  const address = "Bağlıca, 1344. Sk No:8/1 B Blok , 06790 Etimesgut/Ankara";
  const mapsEmbed =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(address) +
    "&z=16&hl=tr&output=embed";
  const mapsOpen =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  return (
    <main className="relative min-h-dvh w-full bg-transparent pt-20 text-slate-200">
      <div className="mx-auto w-[92%] max-w-5xl py-12">
        <h1 className="text-4xl font-bold md:text-5xl">
          <span className="relative inline-block">
            Lokasyon
            <span className="absolute left-0 top-full mt-2 h-[3px] w-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
          </span>
        </h1>

        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-400">
          Merkez ofisimiz Ankara Etimesgut’tadır. Aşağıdaki harita üzerinden konuma
          ulaşabilir ve yol tarifi alabilirsiniz. Randevu için telefonla bize ulaşın.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<MapPin className="h-5 w-5" />}
            title="Adres"
            lines={["Baglica Mahallesi, 1344. Sokak, B BlokNo: 8/1 Etimesgut / ANKARA"]}
          />
          <InfoCard
            icon={<Phone className="h-5 w-5" />}
            title="Telefon"
            lines={["+90 0531 487 35 94", "Hafta içi 09:00 – 18:00"]}
          />
          <InfoCard
            icon={<Clock className="h-5 w-5" />}
            title="Çalışma Saatleri"
            lines={["Pzt–Cum: 09:00–18:00", "Cmt: 09:00–13:00", "Pazar: Kapalı"]}
          />
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
          <div className="relative h-[60vh] w-full">
            <iframe
              src={mapsEmbed}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Ortadoğu Elektrik Ankara Konumu"
            />
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#0b1320]/60 px-4 py-3">
            <span className="text-xs text-slate-400">
              Harita yüklenmezse Google Haritalar’da açın.
            </span>
            <a
              href={mapsOpen}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111827]/70 px-3 py-1.5 text-xs font-medium text-slate-100 hover:bg-[#1e293b]/80"
            >
              Google Haritalar’da aç <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-[#111827]/70 p-5 shadow-md hover:bg-[#1e293b]/80">
      <div className="flex items-center gap-2 text-sky-300">
        {icon}
        <h3 className="text-base font-semibold text-slate-100">{title}</h3>
      </div>
      <div className="mt-2 space-y-1 text-sm text-slate-300">
        {lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </div>
  );
}
