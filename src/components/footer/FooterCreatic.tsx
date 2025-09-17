"use client";

import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FooterOrtadoguMinimal() {
    return (
        <footer className="relative bg-black text-white overflow-hidden">
            {/* Arka planda yarım daire mavi gradyan */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.25)_0%,transparent_70%)]" />

            <div className="relative mx-auto max-w-6xl px-6 py-10 sm:py-12 text-center">
                {/* Logo */}
                <div className="flex justify-center">
                    <Image
                        src="/ortadoğulogo.webp"
                        alt="Ortadoğu Elektrik"
                        width={800}
                        height={160}
                        className="w-[90px] h-auto max-w-none"
                        priority
                    />
                </div>

                {/* Menü */}
                <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
                    {[
                        { name: "Anasayfa", href: "/" },
                        { name: "Hakkımda", href: "/hakkimda" },
                        { name: "Sosyal", href: "/sosyalmedya" },
                        { name: "Lokasyon", href: "/lokasyon" },
                        { name: "Galeri", href: "/galeri" },
                        { name: "İletişim", href: "/iletisim" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-white/80 hover:text-white transition-colors duration-300
                                       after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Açıklama */}
                <p className="mt-6 text-sm text-white/75">
                   Enerjiyi sadece aktarmıyor, güvene, kaliteye ve hayatı aydınlatan çözümlere dönüştürüyoruz.


                </p>

                {/* Sosyal ikonlar */}
                <div className="mt-6 flex items-center justify-center gap-4">
                    <a href="https://wa.me/905357049398" aria-label="WhatsApp" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-sky-400/50 hover:scale-110 transition">
                        <FaWhatsapp className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Facebook" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-sky-400/50 hover:scale-110 transition">
                        <FiFacebook className="h-4 w-4" />
                    </a>
                    <a href="https://www.instagram.com/ortadoguelektrik/?igsh=MWl6eW8wZ2YxbWU2OQ%3D%3D&utm_source=qr#" aria-label="Instagram" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-sky-400/50 hover:scale-110 transition">
                        <FiInstagram className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-sky-400/50 hover:scale-110 transition">
                        <FiLinkedin className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Twitter" className="rounded-full p-2 ring-1 ring-white/15 hover:ring-sky-400/50 hover:scale-110 transition">
                        <FiTwitter className="h-4 w-4" />
                    </a>
                </div>

                {/* Telif hakkı */}
                <p className="mt-8 text-[11px] text-white/60">
                    Copyright © 1996–{new Date().getFullYear()} Ortadoğu Elektrik. Tüm Hakları Saklıdır.
                </p>
            </div>
        </footer>
    );
}
