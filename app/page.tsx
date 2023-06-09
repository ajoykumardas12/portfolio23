import Skills from "./components/sections/Skills";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
