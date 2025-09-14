import FocusCardsDemo from "@/components/ui/FocusCardsDemo";
import { LayoutGridDemo } from "@/components/ui/LayoutGridDemo";
import Galeriheading from "@/app/galeri/GaleriHeading"
import Galeritext from "@/app/galeri/GaleriTextBlock"
import Footer from "@/app/hakkimda/footer"



export default function GaleriPage() {
    return (
        <>
            
            <main className="overflow-visible about-page-bg ">
                <section className="mb-16">
                    
                    
                    <Galeriheading />
                    <LayoutGridDemo />
                    

                  


                </section>
                <Galeritext />

                <section className="min-h-screen">
                    <FocusCardsDemo />
                </section>
                    <Footer />

            </main>
        </>
    );
}
