"use client";

import React, { useMemo, useRef, useState } from "react";

type ContactDockProps = {
  whatsapp: { number: string; message?: string }; 
  phone: { number: string; label?: string };      
  position?: "br" | "bl" | "tr" | "tl";
  className?: string;
};

const onlyDigits = (s: string) => s.replace(/\D+/g, "");

export default function ContactDock({
  whatsapp,
  phone,
  position = "br",
  className = "",
}: ContactDockProps) {
  const [open, setOpen] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  const waHref = useMemo(() => {
    const n = onlyDigits(whatsapp.number);
    const txt = encodeURIComponent(whatsapp.message ?? "Merhaba, bilgi almak istiyorum.");
    return `https://wa.me/${n}?text=${txt}`;
  }, [whatsapp.number, whatsapp.message]);

  const telHref = useMemo(() => {
    const n = phone.number.startsWith("+") ? phone.number : `+${onlyDigits(phone.number)}`;
    return `tel:${n}`;
  }, [phone.number]);

 
  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = dockRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 8}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 8}deg`);
    el.style.setProperty("--tx", `${(x - 0.5) * 8}px`);
    el.style.setProperty("--ty", `${(y - 0.5) * 8}px`);
  };
  const onPointerLeave = () => {
    const el = dockRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--tx", `0px`);
    el.style.setProperty("--ty", `0px`);
  };

  const pos =
    position === "br"
      ? "right-4 bottom-4 sm:right-6 sm:bottom-6"
      : position === "bl"
      ? "left-4 bottom-4 sm:left-6 sm:bottom-6"
      : position === "tr"
      ? "right-4 top-4 sm:right-6 sm:top-6"
      : "left-4 top-4 sm:left-6 sm:top-6";

  return (
    <div
      className={`fixed z-[9999] ${pos} ${className} print:hidden`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Hızlı iletişim"
    >
     
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Hızlı iletişim panelini aç"
          className="relative grid w-14 h-14 md:w-12 md:h-12 place-items-center rounded-full text-white shadow-xl ring-1 ring-black/10 transition-transform hover:scale-105 active:scale-95"
          style={{
            background:
              "radial-gradient(120% 120% at 10% 10%, #5AC8FA 0%, #7C4DFF 45%, #6A4DF5 80%)",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-6 md:h-6" fill="currentColor" aria-hidden>
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
          </svg>
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "9999px",
              filter: "blur(10px)",
              opacity: 0.5,
              background:
                "conic-gradient(from 180deg, rgba(90,200,250,.35), rgba(124,77,255,.35), rgba(106,77,245,.35), rgba(90,200,250,.35))",
            }}
          />
        </button>
      )}

      {open && (
        <div
          ref={dockRef}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="group will-change-transform [transform-style:preserve-3d]"
          style={{
            transform:
              "translate3d(var(--tx,0), var(--ty,0), 0) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
            transition: "transform .2s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <div className="relative rounded-[18px] p-[2px] bg-gradient-to-br from-emerald-400 via-indigo-500 to-cyan-400">
            <div className="rounded-[16px] bg-white/85 dark:bg-neutral-950/70 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-[0_8px_32px_-8px_rgba(79,70,229,.35)]">
              <div className="flex items-center px-4 pt-3 gap-3 sm:gap-2">
                <span className="inline-flex items-center gap-2 text-[11px] font-medium text-neutral-600 dark:text-neutral-300">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Hızlı İletişim
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Paneli kapat"
                  className="ml-auto grid w-7 h-7 place-items-center rounded-md border border-white/40 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-100 hover:bg-white/90"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                    <path d="M18.3 5.7a1 1 0 0 0-1.4-1.4L12 9.17 7.1 4.3a1 1 0 0 0-1.4 1.4L10.83 12l-5.13 5.9a1 1 0 1 0 1.5 1.32L12 14.83l4.9 4.89a1 1 0 1 0 1.4-1.42L13.17 12l5.13-5.9Z" />
                  </svg>
                </button>
              </div>

              {/* İki buton  */}
              <div className="flex items-center gap-2 px-2 py-2">
              
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp ile yaz"
                  className="relative isolate grid w-12 h-12 place-items-center rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-inner overflow-hidden"
                >
                   <img src="/wp.svg" alt="" className="w-6 h-6" /> 
                </a>

              
                <a
                  href={telHref}
                  aria-label="Telefon et"
                  className="relative isolate grid w-12 h-12 place-items-center rounded-xl bg-gradient-to-b from-indigo-500 to-indigo-600 text-white shadow-inner overflow-hidden"
                >
                  <img src="/tel.svg" alt="" className="w-6 h-6" /> 
                </a>

               
                <div className="hidden sm:flex items-center gap-2 ml-1 mr-2 px-3 py-2 rounded-lg border border-white/30 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 text-[12px] text-neutral-700 dark:text-neutral-200">
                  <span className="font-semibold">Ortadoğu Elektrik</span>
                  <span className="h-1 w-1 rounded-full bg-neutral-400" />
                  <span className="opacity-80">{phone.label ?? "7/24 Destek"}</span>
                </div>
              </div>
            </div>

          
            <div className="absolute -inset-1 -z-10 rounded-[22px] opacity-50 blur-xl bg-gradient-to-br from-emerald-400/20 via-indigo-500/15 to-cyan-400/20 group-hover:opacity-80 transition-opacity" />
          </div>
        </div>
      )}
    </div>
  );
}
