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
  quote = "Modern yapılar sağlam elektrikle mümkün...",
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
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.28 }}
        >
          <div className="flex flex-col items-center gap-7 w-full max-w-[340px] mx-auto">
            {/* Minimal animasyonlu logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="rounded-full bg-white/10 p-6 shadow-lg mb-2"
            >
              <motion.img
                src={logoSrc}
                alt={brand}
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
              />
            </motion.div>
            {/* Modern progress bar */}
            <div className="w-full">
              <div className="relative h-2 w-full rounded-full bg-white/20 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 shadow-lg"
                  style={{ width: `${Math.min(100, progress)}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, progress)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 text-right text-white/70 tabular-nums text-xs">
                {Math.min(100, Math.round(progress))}%
              </div>
            </div>
            {/* Kısa, sade mesaj */}
            <div className="text-center mt-2">
              <p className="text-lg font-semibold tracking-tight text-white/90 mb-1 drop-shadow">{brand}</p>
              <p className="text-sm text-white/60">Yükleniyor, lütfen bekleyin…</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
