import Services from "./services/page";
import Projects from "./projects/page";
import Hero from "./hero/page";
import Experiences from "./experiences/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="h-full">
      <Hero />
      <Services />
      <Projects />
      <Experiences/>
      <Footer/>
    </section>
  );
}
