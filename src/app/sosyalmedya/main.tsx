"use client";

import React from "react";
import { ArrowUpRight, Linkedin, Instagram, Youtube, Twitter, Star, Mail } from "lucide-react";

export default function SosyalMedyaPage() {
  return (
    <main className="relative min-h-dvh w-full bg-transparent pt-20 text-slate-200">
      <div className="mx-auto w-[92%] max-w-5xl py-12">
        {/* Başlık */}
        <h1 className="text-4xl font-bold md:text-5xl">
          <span className="relative inline-block">
            Sosyal
            <span className="absolute left-0 top-full mt-2 h-[3px] w-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
          </span>{" "}
          Medya
        </h1>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-400">
          Kurumsal duyurularımızı, saha çalışmalarımızı ve güncel projelerimizi
          paylaştığımız resmi sosyal medya hesaplarımızı buradan inceleyebilirsiniz.
        </p>

        {/* Sosyal medya hesapları */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <SosyalHesap
            icon={<Linkedin className="h-6 w-6" />}
            ad="LinkedIn"
            hesap="Ortadoğu Elektrik"
            url="https://www.linkedin.com/"
          />
          <SosyalHesap
            icon={<Instagram className="h-6 w-6" />}
            ad="Instagram"
            hesap="@ortadogu.elektrik"
            url="https://www.instagram.com/"
          />
          <SosyalHesap
            icon={<Youtube className="h-6 w-6" />}
            ad="YouTube"
            hesap="Ortadoğu Elektrik"
            url="https://www.youtube.com/"
          />
          <SosyalHesap
            icon={<Twitter className="h-6 w-6" />}
            ad="X"
            hesap="@ortadoguelektrik"
            url="https://x.com/"
          />
        </section>

        {/* Yorum Kartı */}
        <section className="mt-12">
          <div className="rounded-2xl border border-white/10 bg-[#111827]/70 p-6 text-center shadow-md">
            <Star className="mx-auto h-8 w-8 text-yellow-400" />
            <h2 className="mt-3 text-xl font-semibold text-white">Bize yorum yapın</h2>
            <p className="mt-2 text-sm text-slate-400">
              Görüşleriniz bizim için değerli. Google işletme hesabımızda yorum
              bırakarak bizi değerlendirin.
            </p>
            <a
              href="https://www.google.com/maps/place/Ortadoğu+Elektrik" // gerçek işletme linkinizi koyun
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500/80 to-indigo-600/80 px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
            >
              Yorum Yap <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Ek CTA */}
        <section className="mt-12 border-t border-white/10 pt-8 text-center">
          <h3 className="text-lg font-semibold text-white">Bültenimize Katılın</h3>
          <p className="mt-2 text-sm text-slate-400">
            Güncel projeler ve haberler için aylık bültenimize abone olun.
          </p>
          <a
            href="mailto:info@ortadoguelektrik.com?subject=Bülten%20Kaydı"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#111827]/70 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-[#1e293b]/80"
          >
            <Mail className="h-4 w-4" />
            Abone Ol
          </a>
        </section>
      </div>
    </main>
  );
}

/* --------- Alt bileşen --------- */
function SosyalHesap({
  icon,
  ad,
  hesap,
  url,
}: {
  icon: React.ReactNode;
  ad: string;
  hesap: string;
  url: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111827]/70 p-5 shadow-md hover:bg-[#1e293b]/80">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-300">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-100">{ad}</h3>
          <p className="text-sm text-slate-400">{hesap}</p>
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 underline decoration-slate-600 underline-offset-4 hover:text-sky-200"
      >
        Resmi Sayfa
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}
