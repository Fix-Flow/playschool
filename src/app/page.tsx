import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Ambient from "@/components/Ambient";
import Navbar from "@/components/Navbar";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Programs from "@/components/programs/Programs";
import Activities from "@/components/activities/Activities";
import Gallery from "@/components/gallery/Gallery";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import GlobalInteractions from "@/components/GlobalInteractions";

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Ambient />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Programs />
        <Activities />
        <Gallery />
        <Testimonials />
      </main>

      <Contact />
      <GlobalInteractions />
    </>
  );
}
