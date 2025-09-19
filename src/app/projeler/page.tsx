import Galeriheading from "@/app/projeler/GaleriHeading"
import Footer from "@/app/hakkimda/footer" 
import Demo from  "@/app/projeler/demo" 



export default function GaleriPage() {
    return (
        <>
            
            <main className="overflow-visible about-page-bg ">
                <section className="mb-16">
                      <Galeriheading />
                    <Demo/>
                  
                    {/* <LayoutGridDemo /> */}
                    

                  


                </section>
               
                    <Footer />

            </main>
        </>
    );
}
