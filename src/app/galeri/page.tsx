import FocusCardsDemo from "@/components/ui/FocusCardsDemo";
import { LayoutGridDemo } from "@/components/ui/LayoutGridDemo";


import Galeriheading from "@/app/galeri/GaleriHeading"
import Galeritext from "@/app/galeri/GaleriTextBlock"





export default function GaleriPage() {
    return (
        <>
            
            <main className="overflow-visible bg-black">
                <section className="mb-16">
                    
                    
                    <Galeriheading />
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
