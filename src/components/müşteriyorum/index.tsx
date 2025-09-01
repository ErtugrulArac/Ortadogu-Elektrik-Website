"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCardsDemo } from "../ui/InfiniteMovingCardsDemo";

export default function MusteriYorumlari() {
  return (
    <section className="relative overflow-hidden bg-[#0b1320] text-white py-16 md:py-20 px-6 md:px-10">
      {/* Arka plan grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-56 bg-gradient-to-b from-blue-500/30 via-cyan-600/20 to-transparent blur-2xl" />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        {/* Başlık ve açıklama */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Ortadoğu Elektrik <br /> Müşterilerimiz Bizde Değerli
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-white/70">
            Ankara ve çevresinde yüzlerce projede yanımızda olan müşterilerimizin
            güveni ve memnuniyeti bizim için en büyük referans. 
            Ortadoğu Elektrik olarak her işte şeffaflık, hız ve kaliteli hizmet
            anlayışımızla sizlere değer katıyoruz.
          </p>
        </motion.div>

        {/* InfiniteMovingCards */}
        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
}
