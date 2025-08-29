import Image from "next/image";
import Navbar from "@/components/navbar";
import Main from "@/components/main/main";
import Banner from "@/components/mainalttarafi/banner";
import Grafik from "@/components/grafik";
import Elguc from "@/components/elektriğingücü"; // klasör adın buysa aynen kalsın
import Yonlendirme from "@/components/yönlendirmeseo";
import { TextReveal } from "@/components/alticizik/text-reveal";


export default function Page() {
  return (
    <main>
      <Main />
      <Grafik />
      <Elguc />

      <div className="w-[92%] max-w-5xl mx-auto ">
        <TextReveal className="text-lg md:text-xl leading-relaxed">
        Ortadoğu Elektrik olarak elektriği güvene dönüştürüyoruz. Ankara ve çevresinde projelerinizi tasarlıyor, kuruyor, uzun ömürlü çözümlerle işletmenizi güçlendiriyoruz. Keşiften teslimata şeffaf teklif sunuyor, hızlı ve standartlara uygun uygulama yapıyoruz. Devreye alma sonrası periyodik bakım ve hızlı müdahaleyle sisteminizi koruyor, ihtiyaç duyduğunuz her an yanınızda olmayı taahhüt ediyoruz.
        </TextReveal>
      </div>

      {/* <TracingBeamDemo /> */}

      <Yonlendirme />
 

    </main>
  );
}
