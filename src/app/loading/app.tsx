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
          className="fixed inset-0 z-[9999] bg-black text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.28 }}
        >
          {/* ▼ Her cihazda tam ortalama */}
          <div className="h-full w-full flex items-center justify-center px-5 sm:px-6">
            <div className="w-full max-w-[min(92vw,760px)] flex flex-col items-center gap-0">
              {/* 1) Dönen halka + logo — metne net boşluk */}
              <div className="relative grid place-items-center mb-12 sm:mb-14 md:mb-16">
                <motion.svg
                  width="256"
                  height="256"
                  viewBox="0 0 208 208"
                  className="absolute w-[190px] h-[190px] sm:w-[210px] sm:h-[210px] md:w-[230px] md:h-[230px] lg:w-[256px] lg:h-[256px]"
                  aria-hidden
                  animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { repeat: Infinity, ease: "linear", duration: 2.4 }
                  }
                >
                  <g transform="translate(4,4)">
                    <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                    <circle
                      cx="100"
                      cy="100"
                      r="96"
                      fill="none"
                      stroke="rgba(255,255,255,0.9)"
                      strokeLinecap="round"
                      strokeWidth="3"
                      strokeDasharray="120 540"
                    />
                  </g>
                </motion.svg>

                <img
                  src={logoSrc}
                  alt={brand}
                  width={128}
                  height={128}
                  className="relative h-[92px] w-[92px] sm:h-[104px] sm:w-[104px] md:h-[116px] md:w-[116px] lg:h-[128px] lg:w-[128px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.16)]"
                />
              </div>

              {/* 2) Başlık */}
              <div className="text-center">
                <p className="uppercase tracking-wide text-white/90 text-[clamp(16px,3.1vw,20px)] font-semibold">
                  {brand}
                </p>
                {/* 3) Alt satır */}
                <p className="text-white/65 text-[clamp(12px,2.6vw,14px)] mt-1">
                  Hazırlanıyor, lütfen bekleyin…
                </p>
              </div>

              {/* 4) Progress bar + yüzde */}
              <div className="mt-6 sm:mt-7 md:mt-8 w-[86vw] max-w-[520px]">
                <div className="relative h-1.5 w-full rounded-full bg-white/10 overflow-hidden mx-auto">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-white transition-[width] duration-200 ease-out"
                    style={{ width: `${Math.min(100, progress)}%` }}
                  />
                </div>
                <div className="mt-2 text-right text-white/70 tabular-nums text-[clamp(11px,2.2vw,13px)]">
                  {Math.min(100, Math.round(progress))}%
                </div>
              </div>

              {/* 5) Özlü söz */}
              <p className="mt-9 sm:mt-10 text-center leading-relaxed text-[clamp(13px,3vw,18px)] px-2 bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(80,140,255,0.25)]">
                {quote}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
