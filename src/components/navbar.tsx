"use client";
import React from "react";
import Image from "next/image";
import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  { label: "Anasayfa", href: "#", icon: <FaHome /> },
  { label: "Hakkımda", href: "#", icon: <FaUserAlt /> },
  { label: "Servis", href: "#", icon: <FaTools /> },
  { label: "Portföy", href: "#", icon: <FaBriefcase /> },
  { label: "Galeri", href: "/galeri", icon: <FaFileAlt /> },
  { label: "İletişim", href: "#", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src="/arlan.jpg"
              alt="Logo"
              width={120}
              height={28}
              className="h-16 w-auto"
              priority
            />
          </a>

          <ul className="hidden  items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative flex items-center text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  <span className="hidden md:hidden">{l.icon}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded p-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        } md:hidden`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-black transition-transform overflow-y-auto pb-[env(safe-area-inset-bottom)] ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ WebkitOverflowScrolling: "touch" as any }}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded p-2 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex justify-center items-center px-4 pt-6 pb-4 border-b border-white/10">
          <Image
            src="/arlan.jpg"
            alt="Logo"
            width={140}
            height={32}
            className="h-20 w-auto"
            priority
          />
        </div>

        <ul className="flex flex-col gap-4 px-6 pt-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded px-2 py-2 text-[16px] font-medium text-white/85 hover:bg-white/5 hover:text-white"
              >
                <span className="text-xl">{l.icon}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-9 px-6">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-yellow-300/10 via-sky-400/10 to-fuchsia-500/10">
            <div className="pointer-events-none absolute -top-8 -right-6 h-24 w-24 rounded-full bg-yellow-300/25 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
            <div className="flex flex-col items-center gap-3 px-4 pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-yellow-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 2L3 14h7l-1 8 11-12h-7l0-8z" />
              </svg>
              <div>
                <p className="text-white text-center text-base font-semibold tracking-wide">
                  Ortadoğu <br /> Elektrik & Elektronik
                </p>
                <p className="text-white/70 text-sm text-center">
                  Gücü tasarımla buluşturur
                </p>
              </div>
            </div>
            <div className="mx-4 my-3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="px-4 pb-4 text-[12px] leading-relaxed text-white/65 text-center">
              Akıllı çözümler, Güvenli kurulum, 7/24 destek, Kesintisiz enerji altyapısı
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}
