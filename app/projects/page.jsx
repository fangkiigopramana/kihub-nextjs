"use client";

import { TitleSection } from "@/components/TitleSection";
import { FaArrowRight } from "react-icons/fa";

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
                {/* <TitleSection text="Projects" /> */}
                <div className="container">
                    <h1 class="mb-4 text-3xl font-extrabold text-gray-100 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">My Latest</span> Work.</h1>
                    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>

                <div className="max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {projects.map((project, index) => (
                            <div key={index}
                                className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 p-4"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {project.category}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Tech Stacks: {project.tech_stacks}
                                </p>
                                <a
                                    href={project.demo_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 text-sm mt-4 inline-block"
                                >
                                    View Demo <FaArrowRight className="inline ml-1" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error(error);
        return (
            <section className="h-full" id="projects">
                <TitleSection text="Projects" />
            </section>
        );
    }
}