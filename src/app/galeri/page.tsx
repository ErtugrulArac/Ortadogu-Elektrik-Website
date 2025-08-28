import FocusCardsDemo from "@/components/ui/FocusCardsDemo";
import { LayoutGridDemo } from "@/components/ui/LayoutGridDemo";
import HeroHighlightDemo from "@/components/ui/HeroHighlightDemo";
import PageLoader from "@/app/galeri/PageLoader";
import Galeriheading from "@/app/galeri/GaleriHeading"

export default function GaleriPage() {
    return (
        <>
            <PageLoader minMs={800} label="Galeri yükleniyor…" />
            <main className="overflow-visible">
                <section className="mb-16">
                    <HeroHighlightDemo />
                    <Galeriheading/>
                    <LayoutGridDemo />

                </section>

                <section className="min-h-screen">
                    <FocusCardsDemo />
                </section>
            </main>
        </>
    );
}
