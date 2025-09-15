// src/components/FeatureMockup.tsx
"use client";

export default function FeatureMockup() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20 overflow-hidden">
      {/* üst/alt arka plan gradyanları yok */}

      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-20">
        {/* SOL: metin */}
        <div className="order-2 md:order-1">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-[12px] font-medium text-neutral-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60 dark:text-neutral-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            ORTADOĞU ELEKTRİK
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-neutral-900 dark:text-white">
            Enerji Verisini Anlamlı Aksiyona Dönüştürün
          </h2>

          <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400" />

          <p className="mt-6 max-w-2xl text-[15.5px] leading-7 text-neutral-600 dark:text-neutral-300">
            Sahadan gelen ölçümleri tek panelde toplayın, KPI’ları görün, arızaları anında yakalayın
            ve işletme performansını artırın.
          </p>

          <ul className="mt-6 grid gap-3 text-[15px]">
            {[
              "Gerçek zamanlı izleme ve alarm yönetimi",
              "Yetkilendirme ve iz kayıtları",
              "Raporlama & dışa aktarım",
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-200">
                <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02] hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
            >
              Teklif Al
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M5 12h12M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/hakkimda"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white/70 px-4 py-2.5 text-sm font-medium text-neutral-700 backdrop-blur-md transition hover:bg-white/90 dark:border-white/15 dark:bg-neutral-900/60 dark:text-neutral-200"
            >
              Detaylı Bilgi
            </a>
          </div>
        </div>

        {/* SAĞ: resim — mobilde tamamı görünsün, desktop'ta cover */}
        <div className="order-1 md:order-2">
          <img
            src="/tecrübemock.webp"    // kendi görselin
            alt="SCADA ekran görseli"
            className="
              block w-full max-w-full
              h-auto max-h-[70vh] object-contain object-center
              md:h-[560px] md:max-h-none md:object-cover md:object-center
            "
          />
        </div>
      </div>
    </section>
  );
}
