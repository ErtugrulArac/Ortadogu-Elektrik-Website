import FocusCardsDemo from "@/components/ui/FocusCardsDemo";
import { LayoutGridDemo } from "@/components/ui/LayoutGridDemo";
import HeroHighlightDemo from "@/components/ui/HeroHighlightDemo";
import PageLoader from "@/app/galeri/PageLoader";
import Galeriheading from "@/app/galeri/GaleriHeading"
import Galeritext from "@/app/galeri/GaleriTextBlock"

export default function GaleriPage() {
    return (
        <>
            <PageLoader minMs={800} label="Galeri yükleniyor…" />
            <main className="overflow-visible bg-black">
                <section className="mb-16">
                    {/* <HeroHighlightDemo /> */}
                    <Galeriheading/>
                    <LayoutGridDemo />

                </section>
                    <Galeritext />

                <section className="min-h-screen">
                    <FocusCardsDemo />
                </section>
            </main>
        </>
    );
}
