import Skills from "./components/sections/Skills";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Skills />
    </main>
  );
}
