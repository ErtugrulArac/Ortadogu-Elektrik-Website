// src/components/PageLoader.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type Props = {
  logoSrc: string;
  brand?: string;
  open?: boolean;
  onComplete?: () => void;
  quote?: string;
};

export default function PageLoader({
  logoSrc,
  brand = "ORTADOĞU ELEKTRİK",
  open,
  onComplete,
  quote = "Sabır, kusursuz işçiliğin sessiz ortağıdır.",
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  // kontrollü / kontrolsüz görünürlük
  const isControlled = useMemo(() => typeof open === "boolean", [open]);
  const [internalOpen, setInternalOpen] = useState(true);
  const visible = isControlled ? (open as boolean) : internalOpen;

  // ilerleme (takılma yok)
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!visible) return;

    if (prefersReducedMotion) {
      setProgress(100);
    } else {
      intervalRef.current = window.setInterval(() => {
        setProgress((p) => {
          if (p >= 99) return p;
          const remain = 100 - p;
          const step = Math.max(1, Math.round(remain * 0.07));
          return Math.min(99, p + step);
        });
      }, 60);
      timeoutRef.current = window.setTimeout(() => setProgress(100), 1400);
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [visible, prefersReducedMotion]);

  useEffect(() => {
    if (!visible || isControlled) return;
    if (progress >= 100) {
      const t = window.setTimeout(() => {
        setInternalOpen(false);
        onComplete?.();
      }, 320);
      return () => window.clearTimeout(t);
    }
  }, [progress, visible, isControlled, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          className="fixed inset-0 z-[9999] text-white overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.28 }}
        >
          {/* arka plan */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#05060d] via-[#0c1224] to-[#0d1a33]" aria-hidden />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(73,149,255,0.18),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(0,241,183,0.16),transparent_38%),radial-gradient(circle_at_45%_85%,rgba(255,147,104,0.12),transparent_40%)]"
            animate={prefersReducedMotion ? undefined : { opacity: [0.9, 1, 0.9] }}
            transition={prefersReducedMotion ? undefined : { repeat: Infinity, duration: 9.5, ease: "easeInOut" }}
            aria-hidden
          />
          <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(120deg,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(60deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:44px_44px]" aria-hidden />

          {/* içerik */}
          <div className="relative h-full w-full flex items-center justify-center px-5 sm:px-6">
            <div className="w-full max-w-[1120px] space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-white/80 uppercase tracking-[0.3em] text-xs sm:text-sm">{brand}</div>
                <div className="text-white/60 text-sm">Yükleme ilerlemesi: {Math.min(100, Math.round(progress))}%</div>
              </div>

              <div className="grid gap-6 lg:gap-7 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] overflow-hidden">
                  <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-5 sm:gap-6">
                      <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.35)] grid place-items-center">
                        <img
                          src={logoSrc}
                          alt={brand}
                          width={96}
                          height={96}
                          className="h-12 w-12 sm:h-14 sm:w-14 object-contain drop-shadow-[0_0_24px_rgba(255,255,255,0.22)]"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <p className="text-white text-lg sm:text-xl font-semibold tracking-tight">Sayfa hazırlanıyor</p>
                        <p className="text-white/70 text-sm sm:text-base">Veriler toparlanıyor, içerikler optimize ediliyor. Az kaldı.</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="relative h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-sky-300 via-white to-emerald-200"
                          style={{ width: `${Math.min(100, progress)}%` }}
                          animate={
                            prefersReducedMotion
                              ? undefined
                              : { filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }
                          }
                          transition={prefersReducedMotion ? undefined : { repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                        />
                        <motion.div
                          className="absolute inset-0 opacity-60 bg-[linear-gradient(90deg,rgba(255,255,255,0.35)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0.35)_75%,transparent_75%,transparent)] bg-[length:44px_44px]"
                          animate={
                            prefersReducedMotion
                              ? undefined
                              : { backgroundPosition: ["0% 0%", "100% 0%"] }
                          }
                          transition={prefersReducedMotion ? undefined : { repeat: Infinity, duration: 1.8, ease: "linear" }}
                          aria-hidden
                        />
                      </div>
                      <div className="flex items-center justify-between text-white/65 text-xs sm:text-sm">
                        <span>Bağlantılar kontrol ediliyor</span>
                        <span className="tabular-nums">{Math.min(100, Math.round(progress))}%</span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-white/75 text-sm">
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 space-y-1">
                        <p className="text-white font-medium">Ön bellek</p>
                        <p className="text-white/70 text-xs">Kaynaklar hazırlanıyor.</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 space-y-1">
                        <p className="text-white font-medium">Güvenlik</p>
                        <p className="text-white/70 text-xs">Bağlantı güvenliği doğrulanıyor.</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 space-y-1">
                        <p className="text-white font-medium">Medya</p>
                        <p className="text-white/70 text-xs">Görseller optimize ediliyor.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.3)] overflow-hidden">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-300/25 via-sky-300/18 to-indigo-400/18 blur-3xl" aria-hidden />
                  <div className="relative space-y-4">
                    <p className="text-white text-lg sm:text-xl font-semibold">Hazır olana kadar</p>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      {quote}
                    </p>
                    <div className="flex flex-col gap-2 text-white/70 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden /> Stabil bağlantı kuruluyor.
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-sky-300" aria-hidden /> İçerik önbelleği eşitleniyor.
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-300" aria-hidden /> Son kontroller yapılıyor.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
