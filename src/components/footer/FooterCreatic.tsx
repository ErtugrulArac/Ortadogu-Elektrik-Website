// src/components/FooterCreatic.tsx
"use client";

import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function FooterCreatic() {
    return (
        <footer className="relative overflow-hidden bg-[#03060B] text-[#cbd5e1]">
            {/* üstten yayılan yumuşak mavi parıltı */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_300px_at_50%_0%,rgba(56,97,251,0.15),transparent_60%)]" />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-14 sm:py-16">
                {/* Logo */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-widest text-[#5b84ff]">
                        ORTADOĞU
                    </h1>
                    <p className="mt-1 text-[11px] tracking-[0.25em] text-[#9fb6ff]">
                        ELEKTRİK
                    </p>
                </div>

                {/* Menü */}
                <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
                    {["Anasayfa", "Hakkımda", "Servis", "Pörtföy", "Galeri", "İletişim"].map(
                        (item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-[#88a0ff] transition-colors hover:text-white"
                            >
                                {item}
                            </a>
                        )
                    )}
                </nav>

                {/* Açıklama */}
                <p className="mt-6 max-w-2xl text-center text-[13px] leading-6 text-[#afc2ff]">
                    Ortadoğu Elektrik, enerjiyi yalnızca kablolara değil, hayata değer katan güvene ve kalıcı çözümlere dönüştürür.
                </p>

                {/* Sosyal ikonlar */}
                <div className="mt-5 flex items-center gap-4">
                    <a href="#" aria-label="Facebook" className="rounded-full p-2 text-[#9fb6ff] transition hover:scale-110 hover:text-white">
                        <FiFacebook className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Instagram" className="rounded-full p-2 text-[#9fb6ff] transition hover:scale-110 hover:text-white">
                        <FiInstagram className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="WhatsApp" className="rounded-full p-2 text-[#9fb6ff] transition hover:scale-110 hover:text-white">
                        <FaWhatsapp className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="rounded-full p-2 text-[#9fb6ff] transition hover:scale-110 hover:text-white">
                        <FaLinkedin className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Twitter" className="rounded-full p-2 text-[#9fb6ff] transition hover:scale-110 hover:text-white">
                        <FiTwitter className="h-4 w-4" />
                    </a>
                </div>

                {/* Telif */}
                <p className="mt-10 text-center text-[11px] text-[#8aa0ff]">
                    Copyright © 2003–2023 Creatic Agency All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
