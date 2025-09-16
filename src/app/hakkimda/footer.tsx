"use client";

import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FooterOrtadoguMinimal() {
    return (
        <footer className="relative text-white">
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1100px_320px_at_50%_-6%,rgba(16,185,129,.10),transparent_60%)]" />
            <div className="relative mx-auto max-w-6xl px-6 py-10 sm:py-12 text-center">
                <div className="flex justify-center">
                    <Image
                        src="/arlanap.png"
                        alt="Ortadoğu Elektrik"
                        width={800}
                        height={160}
                        className="w-[90px] h-auto max-w-none"   // <- boyutu burada veriyoruz
                        priority
                    />
                </div>

                <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
                    <Link href="/" className="text-white/80 hover:text-white">Anasayfa</Link>
                    <Link href="/hakkimda" className="text-white/80 hover:text-white">Hakkımda</Link>
                    <Link href="/sosyalmedya" className="text-white/80 hover:text-white">Sosyal</Link>
                    <Link href="/lokasyon" className="text-white/80 hover:text-white">Lokasyon</Link>
                    <Link href="/galeri" className="text-white/80 hover:text-white">Galeri</Link>
                    <Link href="/iletisim" className="text-white/80 hover:text-white">İletişim</Link>
                </nav>

                <p className="mt-6 text-sm text-white/75">
                    Enerjiyi sadece aktarmıyor, güvene, kaliteye ve hayatı aydınlatan çözümlere dönüştürüyoruz.
                </p>

                <div className="mt-6 flex items-center justify-center gap-4">
                    <a href="https://wa.me/905000000000" aria-label="WhatsApp" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-emerald-400/50 hover:scale-110 transition">
                        <FaWhatsapp className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Facebook" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-emerald-400/50 hover:scale-110 transition">
                        <FiFacebook className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Instagram" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-emerald-400/50 hover:scale-110 transition">
                        <FiInstagram className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-emerald-400/50 hover:scale-110 transition">
                        <FiLinkedin className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Twitter" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-emerald-400/50 hover:scale-110 transition">
                        <FiTwitter className="h-4 w-4" />
                    </a>
                </div>

                <p className="mt-8 text-[11px] text-white/60">
                    Copyright © 1996–{new Date().getFullYear()} Ortadoğu Elektrik. Tüm Hakları Saklıdır.
                </p>
            </div>
        </footer>
    );
}
