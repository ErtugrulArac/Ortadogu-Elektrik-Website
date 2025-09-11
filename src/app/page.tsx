import Image from "next/image";
import Navbar from "@/components/navbar";
import Main from "@/components/main/main";
import Grafik from "@/components/grafik";
import Elguc from "@/components/elektriğingücü";
import { TextReveal } from "@/components/alticizik/text-reveal";
import Adım from "@/components/adımadım/index"
import Yorumlar from "@/components/müşteriyorum/index"
import YönlendirmeSeo from "@/components/yönlendirmeseo/index"
import { HeroParallaxDemo } from "@/components/ui/HeroParallaxDemo";
import Footer from "@/components/footer/FooterCreatic"
import Blog from "@/components/blog/blog"
import Bulanık from "@/components/bulanık/app"


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
          Ortadoğu Elektrik olarak Ankara ve çevresinde güvenilir elektrik altyapıları kuruyor; projelerinizi keşiften teslimata şeffaf ve hızlı biçimde hayata geçiriyoruz. Devreye alma sonrası periyodik bakım ve hızlı destekle sürekliliği güvence altına alıyor, arıza riskini azaltan çözümler sunuyoruz.
        </TextReveal>
      </div>

      <Adım />
      <Yorumlar />
      <Bulanık/>

      <Blog/>
      
      

   
      <Footer />



   



    </main>
  );
}
