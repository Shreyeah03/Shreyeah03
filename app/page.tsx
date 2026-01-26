import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { StarField } from "@/components/star-field";
import { FloatingOrbs } from "@/components/floating-orbs";

export default function Home() {
  return (
    <>
      <StarField />
      <FloatingOrbs />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
