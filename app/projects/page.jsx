"use client";

import { TitleSection } from "@/components/TitleSection";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { FaArrowRight, FaDemocrat, FaPlay } from "react-icons/fa";

export default function Projects() {
    return (
        <section
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
            id="projects"
        >
            <TitleSection text="Projects " />
            <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {Array(8).fill(null).map((_, index) => (
                    <div class="w-md p-6 bg-gray-800 shadow dark:bg-gray-800 rounded">
                        <p class="mb-3 font-bold text-sm text-yellow-400 dark:text-gray-400">Web</p>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">Barcode App</h5>
                        </a>
                        <p class="mb-3 font-normal text-sm text-blue-200 dark:text-gray-400">React, Tailwind, React-QR, Node</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-accent rounded gap-3">
                            Demo
                            <FaArrowRight />
                        </a>
                    </div>
                    ))}
                   
                </div>
            </div>
        </section>

        // <section id="projects">

        // </section>
    )
}