import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import FeaturedProject from '@/components/sections/FeaturedProject';
import Hero from '@/components/sections/Hero';
import HobbyGallery from '@/components/sections/HobbyGallery';
import SecondaryProjects from '@/components/sections/SecondaryProjects';
import Skills from '@/components/sections/Skills';
import Navbar from '@/components/ui/Navbar';

export default function Home() {
  // Section ordering mirrors how recruiters scan: impact first, proof next, then depth.
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <SecondaryProjects />
      <Experience />
      <Skills />
      <HobbyGallery />
      <Contact />
    </main>
  );
}
