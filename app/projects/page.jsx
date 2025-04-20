"use client";

import { TitleSection } from "@/components/TitleSection";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { FaArrowRight, FaDemocrat, FaPlay } from "react-icons/fa";

export default async function Projects() {
    try {
        // Fetching the data from API
        const res = { 
            ok: true, 
            json: async () => ({
            data: [
                {
                category: "Web Development",
                name: "Portfolio Website",
                tech_stacks: "React, Next.js, Tailwind CSS",
                demo_url: "portfolio-demo.com"
                },
                {
                category: "Mobile App",
                name: "Task Manager",
                tech_stacks: "React Native, Redux",
                demo_url: "taskmanager-demo.com"
                },
                {
                category: "Game Development",
                name: "Space Invaders",
                tech_stacks: "Unity, C#",
                demo_url: "spaceinvaders-demo.com"
                }
            ]
            })
        };
        if (!res.ok) throw new Error('Failed to fetch experiences data.');
        const { data: projects } = await res.json(); // Extract "data" from response
        return (
            <section
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
                id="projects"
            >
                <TitleSection text="Projects " />
                <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div className="w-md p-6 bg-gray-800 shadow dark:bg-gray-800 rounded" key={index}>
                                <p className="mb-3 font-bold text-sm text-yellow-400 dark:text-gray-400">{project.category}</p>
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">{project.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-sm text-blue-200 dark:text-gray-400">{project.tech_stacks}</p>
                                <a href={`https://${project.demo_url}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-accent rounded gap-3">
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
    } catch (error) {
        console.error(error);
        return (
            <section className="h-full" id="projects">
                <TitleSection text="Projects" />
            </section>
        );
    }
}