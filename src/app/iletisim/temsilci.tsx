"use client";

import { PhoneCall, MessageCircle, Clock, ShieldCheck, User2 } from "lucide-react";
import React from "react";

type Props = {
  ad?: string;
  unvan?: string;
  tel?: string;
  whatsapp?: string; // "905..." (+ yok)
  saat?: string;
  yanit?: string;
  durum?: "online" | "meşgul" | "offline";
};

export default function MusteriTemsilcisi({
  ad = "Büşra Yıldız",
  unvan = "Müşteri Temsilcisi",
  tel = "+90 555 555 55 55",
  whatsapp = "905307464899",
  saat = "Hafta içi 09:00 – 18:00",
  yanit = "Ortalama yanıt: 15 dk",
  durum = "online",
}: Props) {
  const durumRenk =
    durum === "online" ? "bg-emerald-500" : durum === "meşgul" ? "bg-amber-500" : "bg-neutral-500";
  const durumYazi = durum === "online" ? "Müsait" : durum === "meşgul" ? "Meşgul" : "Çevrimdışı";

  return (
    <section
      aria-label="Müşteri Temsilcisi"
      className="mx-auto w-[92%] max-w-5xl bg-transparent motion-safe:animate-fadeSlideUp"
    >
      <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-transparent shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-[4px] hover:shadow-[0_14px_46px_rgba(0,0,0,0.32)]">
        <div className="relative z-10 grid gap-6 p-6 md:grid-cols-[1fr,1.2fr] md:p-8">
          {/* SOL BLOK */}
          <div className="flex items-start gap-4 motion-safe:animate-fadeSlideUp [animation-delay:120ms]">
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600/60 to-indigo-700/60 ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                <User2 className="h-8 w-8 text-white/90" />
              </div>
              <span
                className={`absolute -right-1 -bottom-1 h-3.5 w-3.5 rounded-full ring-2 ring-transparent ${durumRenk}`}
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="truncate text-lg font-semibold text-white">{ad}</h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neutral-200">
                  <ShieldCheck className="h-3 w-3" />
                  {unvan}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-neutral-300">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5">
                  <span className={`h-2 w-2 rounded-full ${durumRenk}`} />
                  {durumYazi}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {saat}
                </span>
              </div>

              {/* yanıt süresi + ARA butonu */}
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <p className="text-sm text-neutral-300/90">{yanit}</p>
                <a
                  href={`tel:${tel.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1.5 text-xs font-medium text-cyan-100 hover:bg-cyan-400/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 sm:px-3 sm:py-2 sm:text-sm transition"
                >
                  <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Ara
                </a>
              </div>
            </div>
          </div>

          {/* SAĞ BLOK — WhatsApp formu */}
          <div className="rounded-xl border border-white/10 p-4 md:p-5 bg-transparent motion-safe:animate-fadeSlideUp [animation-delay:240ms]">
            <h4 className="text-base font-semibold text-white">Hızlı talep gönder</h4>
            <p className="mt-1 text-sm text-neutral-300">
              Bilgilerini doldur, WhatsApp üzerinden hemen ilet.
            </p>

            <form
              className="mt-4 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const musteriAd = String(data.get("musteriAd") || "");
                const musteriSoyad = String(data.get("musteriSoyad") || "");
                const firma = String(data.get("firma") || "");
                const konu = String(data.get("konu") || "");
                const telInput = String(data.get("telefon") || "");

                const mesaj = `Merhaba, ben ${musteriAd} ${musteriSoyad} (${firma}). ${konu} hakkında bilgi almak istiyorum. Telefon numaram: ${telInput}`;
                const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mesaj)}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              <label className="grid gap-1 text-sm">
                <span className="text-neutral-300">Ad</span>
                <input
                  name="musteriAd"
                  required
                  placeholder="Adınız"
                  className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </label>

              <label className="grid gap-1 text-sm">
                <span className="text-neutral-300">Soyad</span>
                <input
                  name="musteriSoyad"
                  required
                  placeholder="Soyadınız"
                  className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </label>

              <label className="grid gap-1 text-sm">
                <span className="text-neutral-300">Firma</span>
                <input
                  name="firma"
                  placeholder="Firmanız (opsiyonel)"
                  className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </label>

              <label className="grid gap-1 text-sm">
                <span className="text-neutral-300">Konu</span>
                <input
                  name="konu"
                  required
                  placeholder="Örn: Kompanzasyon teklifi"
                  className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </label>

              <label className="grid gap-1 text-sm">
                <span className="text-neutral-300">Telefon</span>
                <input
                  name="telefon"
                  type="tel"
                  inputMode="tel"
                  placeholder="+90 5xx xxx xx xx"
                  className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-transparent px-4 py-2.5 text-sm font-semibold text-emerald-50 hover:bg-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition"
                title="Hızlıca iletişime geç"
              >
                <MessageCircle className="h-4 w-4" />
                Hızlıca iletişime geç
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Animasyon util */}
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
    </section>
  );
}
