import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SectionDivider index={1} />
      <Experience />
      <SectionDivider index={2} />
      <Projects />
      <SectionDivider index={3} />
      <Skills />
      <SectionDivider index={4} />
      <Credentials />
      <SectionDivider index={5} />
      <Contact />
    </main>
  );
}
