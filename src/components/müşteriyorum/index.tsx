"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { InfiniteMovingCardsDemo } from "@/components/ui/InfiniteMovingCardsDemo";

/* ======================= ICONS & DATA (STATS) ======================= */
type Stat = {
    label: string;
    value: number;
    suffix?: string;
    icon: React.ReactNode;
};

const icons = {
    users: (
        <svg viewBox="0 0 24 24" className="size-5 sm:size-6 md:size-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    check: (
        <svg viewBox="0 0 24 24" className="size-5 sm:size-6 md:size-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    ),
    mapPin: (
        <svg viewBox="0 0 24 24" className="size-5 sm:size-6 md:size-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    activity: (
        <svg viewBox="0 0 24 24" className="size-5 sm:size-6 md:size-7" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    ),
};

const STATS: Stat[] = [
    { label: "Memnun Müşteri", value: 1800, suffix: "+", icon: icons.users },
    { label: "Tamamlanan Proje ve Hizmet", value: 350, suffix: "+", icon: icons.check },
    { label: "Saha Ziyareti", value: 1245, suffix: "+", icon: icons.mapPin },
    { label: "Periyodik Test & Ölçüm", value: 543, suffix: "+", icon: icons.activity },
];

/* ======================= COUNTUP HOOK ======================= */
function useCountUp(target: number, start: boolean, durationMs = 1200) {
    const [value, setValue] = useState(0);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    const prefersReduced = useMemo(
        () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
        []
    );

    useEffect(() => {
        if (!start) return;
        if (prefersReduced) { setValue(target); return; }
        const animate = (t: number) => {
            if (startRef.current === null) startRef.current = t;
            const p = Math.min(1, (t - startRef.current) / durationMs);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); startRef.current = null; };
    }, [start, target, durationMs, prefersReduced]);

    return value;
}

/* ======================= INFINITE LOGO MARQUEE ======================= */
type Logo = { src: string; alt: string };

function InfiniteMovingLogos({
    items,
    direction = "left",
    speed = "normal",
    durationSeconds,           // → yeni: istersek tam süre veririz
    pauseOnHover = true,
    className,
}: {
    items: Logo[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slower" | "slow";
    durationSeconds?: number;  // → eklenen prop
    pauseOnHover?: boolean;
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (!containerRef.current || !scrollerRef.current) return;
        const nodes = Array.from(scrollerRef.current.children);
        nodes.forEach((el) => scrollerRef.current!.appendChild(el.cloneNode(true)));

        const duration =
            typeof durationSeconds === "number"
                ? `${durationSeconds}s`
                : speed === "fast"
                    ? "20s"
                    : speed === "slower"
                        ? "55s"
                        : speed === "slow"
                            ? "80s"
                            : "40s";

        containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
        containerRef.current.style.setProperty("--animation-duration", duration);
        setStart(true);
    }, [direction, speed, durationSeconds]);

    return (
        <div ref={containerRef} className={`relative z-20 w-full overflow-hidden ${className ?? ""}`}>
            <ul
                ref={scrollerRef}
                className={[
                    // 3) Referans şeridi iç aralığı biraz daha açıldı
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-20 sm:gap-24 md:gap-28 py-9",
                    start ? "animate-scroll" : "",
                    pauseOnHover ? "hover:[animation-play-state:paused]" : "",
                    paused ? "[animation-play-state:paused]" : "",
                ].join(" ")}
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => setPaused(false)}
                onTouchCancel={() => setPaused(false)}
            >
                {items.map((logo, i) => (
                    <li key={`${logo.src}-${i}`} className="shrink-0">
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 w-auto opacity-80 hover:opacity-100 transition will-change-transform"
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ====== LOGOLAR (örnek) ======
   Not: public köküne koyduysan '/6.png' gibi yaz.
   public/iconlar altındaysa '/iconlar/6.png' yaz. */
const REFERANS_LOGOLARI: Logo[] = [
    { src: "6.png", alt: "A" },
    { src: "7.png", alt: "b" },
    { src: "8.png", alt: "c" },
    { src: "9.png", alt: "d" },
    { src: "10.png", alt: "e" },
    { src: "11.png", alt: "f" },
    { src: "14.png", alt: "ı" },
    { src: "15.png", alt: "i" },
    { src: "16.png", alt: "j" },
    { src: "17.png", alt: "k" },
    { src: "18.png", alt: "l" },
];

/* ======================= UNIFIED SECTION (SAYAÇ + YORUMLAR + REFERANSLAR) ======================= */
export default function SayacVeYorumlar() {
    const statsRef = useRef<HTMLElement | null>(null);
    const inView = useInView(statsRef, { once: true, margin: "-20% 0px -20% 0px" });

    return (
        <section aria-label="Ortadoğu Elektrik istatistikler, müşteri yorumları ve referanslar" className="relative overflow-hidden bg-[#0b1320] text-white">
            {/* Ortak arka plan */}
            <div aria-hidden className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:18px_18px] opacity-20" />
            <div className="pointer-events-none absolute inset-y-0 -left-40 w-[55vw] md:w-[40vw] bg-gradient-to-r from-cyan-400/22 via-cyan-400/10 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute inset-y-0 -right-40 w-[55vw] md:w-[40vw] bg-gradient-to-l from-indigo-500/22 via-indigo-500/10 to-transparent blur-2xl" />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_82%_55%,rgba(129,140,248,0.16),transparent_45%)]" />

            <div className="relative mx-auto w-[92%] max-w-6xl px-6 md:px-12">
                {/* ===== Sayaçlar ===== */}
                <section ref={statsRef} className="py-20 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                        className="text-center md:text-left mb-14 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                                Ortadoğu Elektrik <br /> Müşteri Memnuniyetinde Lider Marka
                            </span>
                        </h2>
                        <p className="mt-4 max-w-2xl text-balance text-sm md:text-base leading-relaxed text-white/70 mx-auto md:mx-0">
                            Kaliteli hizmet ve müşteri memnuniyetini önceliklendiren yaklaşımımızla; güçlü altyapı, uzman ekip ve güvenilir çözümler sunuyoruz.
                        </p>
                    </motion.div>

                    {/* 1) Sayaç kartları arasını biraz açtım */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                        {STATS.map((stat, idx) => {
                            const current = useCountUp(stat.value, inView, 1200 + idx * 120);
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 22, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.55, delay: idx * 0.08 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md"
                                >
                                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/8 to-transparent" />
                                    <div className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-indigo-400/0 opacity-70" />

                                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                                        <div className="rounded-xl bg-transparent p-2 sm:p-2.5">
                                            <span className="text-blue-300">{stat.icon}</span>
                                        </div>
                                        <div className="text-right md:text-left ml-auto md:ml-0">
                                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none tracking-tight">
                                                <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                                                    {new Intl.NumberFormat("tr-TR").format(current)}
                                                </span>
                                                {stat.suffix ? <span className="text-white/70 ml-0.5">{stat.suffix}</span> : null}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-2 sm:mt-3 md:mt-4 text-[11px] sm:text-xs md:text-sm text-white/75">{stat.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* ===== Müşteri Yorumları ===== */}
                {/* 2) Bölümler arası boşlukları biraz açtım */}
                <section className="pt-16 md:pt-20 pb-12 md:pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                        className="text-center mb-14 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-6xl font-semibold tracking-tight leading-tight">
                            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Ortadoğu Elektrik</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Müşterilerimiz Bizde Değerli</span>
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-white/70">
                            Ankara ve çevresinde yüzlerce projede yanımızda olan müşterilerimizin güveni ve memnuniyeti bizim için en büyük referans.
                            Ortadoğu Elektrik olarak her işte şeffaflık, hız ve kaliteli hizmet anlayışımızla sizlere değer katıyoruz.
                        </p>
                    </motion.div>

                    <div className="relative mt-10 md:mt-12">
                        <InfiniteMovingCardsDemo />
                    </div>
                </section>

                {/* ===== Referanslar — yorumların hızıyla AYNI (80s) ===== */}
                <section className="pt-12 md:pt-16 pb-24 md:pb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                        className="text-center mb-10 md:mb-12"
                    >
                        <span className="mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-white/70">Müşterilerimiz & İş Ortaklarımız</span>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Her müşteriyi uzun dönemli bir <br />
                                iş ortaklığı olarak görüyoruz</span>
                        </h2>
                    </motion.div>

                    {/* 80 saniye → yorumlarla birebir tempo */}
                    <InfiniteMovingLogos items={REFERANS_LOGOLARI} direction="left" durationSeconds={80} />
                </section>
            </div>
        </section>
    );
}
