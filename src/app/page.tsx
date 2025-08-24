import Image from "next/image";
import Navbar from "@/components/navbar"
import Main from "@/components/main/main"
import Banner from "@/components/mainalttarafi/banner"
import Grafik from "@/components/grafik/index"
import Elgüç from "@/components/elektriğingücü/index"

export default function Home() {
  return (
    <div>
    <Main/>
    <Banner/>
    <Grafik/>
    <Elgüç/>
    </div>
  );
}
