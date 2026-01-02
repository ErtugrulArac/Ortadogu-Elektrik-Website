"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


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
  // 3D dolum animasyonu için state
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        return p + 2;
      });
    }, 30);
    if (progress >= 100) {
      setTimeout(() => setVisible(false), 600);
      onComplete?.();
    }
    return () => clearInterval(interval);
  }, [progress, visible, onComplete]);

  // 3D efektli SVG ve animasyon
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.38 }}
        >
          <div className="flex flex-col items-center gap-8 w-full max-w-[360px] mx-auto">
            {/* 3D Daire Dolum Animasyonu */}
            <div className="relative flex items-center justify-center mb-2">
              <svg width="140" height="140" viewBox="0 0 140 140" className="drop-shadow-2xl">
                <defs>
                  <radialGradient id="3dglow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
                  </radialGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#60a5fa" floodOpacity="0.25" />
                  </filter>
                </defs>
                {/* Arka plan dairesi */}
                <circle cx="70" cy="70" r="62" fill="#1e293b" stroke="#334155" strokeWidth="6" />
                {/* 3D dolum efekti */}
                <motion.circle
                  cx="70"
                  cy="70"
                  r="62"
                  fill="none"
                  stroke="url(#3dglow)"
                  strokeWidth="10"
                  strokeDasharray={2 * Math.PI * 62}
                  strokeDashoffset={2 * Math.PI * 62 * (1 - progress / 100)}
                  style={{ filter: "url(#shadow)" }}
                  initial={false}
                  animate={{ strokeDashoffset: 2 * Math.PI * 62 * (1 - progress / 100) }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                {/* Logo */}
                <image
                  href={logoSrc}
                  x="35" y="35" height="70" width="70"
                  style={{ filter: "drop-shadow(0 0 16px #60a5fa88)" }}
                />
              </svg>
              {/* Yüzde */}
              <span className="absolute text-2xl font-bold text-white drop-shadow-lg">
                {Math.min(100, Math.round(progress))}%
              </span>
            </div>
            {/* Başlık ve mesaj */}
            <div className="text-center mt-2">
              <p className="text-xl font-semibold tracking-tight text-white/90 mb-1 drop-shadow">{brand}</p>
              <p className="text-base text-white/60">Yükleniyor, lütfen bekleyin…</p>
            </div>
            {/* Alt bilgi veya özlü söz */}
            <p className="mt-4 text-center leading-relaxed text-[clamp(13px,3vw,17px)] px-2 bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(80,140,255,0.25)]">
              {quote}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
