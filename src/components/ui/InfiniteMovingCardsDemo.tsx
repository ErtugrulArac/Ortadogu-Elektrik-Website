"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    // mobile: full-bleed, md+: normal container
    <div className="relative overflow-hidden w-screen max-w-none -mx-[calc(50vw-50%)] md:w-full md:max-w-full md:mx-0">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"         // hız azaltıldı
        pauseOnHover         // desktop'ta hover ile durur
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Ortadoğu Elektrik Ankara projelerinde modern çözümler sunuyor. Elektrik altyapısı ve kompanzasyon sistemlerinde uzman kadrosu ile güven sağlıyor.",
    name: "Ahmet Demir",
    title: "İnşaat Proje Yöneticisi",
  },
  {
    quote:
      "Ortadoğu Elektrik ekibiyle çalışmak harikaydı. Keşiften teslimata kadar şeffaflık ve hızla projemiz zamanında tamamlandı.",
    name: "Elif Kaya",
    title: "Müteahhit",
  },
  {
    quote:
      "Ankara’daki tesisimizde Ortadoğu Elektrik tarafından yapılan enerji ölçüm ve test hizmetleri sayesinde verimliliğimiz %30 arttı.",
    name: "Mehmet Yılmaz",
    title: "Fabrika Sahibi",
  },
  {
    quote:
      "Elektrik altyapımız Ortadoğu Elektrik tarafından yenilendi. Profesyonel yaklaşımları ve hızlı müdahaleleri sayesinde işimiz hiç aksamadı.",
    name: "Zeynep Karaca",
    title: "Restoran İşletmecisi",
  },
  {
    quote:
      "Ortadoğu Elektrik, Ankara genelinde güvenlik ve enerji çözümleriyle fark yaratıyor. Enerji tasarrufu ve güvenliği aynı anda sağladılar.",
    name: "Hakan Aydın",
    title: "Site Yönetimi Başkanı",
  },
];
