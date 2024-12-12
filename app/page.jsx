import Services from "./services/page";
import Resume from "./resume/page";
import Hero from "./hero/page";
import Work from "./work/page";

export default function Home() {
  return (
    <section className="h-full">
      <Hero />
      <Services />
      <Resume />
      <Work/>
    </section>
  );
}
