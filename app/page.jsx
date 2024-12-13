import Services from "./services/page";
import Projects from "./projects/page";
import Hero from "./hero/page";
import Experiences from "./experiences/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <section className="h-full">
      <Hero />
      <Services />
      <Projects />
      <Experiences/>
      <Contact/>
    </section>
  );
}
