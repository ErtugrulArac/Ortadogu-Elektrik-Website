// src/components/FeaturesSection.tsx
"use client";
import React, { useState } from "react";

type MetricKey = "topraklama" | "kacak" | "kompanzasyon";
type PhaseKey = "KESİF" | "TESİSAT" | "PANO" | "KABUL";

export default function FeaturesSection() {
  const weekly = [88, 92, 90, 94, 91, 96, 93, 97];

  const [openMetric, setOpenMetric] = useState<MetricKey | null>(null);
  const [openPhase, setOpenPhase] = useState<PhaseKey | null>(null);
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  const metricData: Record<MetricKey, { title: string; value: number; notes: string[] }> = {
    topraklama: { title: "Topraklama", value: 96, notes: ["Ölçüm referansı: TS EN 62305", "Ana bara bağlantıları kontrol edildi", "Etiketleme ve dokümantasyon tamam"] },
    kacak: { title: "Kaçak Akım", value: 91, notes: ["RCD testleri yapıldı", "Daire devreleri dengeli", "Termal görüntüleme raporu oluşturuldu"] },
    kompanzasyon: { title: "Kompanzasyon", value: 88, notes: ["Reaktif oran limit altında", "Kapasitör bank bakımı yapıldı", "Otomasyon ayarları güncellendi"] },
  };

  const phaseNotes: Record<PhaseKey, string[]> = {
    KESİF: ["Metraj ve malzeme listesi çıkarıldı", "Riske açık noktalar işaretlendi", "Saha fotoğrafları arşivlendi"],
    TESİSAT: ["Boru ve kablo kanalları tamamlandı", "Yangın durdurucu uygulandı", "Test için geçici enerji hazırlandı"],
    PANO: ["Tip testli panolar yerleştirildi", "Etiketleme ve tek-hat şeması asıldı", "Fonksiyon testleri yapıldı"],
    KABUL: ["İdare kontrol listesi tamamlandı", "As-built çizimler teslim edildi", "Kullanım kılavuzları verildi"],
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-24">
      <div className="pointer-events-none absolute -top-32 -left-24 size-[420px] rounded-full bg-gradient-to-tr from-indigo-400/20 via-fuchsia-400/20 to-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 size-[520px] rounded-full bg-gradient-to-tr from-indigo-300/20 via-purple-300/20 to-cyan-300/20 blur-3xl" />

      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="text-center">
          <p className="text-[12px] font-semibold tracking-[0.25em] text-indigo-600 uppercase">Güçlü Özellikler</p>
          <h2 className="mt-3 text-[36px] leading-[1.05] font-extrabold text-slate-900 sm:text-[44px] md:text-[56px]">
            Ortadoğu Elektrik’in öne çıkan{" "}
            <span className="relative inline-grid place-items-center px-2">
              <span className="relative z-10 rounded-2xl bg-indigo-600 px-4 py-1 text-white">özellikleri</span>
              <span className="absolute inset-0 -z-10 rounded-2xl bg-indigo-500/40 blur-xl" />
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-[0_10px_28px_rgba(2,6,23,0.06)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(2,6,23,0.12)]">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                <span className="grid size-8 place-items-center rounded-xl bg-indigo-100 text-indigo-600">
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M3 5h18v3H3zM6 10h12v4H6zM9 16h6v3H9z" /></svg>
                </span>
                Şantiye Akışı
              </div>
              <span className="rounded-lg bg-slate-100 px-2 py-1 text-[11px] text-slate-600">Gerçek Zamanlı</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Günlük İş Planı</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-600">Aktif</span>
                </div>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["KESİF", "TESİSAT", "PANO", "KABUL"] as PhaseKey[]).map((t, i) => {
                    const active = openPhase === t;
                    return (
                      <button
                        key={t}
                        onClick={() => setOpenPhase(active ? null : t)}
                        className={`w-full min-w-0 rounded-lg bg-gradient-to-b from-slate-50 to-white p-3 sm:p-3.5 text-center text-xs sm:text-[11px] font-medium outline-none transition
                        ${i < 2 ? "ring-1 ring-emerald-200" : "ring-1 ring-slate-200"}
                        hover:-translate-y-0.5 hover:ring-indigo-200 focus-visible:ring-2 focus-visible:ring-indigo-400
                        ${active ? "ring-2 ring-indigo-400" : ""}`}
                        type="button"
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Tamamlanma</span>
                  <span className="text-slate-700">72%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                </div>
              </div>
            </div>

            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openPhase ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                {openPhase && (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="mb-2 text-sm font-semibold text-slate-800">{openPhase} – Detay</div>
                    <ul className="space-y-1 list-disc pl-5 text-[13px] text-slate-600">
                      {phaseNotes[openPhase].map((n, i) => <li key={i}>{n}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-600">Kritik yol, ekip planlama ve etap teslimleri tek bakışta yönetilir.</p>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-5 sm:p-6 shadow-[0_10px_28px_rgba(2,6,23,0.06)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(2,6,23,0.12)]">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                <span className="grid size-8 place-items-center rounded-xl bg-violet-100 text-violet-600">
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M12 3a6 6 0 0 1 6 6v2h3v10H3V11h3V9a6 6 0 0 1 6-6z" /></svg>
                </span>
                Altyapı Kalite Kontrol
              </div>
              <span className="rounded-lg bg-slate-100 px-2 py-1 text-[11px] text-slate-600">Standartlara Uygun</span>
            </div>

            {/* FIX: responsive grid + full-width cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(Object.keys(metricData) as MetricKey[]).map((k) => {
                const m = metricData[k];
                const active = openMetric === k;
                return (
                  <button
                    key={k}
                    onClick={() => setOpenMetric(active ? null : k)}
                    className={`w-full min-w-0 rounded-2xl border p-3 sm:p-4 text-left transition outline-none
                    ${active ? "border-violet-300 bg-violet-50 shadow-[0_8px_26px_rgba(124,58,237,0.15)]" : "border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(2,6,23,0.07)]"}`}
                    type="button"
                  >
                    <div className="text-xs sm:text-[12px] text-slate-600 truncate">{m.title}</div>
                    <div className="mt-2 flex items-end gap-2">
                      <div className="h-12 w-full rounded-xl bg-slate-100 p-1">
                        <div className="h-full rounded-lg bg-gradient-to-b from-violet-500 to-indigo-500" style={{ width: `${m.value}%` }} />
                      </div>
                      <div className="text-xs font-semibold text-slate-800">{m.value}%</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* FIX: container keeps detail inside; no overflow on mobile */}
            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openMetric ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                {openMetric && (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="mb-2 text-sm font-semibold text-slate-800">{metricData[openMetric].title} – Detay</div>
                    <ul className="space-y-1 list-disc pl-5 text-[13px] text-slate-600">
                      {metricData[openMetric].notes.map((n, i) => <li key={i}>{n}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-600">TSE ve ilgili yönetmeliklere uygun ölçüm, raporlama ve dokümantasyon.</p>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-[0_10px_28px_rgba(2,6,23,0.06)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(2,6,23,0.12)]">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                <span className="grid size-8 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M21 7H3l7 7v4l4-2v-2l7-7z" /></svg>
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
                      className="flex flex-col items-center gap-1 outline-none"
                      aria-label={`Hafta ${i + 1} ${val}%`}
                    >
                      <div className="h-24 w-5 rounded-md bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full w-full origin-bottom rounded-md ${up ? "bg-gradient-to-t from-emerald-500 to-cyan-500" : "bg-gradient-to-t from-fuchsia-500 to-indigo-500"} animate-[grow_1.1s_ease-out_forwards] ${active ? "ring-2 ring-offset-2 ring-indigo-400" : ""}`}
                          style={{ transform: `scaleY(${val / 100})`, animationDelay: `${i * 110}ms` }}
                        />
                      </div>
                      <div className={`flex items-center gap-0.5 text-[10px] ${up ? "text-emerald-600" : "text-fuchsia-600"}`}>
                        <svg viewBox="0 0 24 24" className="size-3" fill="currentColor">
                          {up ? <path d="M12 5l7 7H5l7-7z" /> : <path d="M12 19l7-7H5l7 7z" />}
                        </svg>
                        {val}%
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openWeek !== null ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                {openWeek !== null && (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 text-[13px] text-slate-700">
                    <div className="mb-1 text-sm font-semibold text-slate-800">Hafta {openWeek + 1} – Durum Özeti</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>İlerleme oranı: {weekly[openWeek]}%</li>
                      <li>Önceki haftaya göre {weekly[openWeek] >= (openWeek ? weekly[openWeek - 1] : weekly[openWeek]) ? "artış" : "azalış"} var.</li>
                      <li>Etap kabulleri ve teslim tarihleri programla uyumlu.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-600">Şantiye ilerlemesi, etap kabulleri ve teslim tarihleri net ve izlenebilir.</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-[0_8px_30px_rgba(2,6,23,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-indigo-100 text-indigo-600">
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M12 3l9 4-9 4-9-4 9-4zm9 7l-9 4-9-4v7l9 4 9-4v-7z" /></svg>
              </span>
              <div className="font-semibold text-slate-900">Modern Tasarım</div>
            </div>
            <p className="mt-3 text-[13px] leading-6 text-slate-600">Sade, hızlı ve erişilebilir arayüz bileşenleriyle kurumsal duruş.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-[0_8px_30px_rgba(2,6,23,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-violet-100 text-violet-600">
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M4 13h16v7H4zM7 4h10v6H7z" /></svg>
              </span>
              <div className="font-semibold text-slate-900">Güvenilir Altyapı</div>
            </div>
            <p className="mt-3 text-[13px] leading-6 text-slate-600">Standartlara uygun malzeme, izlenebilir süreçler ve kalite kontrol.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-[0_8px_30px_rgba(2,6,23,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M12 2a5 5 0 015 5v3h3v12H4V10h3V7a5 5 0 015-5z" /></svg>
              </span>
              <div className="font-semibold text-slate-900">Zamanında Teslim</div>
            </div>
            <p className="mt-3 text-[13px] leading-6 text-slate-600">Planlı ilerleme ve etap yönetimiyle teslim tarihine sadık kalır.</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes grow { to { transform: scaleY(1); } }
      `}</style>
    </section>
  );
}
