"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight
      containerClassName="pt-0 mt-0 pb-8 bg-blac md:pb-12" // üst sıfır, altta hafif boşluk
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
       Her kare;, güvenilir altyapılarımızın sürdürülebilir enerji yatırımlarımızın ve{" "}
        <Highlight className="text-black dark:text-white">toplum için ürettiğimiz değerin bir göstergesidir.</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
