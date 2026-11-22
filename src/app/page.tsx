import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ProofStrip, Quality, Services } from "@/components/offer-sections";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Tools } from "@/components/tools";
import { TrackRecord } from "@/components/track-record";

export default function Home() {
  return (
      <main className="w-full overflow-x-clip bg-paper">
      <Hero />
      <ProofStrip />
      <Projects />
      <Services />
      <Quality />
      <About />
      <Skills />
      <Tools />
      <TrackRecord />
      <Contact />
    </main>
  );
}
