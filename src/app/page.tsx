import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Programs from "@/components/sections/programs/Programs";
import Activities from "@/components/sections/activities/Activities";
import Gallery from "@/components/sections/gallery/Gallery";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Programs />
        <Activities />
        <Gallery />
        <Testimonials />
      </main>

      <Contact />
    </>
  );
}
