import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function Hero(second) {
    return (
        <>
            <div className="container mx-auto text-center xl:pt-[calc(5rem+2rem)]" id="top">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br /> <span className="text-accent">Fangki.dev</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae cupiditate inventore mollitia voluptates corrupti. Quo atque maxime non et! Cupiditate.</p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                                <span>Download CV</span>
                                <FileDown />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social ContainerStyle="flex gap-6" IconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
        </>
    )
}