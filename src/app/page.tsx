import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Tools } from "@/components/tools";
import { TrackRecord } from "@/components/track-record";

export default function Home() {
  return (
      <main className="w-full overflow-x-hidden bg-[#fafbff]">
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <TrackRecord />
      <Contact />
    </main>
  );
}
