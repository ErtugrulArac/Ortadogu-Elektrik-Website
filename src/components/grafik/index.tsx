// src/components/FeaturesSection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";


type MetricKey = "topraklama" | "kacak" | "kompanzasyon";
type PhaseKey = "KESİF" | "TESİSAT" | "PANO" | "KABUL";


const weekly = [88, 92, 90, 94, 91, 96, 93, 97];

const metricData: Record<
  MetricKey,
  { title: string; value: number; notes: string[] }
> = {
  topraklama: {
    title: "Topraklama",
    value: 96,
    notes: [
      "Topraklama ölçümleri TS EN 62305’e göre yapılır",
      "Ana bara ve eşpotansiyel bağlantılar sıkılık kontrolüyle doğrulanır",
      "Etiketleme, ölçüm tutanakları ve fotoğraflar arşivlenir",
    ],
  },
  kacak: {
    title: "Kaçak Akım",
    value: 91,
    notes: [
      "RCD (30/300 mA) testleri yapılır, açma süreleri kayıt altına alınır",
      "Devre yük dağılımı dengelenir, termal riskler giderilir",
      "Termal kamera taraması raporlanır ve uygunsuzluklar kapatılır",
    ],
  },
  kompanzasyon: {
    title: "Kompanzasyon",
    value: 88,
    notes: [
      "Reaktif güç oranı mevzuat sınırlarının altında tutulur",
      "Kapasitör bank ve kontaktör bakımı yapılır, arızalı elemanlar yenilenir",
      "Reaktif röle/otomasyon ayarları güncellenir ve test edilir",
    ],
  },
};

const phaseNotes: Record<PhaseKey, string[]> = {
  KESİF: [
    "Metraj ve malzeme listesi çıkarılır",
    "Riskli noktalar saha üzerinde işaretlenir",
    "Saha fotoğrafları ve keşif raporu arşivlenir",
  ],
  TESİSAT: [
    "Boru ve kablo kanalları açılır ve tamamlanır",
    "Yangın durdurucu uygulamaları yapılır",
    "Test için geçici enerji hazırlanır, güvenlik kontrolleri yapılır",
  ],
  PANO: [
    "Tip testli panolar yerleştirilir ve mekanik sabitleme yapılır",
    "Etiketleme ve tek-hat şeması panoya asılır",
    "Fonksiyon ve yön testleri gerçekleştirilir, kayıt tutulur",
  ],
  KABUL: [
    "İdare kontrol listesi tüm maddeleri tamamlanır",
    "As-built çizimler ve dokümanlar teslim edilir",
    "Kullanım ve bakım kılavuzları kullanıcıya verilir",
  ],
};


function useMouseVars() {
  const ref = useRef<HTMLDivElement>(null);
  const [vars, setVars] = useState({ px: 50, py: 50, mx: 0, my: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      // normalize: [-1, 1]
      const mx = x / 50 - 1;
      const my = y / 50 - 1;
      setVars({ px: x, py: y, mx, my });
    };

    const onLeave = () => setVars({ px: 50, py: 50, mx: 0, my: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return { ref, vars };
}

function useMagnetic() {
  const ref = useRef<HTMLButtonElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onFrame = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const pull = Math.max(0, 1 - Math.min(dist / 220, 1));
    setT({ x: dx * 0.15 * pull, y: dy * 0.15 * pull });
  };

  const reset = () => setT({ x: 0, y: 0 });

  return { ref, t, onFrame, reset };
}

function TiltCard({
  children,
  accent = "indigo",
}: {
  children: React.ReactNode;
  accent?: "indigo" | "emerald" | "fuchsia" | "cyan";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const reset = () => setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });

  return (
    <div
      ref={ref}
      onMouseLeave={reset}
      onMouseMove={(e) => {
        const el = ref.current!;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const px = (x / r.width) * 2 - 1;
        const py = (y / r.height) * 2 - 1;
        const maxTilt = 7.5;
        const rx = -(py * maxTilt);
        const ry = px * maxTilt;
        setTilt({ rx, ry, gx: (x / r.width) * 100, gy: (y / r.height) * 100 });
      }}
      className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_28px_rgba(2,6,23,0.06)] transition-transform duration-200 will-change-transform hover:-translate-y-1.5"
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
    >

      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={
          {
            background: `radial-gradient(420px 320px at ${tilt.gx}% ${tilt.gy}%, rgba(99,102,241,0.12), rgba(236,72,153,0.10) 40%, rgba(16,185,129,0.08) 70%, transparent 75%)`,
            mask: "linear-gradient(#000, transparent 65%)",
            WebkitMask: "linear-gradient(#000, transparent 65%)",
          } as React.CSSProperties
        }
      />


      <div
        className={`absolute left-5 right-5 top-0 h-[2px] rounded-full opacity-80 ${accent === "indigo"
            ? "bg-gradient-to-r from-indigo-500 to-indigo-300"
            : accent === "emerald"
              ? "bg-gradient-to-r from-emerald-500 to-emerald-300"
              : accent === "fuchsia"
                ? "bg-gradient-to-r from-fuchsia-500 to-fuchsia-300"
                : "bg-gradient-to-r from-cyan-500 to-cyan-300"
          }`}
      />
      {children}
    </div>
  );
}


export default function FeaturesSection() {
  const [openMetric, setOpenMetric] = useState<MetricKey | null>(null);
  const [openPhase, setOpenPhase] = useState<PhaseKey | null>(null);
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  const { ref: sectionRef, vars } = useMouseVars();
  const cta = useMagnetic();

  const parallax = (m = 1) => ({
    transform: `translate3d(${(vars.mx * 12 * m).toFixed(1)}px, ${(vars.my * 9 * m).toFixed(1)}px, 0)`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-18 md:py-24"
      style={
        {

          ["--px" as any]: `${vars.px}%`,
          ["--py" as any]: `${vars.py}%`,
        } as React.CSSProperties
      }
    >

      <div
        className="pointer-events-none absolute inset-0 -z-20 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(620px 460px at var(--px) var(--py), rgba(99,102,241,0.09), rgba(236,72,153,0.06) 38%, rgba(16,185,129,0.05) 58%, transparent 70%)",
        }}
      />


      <div
        className="pointer-events-none absolute -top-40 -left-28 size-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-3xl -z-30"
        style={parallax(-0.6)}
      />
      <div
        className="pointer-events-none absolute -bottom-48 -right-32 size-[580px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.16),transparent_60%)] blur-3xl -z-30"
        style={parallax(0.5)}
      />
      <div
        className="pointer-events-none absolute -bottom-16 left-1/3 size-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.16),transparent_60%)] blur-3xl -z-30"
        style={parallax(0.3)}
      />

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="text-center" style={parallax(0.2)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm backdrop-blur">
            Ortadoğu Elektrik
            <span className="mx-1 size-1.5 rounded-full bg-emerald-500" />
            Güvenli & Modern Altyapı
          </span>

          <h2 className="mt-4 text-[34px] leading-[1.05] font-extrabold text-slate-900 sm:text-[44px] md:text-[56px]">
            Elektriği{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-600 bg-clip-text text-transparent">
              etkileşimle
            </span>{" "}
            yönetmenin yalın yolu
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[13px] text-slate-600 md:text-[14px]">
            Keşiften kabule; ölçüm, raporlama ve izlenebilir süreçlerle projelerinizi güvenle yönetin. Aşağıdaki
            kartlar ve grafikler imlecinize anlık tepki verir.
          </p>

          <div className="mt-6 flex items-center justify-center">
            <a
              href="/iletisim#temsilci" 
              className="group relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_28px_rgba(2,6,23,0.28)]"
              style={{ transform: `translate3d(${cta.t.x}px, ${cta.t.y}px, 0)` }}
              onMouseMove={cta.onFrame}
              onMouseLeave={cta.reset}
            >
              Teklif Al
              <svg
                viewBox="0 0 24 24"
                className="size-4 transition group-hover:translate-x-0.5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
              </svg>
              <span className="pointer-events-none absolute inset-0 rounded-full ring-0 ring-emerald-400/0 transition group-hover:ring-[3px] group-hover:ring-emerald-400/40" />
            </a>
          </div>
        </div>


        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

          <TiltCard accent="indigo">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <span className="grid size-8 place-items-center rounded-xl bg-indigo-100 text-indigo-600">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                      <path d="M3 5h18v3H3zM6 10h12v4H6zM9 16h6v3H9z" />
                    </svg>
                  </span>
                  Şantiye Akışı
                </div>
                <span className="rounded-lg bg-slate-100 px-2 py-1 text-[11px] text-slate-600">Gerçek Zamanlı</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2">
                {(["KESİF", "TESİSAT", "PANO", "KABUL"] as PhaseKey[]).map((t) => {
                  const active = openPhase === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setOpenPhase(active ? null : t)}
                      type="button"
                      aria-expanded={active}
                      className={`group relative w-full min-w-0 rounded-xl border px-4 py-2.5 text-center text-xs font-medium outline-none transition ${active ? "border-indigo-300 bg-indigo-50" : "border-slate-200 bg-white hover:bg-slate-50"
                        } focus-visible:ring-2 focus-visible:ring-indigo-400`}
                    >
                      <span className="relative z-10">{t}</span>
                      <span
                        className={`absolute left-1/2 bottom-1 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-300 ${active ? "w-3/4" : "group-hover:w-1/2"
                          }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openPhase ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  {openPhase && (
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white/90 p-4 backdrop-blur">
                      <div className="mb-2 text-sm font-semibold text-slate-800">{openPhase} – Detay</div>
                      <ul className="space-y-1 list-disc pl-5 text-[13px] text-slate-600">
                        {phaseNotes[openPhase].map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-600">
                Her etap şeffaf; keşiften kabule süreçler Ortadoğu Elektrik standartlarıyla izlenir ve raporlanır.
              </p>
            </div>
          </TiltCard>


          <TiltCard accent="fuchsia">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <span className="grid size-8 place-items-center rounded-xl bg-violet-100 text-violet-600">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                      <path d="M12 3a6 6 0 0 1 6 6v2h3v10H3V11h3V9a6 6 0 0 1 6-6z" />
                    </svg>
                  </span>
                  Altyapı Kalite Kontrol
                </div>
                <span className="rounded-lg bg-slate-100 px-2 py-1 text-[11px] text-slate-600">Standartlara Uygun</span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {(Object.keys(metricData) as MetricKey[]).map((k) => {
                  const m = metricData[k];
                  const active = openMetric === k;
                  return (
                    <button
                      key={k}
                      onClick={() => setOpenMetric(active ? null : k)}
                      type="button"
                      aria-expanded={active}
                      className={`group/metric w-full min-w-0 rounded-2xl border p-3 text-left outline-none transition ${active
                          ? "border-violet-300 bg-violet-50 shadow-[0_8px_26px_rgba(124,58,237,0.15)]"
                          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(2,6,23,0.07)]"
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="truncate text-[12px] text-slate-600">{m.title}</div>
                        <div className="text-xs font-semibold text-slate-800">{m.value}%</div>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-[width] duration-500 group-hover/metric:opacity-95"
                          style={{ width: `${m.value}%` }}
                        />
                      </div>
                      <div className="mt-2 text-[11px] text-slate-500">Detay için tıkla</div>
                    </button>
                  );
                })}
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openMetric ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  {openMetric && (
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white/90 p-4 backdrop-blur">
                      <div className="mb-2 text-sm font-semibold text-slate-800">
                        {metricData[openMetric].title} – Detay
                      </div>
                      <ul className="space-y-1 list-disc pl-5 text-[13px] text-slate-600">
                        {metricData[openMetric].notes.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-600">
                Tüm kontroller TSE ve uluslararası standartlara uygun yürütülür; kayıtlar denetime hazır tutulur.
              </p>
            </div>
          </TiltCard>


          <TiltCard accent="emerald">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <span className="grid size-8 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                      <path d="M21 7H3l7 7v4l4-2v-2l7-7z" />
                    </svg>
                  </span>
                  Operasyon Şeffaflığı
                </div>
                <span className="rounded-lg bg-slate-100 px-2 py-1 text-[11px] text-slate-600">Canlı Takip</span>
              </div>


              <div className="mt-6 rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Haftalık İlerleme</span>
                  <span>Son 8 Hafta</span>
                </div>

                <div className="mt-3 grid grid-cols-8 items-end gap-2">
                  {weekly.map((val, i) => {
                    const prev = i === 0 ? val : weekly[i - 1];
                    const up = val >= prev;
                    const active = openWeek === i;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setOpenWeek(active ? null : i)}
                        className="group/bar relative flex flex-col items-center gap-1 outline-none"
                        aria-label={`Hafta ${i + 1} ${val}%`}
                        aria-expanded={active}
                      >
                        <div
                          className={`h-24 w-5 overflow-hidden rounded-md bg-slate-100 ring-offset-2 transition ${active ? "ring-2 ring-emerald-400" : "ring-0"
                            }`}
                        >
                          <div
                            className={`h-full w-full origin-bottom rounded-md ${up
                                ? "bg-gradient-to-t from-emerald-500 to-cyan-500"
                                : "bg-gradient-to-t from-fuchsia-500 to-indigo-500"
                              } animate-[grow_900ms_ease-out]`}
                            style={{ transform: `scaleY(${val / 100})` }}
                          />
                        </div>
                        <div
                          className={`flex items-center gap-0.5 text-[10px] ${up ? "text-emerald-600" : "text-fuchsia-600"
                            }`}
                        >
                          <svg viewBox="0 0 24 24" className="size-3" fill="currentColor" aria-hidden="true">
                            {up ? <path d="M12 5l7 7H5l7-7z" /> : <path d="M12 19l7-7H5l7 7z" />}
                          </svg>
                          {val}%
                        </div>

                        <span className="pointer-events-none absolute -top-9 translate-y-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-700 opacity-0 shadow-sm transition-all duration-200 group-hover/bar:-translate-y-0 group-hover/bar:opacity-100">
                          Hafta {i + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openWeek !== null ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  {openWeek !== null && (
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white/90 p-4 text-[13px] text-slate-700 backdrop-blur">
                      <div className="mb-1 text-sm font-semibold text-slate-800">
                        Hafta {openWeek + 1} – Durum Özeti
                      </div>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>İlerleme oranı: {weekly[openWeek]}%</li>
                        <li>
                          Önceki haftaya göre{" "}
                          {weekly[openWeek] >= (openWeek ? weekly[openWeek - 1] : weekly[openWeek]) ? "artış" : "azalış"}{" "}
                          var.
                        </li>
                        <li>Etap kabulleri ve teslim tarihleri programla uyumlu.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-600">
                Plan–gerçekleşen farkları haftalık izlenir; teslim tarihleri ve saha ihtiyaçları zamanında koordine edilir.
              </p>
            </div>
          </TiltCard>
        </div>

        {/* alt özellikler */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              iconBg: "bg-indigo-100 text-indigo-600",
              title: "Modern Tasarım",
              desc: "Sade tipografi, yumuşak gölgeler, interaktif parıltılar.",
            },
            {
              iconBg: "bg-violet-100 text-violet-600",
              title: "Güvenilir Altyapı",
              desc: "Standartlara uygun malzeme, izlenebilir kalite kontrol.",
            },
            {
              iconBg: "bg-emerald-100 text-emerald-600",
              title: "Zamanında Teslim",
              desc: "Planlı ilerleme ve etap yönetimiyle tam zamanında.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_8px_30px_rgba(2,6,23,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]"
              style={parallax(0.3 + i * 0.2)}
            >
              <div className="flex items-center gap-3">
                <span className={`grid size-9 place-items-center rounded-xl ${f.iconBg}`}>
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 3l9 4-9 4-9-4 9-4zm9 7l-9 4-9-4v7l9 4 9-4v-7z" />
                  </svg>
                </span>
                <div className="font-semibold text-slate-900">{f.title}</div>
              </div>
              <p className="mt-3 text-[13px] leading-6 text-slate-600">{f.desc}</p>
              <span className="absolute bottom-6 left-6 h-0.5 w-10 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500 transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes grow {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
    </section>
  );
}
