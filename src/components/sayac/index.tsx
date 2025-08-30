"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: JSX.Element;
};

const icons = {
  users: (
    <svg
      viewBox="0 0 24 24"
      className="size-5 sm:size-6 md:size-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  check: (
    <svg
      viewBox="0 0 24 24"
      className="size-5 sm:size-6 md:size-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  // 📍 Saha Ziyareti
  mapPin: (
    <svg
      viewBox="0 0 24 24"
      className="size-5 sm:size-6 md:size-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  // 📊 Periyodik Test & Ölçüm
  activity: (
    <svg
      viewBox="0 0 24 24"
      className="size-5 sm:size-6 md:size-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

const STATS: Stat[] = [
  { label: "Memnun Müşteri", value: 1800, suffix: "+", icon: icons.users },
  { label: "Tamamlanan Proje ve Hizmet", value: 350, suffix: "+", icon: icons.check },
  { label: "Saha Ziyareti", value: 1245, suffix: "+", icon: icons.mapPin },
  { label: "Periyodik Test & Ölçüm", value: 543, suffix: "+", icon: icons.activity },
];

function useCountUp(target: number, start: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (!start) return;
    if (prefersReduced) {
      setValue(target);
      return;
    }
    const animate = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const p = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [start, target, durationMs, prefersReduced]);

  return value;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b1320] text-white py-20 md:py-24 px-6 md:px-12"
      aria-label="Ortadoğu Elektrik istatistikleri"
    >
      {/* Üst arka plan efektleri */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-gradient-to-b from-blue-500/40 via-indigo-600/30 to-transparent blur-2xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,rgba(59,130,246,0.25),transparent_50%),radial-gradient(circle_at_80%_-10%,rgba(99,102,241,0.28),transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:18px_18px] opacity-20"
      />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center md:text-left mb-14 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Ortadoğu Elektrik <br /> Müşteri Memnuniyetinde Lider Marka
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-balance text-sm md:text-base leading-relaxed text-white/70 mx-auto md:mx-0">
            Kaliteli hizmet ve müşteri memnuniyetini önceliklendiren yaklaşımımızla; güçlü altyapı, uzman ekip ve
            güvenilir çözümler sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {STATS.map((stat, idx) => {
            const current = useCountUp(stat.value, inView, 1200 + idx * 120);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22, scale: 0.98 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/8 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-indigo-400/0 opacity-70" />

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-2.5">
                    <span className="text-blue-300">{stat.icon}</span>
                  </div>
                  <div className="text-right md:text-left ml-auto md:ml-0">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none tracking-tight">
                      <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                        {new Intl.NumberFormat("tr-TR").format(current)}
                      </span>
                      {stat.suffix ? (
                        <span className="text-white/70 ml-0.5">{stat.suffix}</span>
                      ) : null}
                    </div>
                  </div>
                </div>

                <p className="mt-2 sm:mt-3 md:mt-4 text-[11px] sm:text-xs md:text-sm text-white/75">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
