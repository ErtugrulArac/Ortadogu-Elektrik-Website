"use client";

export default function GaleriTextBlock() {
  return (
    <section
      aria-labelledby="galeri-baslik"
      className="w-full px-6 pt-24 sm:pt-32 lg:pt-40 pb-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-white/70 backdrop-blur">
          Portföy • Referans • Proje
        </span>

        {/* Başlık */}
        <h3
          id="galeri-baslik"
          className="relative z-10 mx-auto mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight
                     bg-gradient-to-r from-[#1d4ed8] via-[#b517ff] to-[#00e5ff]
                     bg-clip-text text-transparent [-webkit-text-fill-color:transparent]
                     drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]"
        >
          Projelerimiz & Referanslarımız
        </h3>

        {/* Divider */}
        <div className="relative mx-auto mt-6 h-px w-28">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* Açıklama */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-300">
          Ortadoğu Elektrik; kamu kampüslerinden endüstriyel tesislere uzanan geniş
          bir yelpazede anahtar teslim çözümler sunar. Bu bölümde, tamamladığımız
          projelerden seçkileri ve güveninizi pekiştiren referanslarımızı keşfedebilirsiniz.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="/iletisim"
            className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full
                       border border-neutral-700 text-white font-medium
                       bg-black shadow-[inset_0_-1px_0_rgba(255,255,255,0.3)]
                       transition-all duration-300 hover:border-neutral-500 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            <span className="text-lg" aria-hidden>
              {">"}
            </span>
            Teklif Al
          </a>
        </div>

        {/* Alt not */}
        <p className="mx-auto mt-3 max-w-xl text-xs text-white/55">
          Keşif, projelendirme ve uygulama süreçleri tek elden yönetilir.
        </p>
      </div>
    </section>
  );
}
