// src/app/hakkimizda/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Arka from "@/components/arkaplanelektrik/app";

/* ---- Inline ikonlar (kurumsal, minimal) ---- */
const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10Z" strokeWidth={2} />
    <path d="m9 12 2 2 4-4" strokeWidth={2} />
  </svg>
);
const BoltIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="m13 3-8 13h6l-2 7 8-13h-6l2-7Z" strokeWidth={2} />
  </svg>
);
const HeadsetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M3 16v-3a9 9 0 1 1 18 0v3" strokeWidth={2} />
    <path d="M21 19a2 2 0 0 1-2 2h-3v-6h3a2 2 0 0 1 2 2zM3 19a2 2 0 0 0 2 2h3v-6H5a2 2 0 0 0-2 2z" strokeWidth={2} />
  </svg>
);
const ChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M3 3v18h18" strokeWidth={2} />
    <path d="M7 13v5M12 8v10M17 11v7" strokeWidth={2} />
  </svg>
);
const LeafIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M5 21c8 0 14-6 14-14V3h-4C7 3 3 7 3 15v6z" strokeWidth={2} />
  </svg>
);
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="m12 3 3.09 6.26L22 10.27l-5 4.9L18.18 22 12 18.77 5.82 22 7 15.17l-5-4.9 6.91-1.01L12 3z" strokeWidth={2} />
  </svg>
);

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-screen bg-neutral-950 text-neutral-200">
      {/* --- TÜM SAYFA ARKA PLAN (SABİT) --- */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Arka bileşeni tam ekran doldursun */}
        <div className="absolute inset-0 h-full w-full">
          <Arka />
        </div>
        {/* Okunurluk için koyu overlay (isteğe göre azalt/çoğalt) */}
        <div className="absolute inset-0 bg-neutral-950/60" />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 sm:pt-32 lg:pt-40 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] sm:text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Ortadoğu Elektrik • Güvenlik Önceliği
              </span>

              <h1 className="mt-3 font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white">
                Enerjinin yüzünü değiştiren{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  elektrik çözümleri
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-neutral-400 text-sm sm:text-base leading-relaxed mx-auto lg:mx-0">
                Konut, ticari ve endüstriyel projelerde keşiften kabul sürecine dek; pano, tesisat,
                otomasyon ve enerji verimliliği danışmanlığını tek çatı altında sunuyoruz.
                Standartlara tam uyum, şeffaf raporlama ve sürdürülebilir tasarruf odaklı yaklaşım.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/teklif"
                  className="rounded-xl bg-white px-5 py-3 text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
                >
                  Ücretsiz Keşif / Teklif Al
                </Link>
                <Link
                  href="/projeler"
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Projelerimizi İncele
                </Link>
                <Link
                  href="/iletisim"
                  className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/15 transition"
                >
                  7/24 Acil Destek
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="text-2xl font-bold text-white">+40</div>
                  <div className="text-xs text-neutral-400">Endüstriyel Pano</div>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="text-2xl font-bold text-white">30M+</div>
                  <div className="text-xs text-neutral-400">kWh İzlenen Enerji</div>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="text-2xl font-bold text-white">97%</div>
                  <div className="text-xs text-neutral-400">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>

            {/* Hero görseli (koyu kart) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-900/60 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/about/hero-panel.webp"
                    alt="Ortadoğu Elektrik pano ve otomasyon çözümleri"
                    width={640}
                    height={480}
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BİZ KİMİZ + HAKKIMIZDA (kartlarla) */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Biz Kimiz</h2>
              <p className="mt-3 text-neutral-400 leading-relaxed">
                Ortadoğu Elektrik; keşif, projelendirme, tesisat, pano imalatı, devreye alma ve
                enerji verimliliği raporlamasını uçtan uca yöneten mühendislik şirketidir. Her
                projede, şantiye gerçeklerini bilen saha ekipleriyle, yönetmeliklere tam uyumlu ve
                kalıcı çözümler üretiriz.
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <ShieldIcon className="h-5 w-5 text-emerald-300" />,
                    title: "Standartlara Tam Uyum",
                    desc: "TSE, CE ve ilgili yönetmeliklere uygunluk; ölçüm ve test raporları.",
                  },
                  {
                    icon: <BoltIcon className="h-5 w-5 text-indigo-300" />,
                    title: "Hızlı ve Temiz Montaj",
                    desc: "Randevulu servis, minimum kesinti, şeffaf iş planı.",
                  },
                  {
                    icon: <HeadsetIcon className="h-5 w-5 text-cyan-300" />,
                    title: "7/24 Destek & Garanti",
                    desc: "Arıza anında telefonla yönlendirme ve yerinde müdahale.",
                  },
                  {
                    icon: <ChartIcon className="h-5 w-5 text-amber-300" />,
                    title: "Ölç, Doğrula, İyileştir",
                    desc: "İzleme/raporlama ile sürdürülebilir tasarruf ve bakım optimizasyonu.",
                  },
                ].map((f) => (
                  <li
                    key={f.title}
                    className="flex gap-3 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-4 hover:bg-neutral-900/70 transition"
                  >
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                      {f.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{f.title}</p>
                      <p className="text-sm text-neutral-400">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { src: "/about/site-1.webp", alt: "Saha çalışmaları ve tesisat" },
                  { src: "/about/panel-1.webp", alt: "Pano ve otomasyon uygulamaları" },
                ].map((g) => (
                  <div
                    key={g.src}
                    className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60"
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      width={640}
                      height={480}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
                  </div>
                ))}

                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:col-span-2">
                  <Image
                    src="/about/team-1.webp"
                    alt="Mühendislik ekibimiz"
                    width={1280}
                    height={720}
                    className="h-64 sm:h-80 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/belgeler"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Belgeler & Sertifikalar
                </Link>
                <Link
                  href="/referanslar"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Referanslar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MİSYON & VİZYON (cam görünümlü kartlar) */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                head: "Misyon",
                copy:
                  "Her ölçekte projede güvenli, verimli ve sürdürülebilir elektrik altyapıları kurmak; işletmelerin kesintisiz çalışmasını ve hane güvenliğini garanti altına almak.",
                bullets: [
                  "Şeffaf planlama, öngörülebilir zaman çizelgesi",
                  "Yönetmeliklere tam uyum ve ölçüm/doğrulama",
                  "Bakım kolaylığı ve uzun ömürlü çözümler",
                ],
              },
              {
                head: "Vizyon",
                copy:
                  "Bölgenin en güvenilir elektrik çözüm ortağı olarak; dijital izleme, akıllı otomasyon ve enerji verimliliğiyle fark yaratan katma değer sunmak.",
                bullets: [
                  "Akıllı enerji yönetimi ve raporlama",
                  "Veriyle desteklenen tasarruf stratejileri",
                  "Karbonsuzlaşma hedeflerine katkı",
                ],
              },
            ].map((c) => (
              <div
                key={c.head}
                className="rounded-3xl bg-white/[0.04] backdrop-blur ring-1 ring-white/10 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              >
                <h3 className="text-xl font-semibold text-white">{c.head}</h3>
                <p className="mt-3 text-neutral-300 leading-relaxed">{c.copy}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300/90">
                  {c.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEĞERLERİMİZ (kart ızgara) */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Değerlerimiz</h3>
          <p className="mt-3 max-w-3xl text-neutral-400">
            Güvenlik, şeffaflık ve sürdürülebilirlik; tüm kararlarımızda rehberimizdir. Ekip çalışması
            ve sürekli gelişim kültürü ile müşterilerimizin hedeflerine daha hızlı ve emniyetli ulaşmasını sağlarız.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <LeafIcon className="h-6 w-6 text-emerald-300" />, title: "Sürdürülebilirlik", desc: "Enerji verimliliği ve düşük bakım maliyeti." },
              { icon: <ShieldIcon className="h-6 w-6 text-indigo-300" />, title: "Güvenlik", desc: "Standartlara uyum, risklerin proaktif yönetimi." },
              { icon: <StarIcon className="h-6 w-6 text-amber-300" />, title: "Kalite", desc: "Dokümantasyon, test ve kabul süreçleri." },
              { icon: <ChartIcon className="h-6 w-6 text-cyan-300" />, title: "Veri Odaklılık", desc: "İzleme, raporlama ve sürekli iyileştirme." },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-5 hover:bg-neutral-900/70 transition"
              >
                {v.icon}
                <h4 className="mt-2 font-semibold text-white">{v.title}</h4>
                <p className="mt-1 text-sm text-neutral-300">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJE GALERİSİ (koyu kartlar) */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Seçili Projeler</h3>
              <p className="mt-2 text-neutral-400">Farklı sektörlerde tamamlanan işleri inceleyin.</p>
            </div>
            <Link
              href="/projeler"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Tüm Projeler
            </Link>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: "/about/galeri-1.webp", title: "Endüstriyel Pano & SCADA" },
              { src: "/about/galeri-2.webp", title: "Konut Tesisatı Yenileme" },
              { src: "/about/galeri-3.webp", title: "Otomasyon & Aydınlatma" },
              { src: "/about/galeri-4.webp", title: "Enerji İzleme & Raporlama" },
              { src: "/about/galeri-5.webp", title: "Kaçak Akım Koruma Uygulaması" },
              { src: "/about/galeri-6.webp", title: "Kompanzasyon & Verimlilik" },
            ].map((item) => (
              <figure
                key={item.src}
                className="group overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60"
              >
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={720}
                    height={540}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-white/90">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/[0.04] backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="absolute -inset-10 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-2xl" />
            <div className="relative px-6 py-10 sm:px-10 sm:py-14 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white">Projenizi birlikte güvenle hayata geçirelim</h3>
                <p className="mt-2 max-w-2xl text-neutral-300">
                  Keşiften kabul sürecine kadar tüm adımları planlayalım; şeffaf maliyet ve zaman yönetimiyle ilerleyelim.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/teklif"
                  className="rounded-xl bg-white px-5 py-3 text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition"
                >
                  Ücretsiz Keşif / Teklif
                </Link>
                <Link
                  href="/iletisim"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Hemen İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
