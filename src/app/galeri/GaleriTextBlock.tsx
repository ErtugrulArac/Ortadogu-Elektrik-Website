"use client";

export default function GaleriTextBlock() {
  return (
    <div className="w-full bg-black py-12 px-6 pb-20 text-center">
      <h3
        className="text-2xl md:text-3xl font-semibold tracking-tight
                   bg-gradient-to-r from-[#1e40af] via-[#ce0bff] to-[#00d8d8]
                   bg-clip-text text-transparent [-webkit-text-fill-color:transparent]"
      >
        Enerjiyi Geleceğe Taşıyoruz
      </h3>
      <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-neutral-300 leading-relaxed">
        Ortadoğu Elektrik, yalnızca bugünün ihtiyaçlarını karşılamakla kalmaz;
        aynı zamanda geleceğin enerji altyapısını da inşa eder. 
        Galerimizde, projelerimizin her adımını ve güvenilir çözümlerimizi keşfedin.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="#teklif"
          className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full
                     border border-neutral-700 text-white font-medium
                     bg-black shadow-[inset_0_-1px_0_rgba(255,255,255,0.3)]
                     transition-all duration-300 hover:border-neutral-500 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
        >
          <span className="text-lg">{">"}</span>
          Teklif Al
        </a>
      </div>
    </div>
  );
}
