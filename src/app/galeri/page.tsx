import Galeriheading from "@/app/galeri/GaleriHeading"
import Footer from "@/app/hakkimda/footer" 
import Demo from  "@/app/galeri/demo" 



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
