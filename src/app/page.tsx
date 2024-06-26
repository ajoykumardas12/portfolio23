import Contact from "@components/sections/Contact";
import Hero from "@components/sections/Hero";
import Projects from "@components/sections/Projects";
import Skills from "@components/sections/Skills";
import Youtube from "@components/sections/Youtube";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Youtube />
      <Contact />
    </>
  );
}
