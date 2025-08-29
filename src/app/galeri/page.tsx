import FocusCardsDemo from "@/components/ui/FocusCardsDemo";
import { LayoutGridDemo } from "@/components/ui/LayoutGridDemo";
import HeroHighlightDemo from "@/components/ui/HeroHighlightDemo";
import PageLoader from "@/app/galeri/PageLoader";
import Galeriheading from "@/app/galeri/GaleriHeading"
import Galeritext from "@/app/galeri/GaleriTextBlock"
import { TextReveal } from "@/components/alticizik/text-reveal";



export default function GaleriPage() {
    return (
        <>
            <PageLoader minMs={800} label="Galeri yükleniyor…" />
            <main className="overflow-visible bg-black">
                <section className="mb-16">
                    {/* <HeroHighlightDemo /> */}
                    <Galeriheading />
                    <LayoutGridDemo />

                    <div className="w-[92%] max-w-5xl mx-auto py-10">
                        <TextReveal className="text-lg md:text-xl leading-relaxed">
                            Magic UI will change the way you design.
                        </TextReveal>
                    </div>


                </section>
                <Galeritext />

                <section className="min-h-screen">
                    <FocusCardsDemo />
                </section>
            </main>
        </>
    );
}
