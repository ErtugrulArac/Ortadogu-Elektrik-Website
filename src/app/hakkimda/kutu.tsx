"use client";

import Link from "next/link";
import React from "react";

/** Re-usable: Mint/ciyan gradient çerçeveli, koyu iç dolgulu, oval buton */
function GlowPillButton({
    href,
    children,
    className = "",
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={[
                // gradient çerçeve + hafif parıltı gölge
                "relative inline-flex rounded-full p-[2.5px]",
                "bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300",
                "shadow-[0_10px_26px_rgba(34,197,94,0.25)]",
            ].join(" ")}
        >
            {/* iç buton */}
            <Link
                href={href}
                className={[
                    "group relative inline-flex items-center gap-2 rounded-full",
                    "px-5 sm:px-6 py-2.5",
                    "text-[15px] font-semibold text-white",
                    "bg-[#0f1725]", // koyu lacivert gövde
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60",
                    "transition-colors",
                    className,
                ].join(" ")}
            >
                {children}
                {/* ok ikonu */}
                <svg
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 0 1 1-1h9.586L11.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 0 1-1-1Z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
        </span>
    );
}

export default function ProjectCTA() {
    return (
        <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
            {/* Kart */}
            <div className="relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur">
                <div className="pointer-events-none absolute -inset-10 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-2xl" />

                <div className="relative grid items-center gap-6 px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 md:grid-cols-[1fr_auto]">
                    {/* Sol içerik */}
                    <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                            Projenizi birlikte güvenle hayata geçirelim
                        </h3>
                        <p className="mt-2 text-sm sm:text-[15px] text-neutral-300/90 leading-relaxed">
                            Keşiften kabul sürecine kadar tüm adımları planlayalım; şeffaf
                            maliyet ve zaman yönetimiyle ilerleyelim.
                        </p>
                    </div>

                    {/* Sağ: butonlar */}
                    <div className="flex w-full flex-wrap items-center gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start md:justify-end">
                        <GlowPillButton href="/teklif">Teklif Al</GlowPillButton>
                        <GlowPillButton href="/iletisim">Hemen İletişim</GlowPillButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
