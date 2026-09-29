import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Approach />
        <Contact />
      </main>
    </>
  );
}
