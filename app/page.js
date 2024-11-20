import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full text-center mt-10">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-200 md:text-5xl lg:text-6xl dark:text-white">Fullstack Web Developer</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">I'm <span className="text-accent hover:text-slate-300">Fangki</span> , I <span className="text-accent">build my own projects.</span></p>
        <Button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center">
          About me <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
