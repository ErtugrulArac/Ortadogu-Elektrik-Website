// src/components/KesifCagri.tsx
"use client";

import { PhoneCall, ArrowRight, Phone } from "lucide-react";

type Props = {
  baslik?: string;
  aciklama?: string;
  telGorunen?: string;    
  telArama?: string;     
  whatsapp?: string;      
  wpMesaj?: string;       
  ctaText?: string;       
};

export default function KesifCagri({
  baslik = "Projeniz için keşif mi gerekiyor?",
  aciklama = "Enerji altyapısı, otomasyon ve bakım hizmetlerinde uçtan uca çözümler. Saha keşfi ve teknik yönlendirme için ekibimiz hazır.",
  telGorunen = "+90 531 487 3594",
  telArama = "tel:+905314873594",
  whatsapp = "905307464899",
  wpMesaj = "Merhaba, proje için ücretsiz keşif planlamak istiyorum.",
  ctaText = "Keşif Talep Et",
}: Props) {
  const wpHref = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(wpMesaj)}` : "#";

  return (
    <section className="mx-auto pt-36 max-md:pt-16 py-9 w-[92%] max-w-7xl">
      <div
        className="
          relative overflow-hidden rounded-[22px] border border-white/10
          bg-transparent p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >
        {/* yumuşak dış parıltı */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[28px] bg-[radial-gradient(70%_60%_at_50%_120%,rgba(0,200,255,0.12),transparent_60%)]"
        />

        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          {/* SOL */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-slate-200">
              <PhoneCall className="h-3.5 w-3.5" />
              Ücretsiz keşif planlayalım
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-100 md:text-[40px] md:leading-[1.15]">
              {baslik}
            </h2>

            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300">
              {aciklama}
            </p>
          </div>

          {/* SAĞ */}
          <div className="flex w-full flex-col items-stretch gap-3 md:w-auto md:flex-row md:items-center">
            <a
              href={telArama}
              className="
                inline-flex items-center justify-center gap-2
                rounded-full border border-white/10 bg-white/10
                px-4 py-2.5 text-[13px] font-medium text-slate-200
                ring-1 ring-black/5 hover:bg-white/[0.14] transition
                md:min-w-[230px]
              "
            >
              <Phone className="h-4 w-4 opacity-90" />
              <span className="tabular-nums">{telGorunen}</span>
            </a>

            <a
              href={wpHref}
              target={whatsapp ? "_blank" : undefined}
              rel={whatsapp ? "noopener noreferrer" : undefined}
              className="
                relative inline-flex items-center justify-center gap-2
                rounded-full px-5 py-2.5 text-[13px] font-semibold text-slate-100
                transition md:min-w-[170px]
                before:absolute before:inset-0 before:rounded-full
                before:bg-[linear-gradient(90deg,rgba(16,185,129,.6),rgba(59,130,246,.6))]
                before:p-[1.5px] before:content-['']
                after:absolute after:inset-[1.5px] after:rounded-full
                after:bg-[rgba(2,6,23,.4)] after:content-['']
                hover:before:opacity-95
              "
            >
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="relative z-10 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
