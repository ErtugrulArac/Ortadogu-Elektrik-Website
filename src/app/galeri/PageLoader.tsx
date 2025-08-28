"use client";
import { useEffect, useState } from "react";

export default function PageLoader({
  minMs = 700,
  label = "Galeri yükleniyor…",
}: { minMs?: number; label?: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), minMs);
    return () => clearTimeout(t);
  }, [minMs]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-neutral-300 border-t-transparent dark:border-neutral-700" />
          <svg
            className="absolute inset-0 m-auto h-7 w-7 text-indigo-600 dark:text-indigo-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13 2L4 14h7l-1 8 10-12h-7l0-8z" />
          </svg>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{label}</p>
      </div>
    </div>
  );
}
