import Image from "next/image";
import Navbar from "@/components/navbar";
import Main from "@/components/main/main";
import Banner from "@/components/mainalttarafi/banner";
import Grafik from "@/components/grafik";
import Elguc from "@/components/elektriğingücü"; // klasör adın buysa aynen kalsın
import Yonlendirme from "@/components/yönlendirmeseo";




// src/app/page.tsx
// import FocusCardsDemo from "@/components/ui/FocusCardsDemo";


export default function Page() {
  return (
    <main>
      <Main />
      <Grafik />
      <Elguc />
      <Yonlendirme />
      {/* <FocusCardsDemo /> */}

    </main>
  );
}
