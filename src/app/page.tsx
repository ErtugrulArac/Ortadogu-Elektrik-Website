import Image from "next/image";
import Navbar from "@/components/navbar";
import Main from "@/components/main/main";
import Grafik from "@/components/grafik";
import Elguc from "@/components/elektriğingücü";
import Yonlendirme from "@/components/yönlendirmeseo";
import { TextReveal } from "@/components/alticizik/text-reveal";
import Adım from "@/components/adımadım/index"
import Sayac from "@/components/sayac/index"
import Yorumlar from "@/components/müşteriyorum/index"






export default function Page() {
  return (
    <main>
      <Main />
      <Grafik />
      <Elguc />
      <Adım />
      <div className="w-[92%] max-w-5xl mx-auto ">
        <TextReveal className="text-lg md:text-xl leading-relaxed">
          Ortadoğu Elektrik olarak Ankara ve çevresinde güvenilir elektrik altyapıları kuruyor; projelerinizi keşiften teslimata şeffaf ve hızlı biçimde hayata geçiriyoruz. Devreye alma sonrası periyodik bakım ve hızlı destekle sürekliliği güvence altına alıyor, arıza riskini azaltan çözümler sunuyoruz.
        </TextReveal>
      </div>
    
     <Sayac />
      <Yonlendirme />
     
      <Yorumlar />
     

    </main>
  );
}
