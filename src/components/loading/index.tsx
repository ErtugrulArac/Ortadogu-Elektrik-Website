"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
  quote = "Modern yapılar sağlam elektrikle mümkün...",
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  const isControlled = useMemo(() => typeof open === "boolean", [open]);
  const [internalOpen, setInternalOpen] = useState(true);
  const visible = isControlled ? Boolean(open) : internalOpen;

  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Sayfa gerçekten yüklendiğinde %100'e çek
  useEffect(() => {
    if (!visible) return;
    const handleLoad = () => setProgress(100);
    if (document.readyState === "complete") handleLoad();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 99) return p;
        const remain = 100 - p;
        const step = Math.max(1, Math.round(remain * 0.08));
        return Math.min(100, p + step);
      });
    }, 80);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [visible]);

  useEffect(() => {
    if (progress >= 100 && intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  }, [progress]);

  useEffect(() => {
    if (!visible || isControlled) return;
    if (progress >= 100) {
      timeoutRef.current = window.setTimeout(() => {
        setInternalOpen(false);
        onComplete?.();
      }, 320);
    }
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
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
          transition={{ ease: "easeOut", duration: 0.32 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#061022] via-[#0b172c] to-[#0d1f3a]" aria-hidden />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(90,160,255,0.14),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(0,240,180,0.12),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(255,150,110,0.1),transparent_42%)]"
            animate={prefersReducedMotion ? undefined : { opacity: [0.85, 1, 0.85] }}
            transition={prefersReducedMotion ? undefined : { repeat: Infinity, duration: 10, ease: "easeInOut" }}
            aria-hidden
          />

          <div className="relative h-full w-full flex items-center justify-center px-5 sm:px-6">
            <div className="w-full max-w-[420px] mx-auto flex flex-col items-center text-center gap-6 sm:gap-7">
              <div className="relative h-32 w-32 grid place-items-center">
                <motion.div
                  className="absolute inset-2 rounded-full border border-white/22"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.42, 1, 0.42] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  aria-hidden
                />
                <motion.div
                  className="absolute inset-[-6px] rounded-full bg-gradient-to-r from-sky-400/28 via-white/16 to-indigo-400/28 blur-[16px]"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.46, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2.1, ease: "easeInOut" }}
                  aria-hidden
                />

                <div className="relative h-20 w-20 rounded-full bg-white/8 border border-white/14 shadow-[0_12px_36px_rgba(0,0,0,0.32)] grid place-items-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/14 via-transparent to-white/8" aria-hidden />
                  <img
                    src={logoSrc}
                    alt={brand}
                    width={96}
                    height={96}
                    className="relative h-12 w-12 object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.24)]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-semibold text-white/90">{brand}</p>
                <p className="text-white/70 text-sm sm:text-base">Yükleniyor, lütfen bekleyin…</p>
              </div>

              <p className="mt-1 text-center leading-relaxed text-[clamp(13px,3vw,17px)] px-2 bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(80,140,255,0.2)]">
                {quote}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
