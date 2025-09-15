// components/WhoWeAreEnelStyleTR.tsx
import React from "react";

export default function WhoWeAreEnelStyleTR() {
  return (
    <section className="bg-white text-neutral-900 py-14 md:py-20">
      {/* Sol tarafa yaslı ama kenara yapışmasın */}
      <div className="mx-auto w-[92%] max-w-5xl text-left pl-4 md:pl-6 lg:pl-8">
        {/* Negatif margin sadece md+ ekranlarda aktif */}
        <div className="ml-0 md:-ml-8 lg:-ml-14 xl:-ml-20">
          <p className="text-sm font-bold text-neutral-500">- Ortadoğu Elektrik - </p>

          <h2 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            Enerjinin yüzünü değiştiren
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              elektrik şirketi
            </span>
          </h2>

          <div className="mt-5 max-w-3xl space-y-4 text-neutral-700 leading-relaxed">
            <p>
              Ortadoğu Elektrik, pek çok şirket gibi bir enerji hizmeti sağlayıcısı olarak yola çıktı.
              Zamanla toplumu besleyen kapasitemiz büyüdükçe, yenilikçi teknolojilere olan ilgimiz de arttı.
            </p>
            <p>
              Küresel enerji sorunları daha görünür oldukça amacımız da netleşti: güvenilir altyapılar kurmak,
              elektrifikasyonu hızlandırmak ve her ölçekte projeye sürdürülebilir değer katmak.
            </p>
          </div>
        </div>

        {/* Kartlar */}
        <div className="mt-24 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          <article className="flex items-start gap-4">
            <span
              className="mt-0.5 inline-flex shrink-0 h-12 w-12 md:h-14 md:w-14 items-center justify-center"
              aria-hidden
            >
              <img
                src="/iconlar/hikayemiz.webp"
                alt=""
                className="object-contain h-9 w-9 md:h-11 md:w-11"
                loading="lazy"
                decoding="async"
                width={24}
                height={24}
                draggable={false}
              />
            </span>
            <div>
              <h3 className="text-lg font-bold">Hikâyemiz</h3>
              <p className="mt-1 text-sm text-neutral-700">
                İlk olarak Türkiye’de, ardından bölgede; enerjimiz insan gelişimine güç kattı.
              </p>
              <a
                href="/hakkimda"
                className="group mt-2 inline-flex items-center gap-1 text-sm font-semibold
                           bg-gradient-to-r from-indigo-600 via-emerald-600 to-cyan-600
                           bg-clip-text text-transparent underline-offset-4
                           transition-all duration-200 hover:underline hover:opacity-95 hover:translate-x-0.5"
              >
                Daha fazla keşfet
                <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                  ›
                </span>
              </a>
            </div>
          </article>

          <article className="flex items-start gap-4">
            <span
              className="mt-0.5 inline-flex shrink-0 h-12 w-12 md:h-14 md:w-14 items-center justify-center"
              aria-hidden
            >
              <img
                src="/iconlar/vizyon.webp"
                alt=""
                className="object-contain h-10 w-10 md:h-12 md:w-12"
                loading="lazy"
                decoding="async"
                width={24}
                height={24}
                draggable={false}
              />
            </span>
            <div>
              <h3 className="text-lg font-bold">Vizyon</h3>
              <p className="mt-1 text-sm text-neutral-700">
                İhtiyaçları karşılayan elektrifikasyonu hızlandırmak ve daha iyi bir dünya inşa etmek.
              </p>
              <a
                href="/hakkimda"
                className="group mt-2 inline-flex items-center gap-1 text-sm font-semibold
                           bg-gradient-to-r from-indigo-600 via-emerald-600 to-cyan-600
                           bg-clip-text text-transparent underline-offset-4
                           transition-all duration-200 hover:underline hover:opacity-95 hover:translate-x-0.5"
              >
                Daha fazla keşfet
                <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                  ›
                </span>
              </a>
            </div>
          </article>

          <article className="flex items-start gap-4">
            <span
              className="mt-0.5 inline-flex shrink-0 h-12 w-12 md:h-14 md:w-14 items-center justify-center"
              aria-hidden
            >
              <img
                src="/iconlar/lokasyon.webp"
                alt=""
                className="object-contain h-10 w-10 md:h-12 md:w-12"
                loading="lazy"
                decoding="async"
                width={24}
                height={24}
                draggable={false}
              />
            </span>
            <div>
              <h3 className="text-lg font-bold">Lokasyonlar</h3>
              <p className="mt-1 text-sm text-neutral-700">
                Avrupa’dan Orta Doğu’ya uzanan bölgesel erişim; Türkiye’de Ankara, İstanbul ve Kocaeli merkezli operasyon.
              </p>
              <a
                href="/hakkimda"
                className="group mt-2 inline-flex items-center gap-1 text-sm font-semibold
                           bg-gradient-to-r from-indigo-600 via-emerald-600 to-cyan-600
                           bg-clip-text text-transparent underline-offset-4
                           transition-all duration-200 hover:underline hover:opacity-95 hover:translate-x-0.5"
              >
                Daha fazla keşfet
                <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                  ›
                </span>
              </a>
            </div>
          </article>

          <article className="flex items-start gap-4">
            <span
              className="mt-0.5 inline-flex shrink-0 h-12 w-12 md:h-14 md:w-14 items-center justify-center"
              aria-hidden
            >
              <img
                src="/iconlar/yönetimekibi.webp"
                alt=""
                className="object-contain h-10 w-10 md:h-12 md:w-12"
                loading="lazy"
                decoding="async"
                width={34}
                height={34}
                draggable={false}
              />
            </span>
            <div>
              <h3 className="text-lg font-bold">Yönetim Ekibi</h3>
              <p className="mt-1 text-sm text-neutral-700">
                Organizasyon, Yönetim Kurulu ve fonksiyonel birimlerimiz; küresel birikim ve yerel çeviklikle çalışır.
              </p>
              <a
                href="/hakkimda"
                className="group mt-2 inline-flex items-center gap-1 text-sm font-semibold
                           bg-gradient-to-r from-indigo-600 via-emerald-600 to-cyan-600
                           bg-clip-text text-transparent underline-offset-4
                           transition-all duration-200 hover:underline hover:opacity-95 hover:translate-x-0.5"
              >
                Daha fazla keşfet
                <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                  ›
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
