import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Programs from "@/components/sections/programs/Programs";
import Activities from "@/components/sections/activities/Activities";
import Gallery from "@/components/sections/gallery/Gallery";
import Testimonials from "@/components/sections/testimonials/Testimonials";


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


    </>
  );
}
