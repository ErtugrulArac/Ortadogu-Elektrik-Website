// src/components/FooterCreatic.tsx
"use client";

import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function FooterCreatic() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_220px_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-10 sm:py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-widest">ORTADOĞU</h1>
          <p className="mt-0.5 text-[10px] tracking-[0.25em] text-white/70">
            ELEKTRİK
          </p>
        </div>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px]">
          {["Anasayfa", "Hakkımda", "Servis", "Pörtföy", "Galeri", "İletişim"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="relative text-white/70 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white/40 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <p className="mt-5 max-w-2xl text-center text-xs leading-6 text-white/80">
          Ortadoğu Elektrik, enerjiyi yalnızca kablolara değil, hayata değer
          katan güvene ve kalıcı çözümlere dönüştürür.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="rounded-full p-2 text-white/70 ring-1 ring-white/10 transition hover:scale-110 hover:text-white hover:ring-white/30 bg-white/0 hover:bg-white/[0.06]"
          >
            <FiFacebook className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="rounded-full p-2 text-white/70 ring-1 ring-white/10 transition hover:scale-110 hover:text-white hover:ring-white/30 bg-white/0 hover:bg-white/[0.06]"
          >
            <FiInstagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            className="rounded-full p-2 text-white/70 ring-1 ring-white/10 transition hover:scale-110 hover:text-white hover:ring-white/30 bg-white/0 hover:bg-white/[0.06]"
          >
            <FaWhatsapp className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-white/70 ring-1 ring-white/10 transition hover:scale-110 hover:text-white hover:ring-white/30 bg-white/0 hover:bg-white/[0.06]"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="rounded-full p-2 text-white/70 ring-1 ring-white/10 transition hover:scale-110 hover:text-white hover:ring-white/30 bg-white/0 hover:bg-white/[0.06]"
          >
            <FiTwitter className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="mt-4 text-center text-[10px] text-white/60">
          Copyright © 1996–2025 Ortadoğu Elektrik All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
