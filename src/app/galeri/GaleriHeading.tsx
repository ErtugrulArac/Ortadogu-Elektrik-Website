
"use client";


export default function GaleriHeading() {
  return (
    <section className="relative pt-4 md:pt-6 pb-10">
      <div className="mx-auto max-w-4xl px-4 text-center overflow-visible">
        <h2
          className="pb-1 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]
                     bg-gradient-to-r from-[#1e40af] via-[#ce0bff] to-[#00d8d8]
                     bg-clip-text text-transparent [-webkit-text-fill-color:transparent]"
        >
          Tıkla ve Keşfet Ortadoğu Elektrik Farkıyla
        </h2>

        {/* ince gradient çizgi */}
        <div className="mx-auto mt-7 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#2f80ed] via-[#22c1ee] to-[#10bdbf]" />

        {/* alt açıklama */}
        <p className="mt-6 text-base leading-relaxed text-neutral-300 dark:text-neutral-300">
          Profesyonel elektrik taahhüt, bakım ve modern otomasyon çözümleri ile
          konut ve endüstride güvenilir uygulamalar.
        </p>

        <p className="mt-2 text-base leading-relaxed text-neutral-300 dark:text-neutral-300">
          Keşiften devreye almaya kadar tüm süreçlerde şeffaf teklif, hızlı teslim
          ve uzun ömürlü altyapı. Ortadoğu Elektrik, profesyonel elektrik taahhüt hizmetleri,
          kapsamlı bakım çalışmaları ve modern otomasyon çözümleri ile konut ve endüstri
          alanlarında güvenilir uygulamalar sunar. Müşterilerimize yalnızca enerji sağlamakla
          kalmıyor, aynı zamanda verimliliği artıran, sürdürülebilirliği destekleyen ve uzun
          vadeli güvenlik sağlayan çözümler geliştiriyoruz. <br /><br /> Keşif aşamasından devreye alma
          sürecine kadar tüm adımlarda şeffaf tekliflendirme, zamanında ve hızlı teslimat
          ile uzun ömürlü altyapı taahhüdümüzü koruyoruz. Her projede kalite, güven ve
          sürdürülebilir değer üretmek temel ilkemizdir.
        </p>
      </div>
      <div>
      
      </div>
    </section>
  );
}
