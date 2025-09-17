import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ortadoğu Elektrik | Enerji Çözümleri ve Elektrik Taahhüt Hizmetleri",
  description:
    "Ortadoğu Elektrik; Ankara ve çevresinde güvenilir elektrik altyapıları kurar. Projelerinizi keşiften teslimata şeffaf ve hızlı biçimde hayata geçirir, periyodik bakım ve destek hizmetleriyle sürekliliği güvence altına alır.",
  keywords: [
    "Ortadoğu Elektrik",
    "elektrik",
    "enerji çözümleri",
    "elektrik taahhüt",
    "topraklama",
    "kompanzasyon",
    "elektrik tesisatı",
    "Ankara elektrik firması",
  ],
  openGraph: {
    title: "Ortadoğu Elektrik | Enerji Çözümleri ve Elektrik Taahhüt Hizmetleri",
    description:
      "Ankara ve çevresinde elektrik altyapıları, pano, topraklama ve enerji çözümleri. Güvenilir, hızlı ve profesyonel hizmet için Ortadoğu Elektrik.",
    url: "https://ortadoguelektrik.com/",
    siteName: "Ortadoğu Elektrik",
    images: [
      {
        url: "/ortadoğulogo.webp",
        width: 1200,
        height: 630,
        alt: "Ortadoğu Elektrik - Enerji Çözümleri",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  // Ekstra meta etiketleri
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "Ortadoğu Elektrik", url: "https://ortadoguelektrik.com" }],
  alternates: {
    canonical: "https://ortadoguelektrik.com",
  },
  themeColor: "#0f172a", // lacivert/mavi bir ton seçtim
};

import Main from "@/components/main/main";
import Grafik from "@/components/grafik";
import Elguc from "@/components/elektriğingücü";
import { TextReveal } from "@/components/alticizik/text-reveal";
import Adım from "@/components/adımadım/index";
import Yorumlar from "@/components/müşteriyorum/index";
import YönlendirmeSeo from "@/components/yönlendirmeseo/index";
import { HeroParallaxDemo } from "@/components/ui/HeroParallaxDemo";
import Footer from "@/components/footer/FooterCreatic";
import Blog from "@/components/blog/blog";
import Sss from "@/components/sss/app";
import Mockup from "@/components/mockup/index";

export default function Page() {
  return (
    <main> 
      <Main /> 
      <Grafik />
      <YönlendirmeSeo /> 
      <Elguc /> 
      <HeroParallaxDemo /> 
      <div className="w-[92%] max-w-5xl mx-auto "> 
        <TextReveal className="text-lg md:text-xl leading-relaxed">
          Ortadoğu Elektrik olarak Ankara ve çevresinde güvenilir elektrik
          altyapıları kuruyor; projelerinizi keşiften teslimata şeffaf ve hızlı
          biçimde hayata geçiriyoruz. Devreye alma sonrası periyodik bakım ve
          hızlı destekle sürekliliği güvence altına alıyor, arıza riskini
          azaltan çözümler sunuyoruz.
        </TextReveal>
      </div>
      <Adım />
      <Mockup />
      <Yorumlar />
      <Blog />
      <Sss />
      <Footer />
    </main>
  );
}
