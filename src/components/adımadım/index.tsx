// src/components/EnhancedTimeline.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  // Başlıkla uyumlu node ikonları
  Search,
  PencilRuler,
  ClipboardCheck,
  Truck,
  Plug,
  Wrench,
  Lightbulb,
  Gauge,
  BookOpen,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

type Step = {
  title: string;
  text: string;
  icon: LucideIcon; // Zaman çizgisi düğmesindeki (yuvarlak içindeki) ikon
};

/* SOL SÜTUN — 1-5 */
const LEFT_STEPS: Step[] = [
  {
    title: "ADIM 1 – Keşfe Çıkıyoruz",
    text:
      "Ortadoğu Elektrik sahaya geliyor; ihtiyacınızı dinliyor, ölçüyoruz, riskleri not ediyoruz ve işi net bir plana bağlıyoruz. Zaman çizelgesini de beraber netleştiriyoruz.",
    icon: Search, // 🔍
  },
  {
    title: "ADIM 2 – Projeyi Çiziyor, Teklifi Hazırlıyoruz",
    text:
      "Hat güzergâhları, pano yerleri ve yük dağılımını projelendiriyoruz; metraj ve malzeme listesiyle şeffaf bir teklif çıkarıyoruz. Alternatifleri ayrıca belirtip karşılaştırıyoruz.",
    icon: PencilRuler, // 📐
  },
  {
    title: "ADIM 3 – Ruhsat ve Onayları Biz Takip Ediyoruz",
    text:
      "Dağıtım şirketi ve ilgili kurum başvurularını yapıyor, çizim ile hesap onaylarını biz takip ediyoruz; gerekli izinleri tamamlıyor ve durumu düzenli raporluyoruz.",
    icon: ClipboardCheck, // ✅
  },
  {
    title: "ADIM 4 – Malzemeyi Temin Ediyor, Programı Kuruyoruz",
    text:
      "Standartlara uygun malzemeleri tedarik ediyoruz; ekip planını, iş güvenliğini ve saha lojistiğini hazırlıyor, uygulama programını netleştiriyoruz.",
    icon: Truck, // 🚚
  },
  {
    title: "ADIM 5 – Altyapıyı Döşüyoruz",
    text:
      "Kablo tavaları, boru/kanal güzergâhları ve topraklama hatlarını kuruyoruz; ana besleme ile dağıtım altyapısını sağlam ve denetime hazır biçimde hazırlıyoruz.",
    icon: Plug, // 🔌
  },
];

/* SAĞ SÜTUN — 6-10 */
const RIGHT_STEPS: Step[] = [
  {
    title: "ADIM 6 – Panoları Kuruyoruz",
    text:
      "Ana ve kat panolarını monte ediyoruz; kesiciler ile koruma elemanlarını yerleştiriyor, hat beslemelerini düzenli çekiyor ve pano içi etiketlemeyi standartlara uygun tamamlıyoruz.",
    icon: Wrench, // 🔧
  },
  {
    title: "ADIM 7 – Aydınlatma, Priz ve Data Hatlarını Çekiyoruz",
    text:
      "Aydınlatma armatürleri, priz devreleri ve zayıf akım/data altyapısını döşüyoruz; kabinet ve patch-panel bağlantılarını yapıp hatları numaralandırıyoruz.",
    icon: Lightbulb, // 💡
  },
  {
    title: "ADIM 8 – Test Ediyor, Devreye Alıyoruz",
    text:
      "İzolasyon, kaçak akım, süreklilik ve topraklama ölçümlerini yapıyor; raporları oluşturuyor, varsa otomasyon testlerini tamamlıyor ve sistemi güvenle devreye alıyoruz.",
    icon: Gauge, // 📈/ölçüm
  },
  {
    title: "ADIM 9 – Eğitim ve Dokümanı Teslim Ediyoruz",
    text:
      "Kullanıcı eğitimini veriyor; tek hat şemaları, garanti belgeleri ve bakım kılavuzlarını teslim ediyoruz. Acil durum adımlarını ekibinize uygulamalı anlatıyoruz.",
    icon: BookOpen, // 📖
  },
  {
    title: "ADIM 10 – Anahtarı Teslim Ediyor, Bakımda Yanınızdayız",
    text:
      "İşi tutanakla teslim ediyoruz. Ortadoğu Elektrik olarak periyodik bakım planı ve hızlı arıza desteğiyle yanınızdayız; servis sözleşmesiyle sürekliliği güvence altına alıyoruz.",
    icon: KeyRound, // 🔑
  },
];

export default function EnhancedTimeline() {
  return (
    <section className="w-full">
      <div className="mx-auto grid w-[92%] max-w-6xl grid-cols-1 gap-12 py-16  md:grid-cols-2 md:py-36">
        <StepList side="left" steps={LEFT_STEPS} />
        <StepList side="right" steps={RIGHT_STEPS} />
      </div>
    </section>
  );
}

/* ---------- sütun bileşeni (statik) ---------- */

function StepList({
  side,
  steps,
}: {
  side: "left" | "right";
  steps: Step[];
}) {
  const RAIL = 36;
  const colRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: colRef,
    offset: ["start end", "end start"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const railStyle = side === "left" ? { left: RAIL } : { right: RAIL };
  const align =
    side === "left"
      ? "grid-cols-[64px_1fr] justify-items-start text-left"
      : "grid-cols-[1fr_64px] justify-items-end text-right";

  return (
    <div className="relative" ref={colRef}>
      {/* sabit ray */}
      <div
        className="absolute top-0 h-full w-[2px] rounded-full bg-slate-200 dark:bg-slate-700"
        style={railStyle}
      />
      {/* dolan ray (scroll ile) */}
      <motion.div
        className="absolute top-0 w-[2px] rounded-full bg-gradient-to-b from-indigo-500 via-fuchsia-500 to-cyan-400"
        style={{ ...railStyle, height: fill as any }}
      />

      <ul className="space-y-8" aria-label={`${side} timeline`}>
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <li key={`${side}-${step.title}`}>
              <div className={["grid w-full items-start gap-4 p-3", align].join(" ")}>
                {side === "left" ? (
                  <>
                    <Node Icon={Icon} dir="left" />
                    <Content step={step} />
                  </>
                ) : (
                  <>
                    <Content step={step} right />
                    <Node Icon={Icon} dir="right" />
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Node({ Icon, dir }: { Icon: LucideIcon; dir: "left" | "right" }) {
  const barCommon =
    "absolute top-1/2 h-[2px] w-[14px] -translate-y-1/2 bg-indigo-500/70";
  return (
    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg ring-8 ring-indigo-600/15">
      <Icon className="h-5 w-5" />
      {dir === "left" ? (
        <span className={`${barCommon} -left-[14px]`} />
      ) : (
        <span className={`${barCommon} -right-[14px]`} />
      )}
    </span>
  );
}

function Content({ step, right = false }: { step: Step; right?: boolean }) {
  return (
    <span className={["space-y-1 w-full", right ? "text-right" : "text-left"].join(" ")}>
      <span className="block text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400">
        {step.title}
      </span>
      <span className="block text-base font-medium text-slate-900 dark:text-slate-100">
        {step.text}
      </span>
    </span>
  );
}
