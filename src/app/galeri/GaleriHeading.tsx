"use client";

export default function GaleriHeading() {
  return (
    <section className="relative pt-4 md:pt-6 pb-10">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semiboldbold tracking-tight
             bg-gradient-to-r from-[#1e40af] via-[#ce0bff] to-[#00d8d8]
             bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]t"
        >
          Tıkla ve Keşfet Ortadogu Elektrik Farkıyla
        </h2>

        {/* ince gradient çizgi */}
        <div className="mx-auto mt-7 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#2f80ed] via-[#22c1ee] to-[#10bdbf]" />

        {/* alt açıklama */}
        <p className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          Profesyonel elektrik taahhüt, bakım ve modern otomasyon çözümleri ile
          konut ve endüstride güvenilir uygulamalar.
        </p>
        <p className="mt-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          Keşiften devreye almaya kadar tüm süreçlerde şeffaf teklif, hızlı teslim
          ve uzun ömürlü altyapı.
        </p>

      </div>
    </section>
  );
}
