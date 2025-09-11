"use client";

import { useEffect, useId, useRef, useState } from "react";

type FaqItem = { q: string; a: string };

export default function FaqSection() {
  const items: FaqItem[] = [
    { q: "Keşif ve teklif süreci nasıl ilerliyor?", a: "Ankara içi keşif genellikle 24–48 saat içinde ücretsiz yapılır. İhtiyaçlar yerinde/uzaktan tespit edilir, metraj ve marka/seri bilgileriyle teknik şartname hazırlanır; iş takvimi ve fiyat kırılımı birlikte sunulur." },
    { q: "Proje teslim süresi nedir?", a: "Küçük tadilat ve daire içi işler 3–10 gün; kompanzasyon/pano imalatı 1–2 hafta; saha aydınlatma ve AG hat işleri 2–4 hafta aralığındadır. Resmî kabul gerektiren işler proje kapsamına göre planlanır ve sözleşmede netleştirilir." },
    { q: "Topraklama ölçümü ve raporlama yapıyor musunuz?", a: "Evet. TS EN 62305 ve TS HD 60364-6 standartlarına göre ölçüm (toprak özgül direnci, süreklilik, paratoner inişleri) gerçekleştirilir; PDF ve ıslak imzalı rapor teslim edilir, kabul dosyasına eklenir." },
    { q: "Kompanzasyon ile reaktif ceza riskini nasıl önlüyorsunuz?", a: "Otomatik kompanzasyon panosu ve akıllı rölelerle hedef cosφ ≥ 0.98 tutulur. Uzaktan izleme opsiyonu ve periyodik bakım ile kondansatör/ kontaktör sağlığı takip edilir; gerekirse aynı gün müdahale edilir." },
    { q: "Kaçak akım koruması ve testleri yapılıyor mu?", a: "Uygun tip ve eşiklerde (30 mA/300 mA) RCD seçimi yapılır, buton testi ve ölçüm cihazı ile periyodik testler uygulanır; termal kamera ile ısınma taraması yapılarak raporlanır." },
    { q: "Garanti ve ödeme koşulları nedir?", a: "Malzemelerde üretici garantisi (genellikle 24 ay), işçilikte 12 ay garanti sağlanır. Ödeme planı standart olarak %40 avans, %40 montaj/imalat, %20 kabul sonrası şeklindedir. Talebe göre bakım sözleşmesi eklenebilir." },

  ];

  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const secId = useId();
  const toggle = (i: number) =>
    setOpenSet(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : (next.clear(), next.add(i));
      return next;
    });

  return (
    <section aria-labelledby={`${secId}-title`} className="mx-auto w-[92%] max-w-5xl py-14 md:py-18">

      <div className="mb-5 flex items-center justify-center">
        <img
          src="sss.webp"
          alt="Sıkça Sorulan Sorular görseli"
          className="h-28 w-auto sm:h-32 md:h-40 object-contain"
        />
      </div>

      <header className="text-center">
        <h2 id={`${secId}-title`} className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          Sıkça Sorulan Sorular
        </h2>
        <p className="mt-4 text-sm md:text-base text-neutral-600">Aklınızdaki sorulara hızlı yanıtlar.</p>
      </header>

      <ul className="mt-10 space-y-4">
        {items.map((item, i) => (
          <FaqRow
            key={i}
            index={i}
            isOpen={openSet.has(i)}
            onToggle={() => toggle(i)}
            item={item}
            sectionId={secId}
          />
        ))}
      </ul>
    </section>
  );
}

function FaqRow({
  index,
  isOpen,
  onToggle,
  item,
  sectionId,
}: {
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  item: FaqItem;
  sectionId: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    const h = contentRef.current?.scrollHeight ?? 0;
    setMaxH(isOpen ? h : 0);
  }, [isOpen, item.a]);

  return (
    <li className="rounded-2xl border border-indigo-200/60">
      <div className="rounded-2xl bg-white">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`${sectionId}-panel-${index}`}
          id={`${sectionId}-button-${index}`}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-5 py-4 text-left"
        >
          <span className="flex-1 text-[15px] md:text-base font-medium text-neutral-900">
            {item.q}
          </span>
          <span
            aria-hidden
            className={`grid size-8 place-items-center rounded-full border border-neutral-300 bg-white transition-transform ${isOpen ? "rotate-45" : ""
              }`}
          >
            <svg viewBox="0 0 24 24" className="size-4 text-neutral-700" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>

        <div
          id={`${sectionId}-panel-${index}`}
          role="region"
          aria-labelledby={`${sectionId}-button-${index}`}
          ref={contentRef}
          style={{ maxHeight: maxH }}
          className="overflow-hidden transition-[max-height] duration-300 ease-out"
        >
          <div className="px-5 pb-5 pt-0 text-[15px] leading-relaxed text-neutral-600">{item.a}</div>
        </div>
      </div>
    </li>
  );
}
