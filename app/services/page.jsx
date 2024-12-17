"use client";

import { TitleSection } from "@/components/TitleSection";

const services = [
    {
        num: '01',
        title: 'Software Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum excepturi quisquam error similique nobis enim ipsa! Assumenda nesciunt cum provident facilis in perferendis autem nam sequi voluptatibus, laudantium exercitationem quia repellendus! A, possimus explicabo facere nobis cumque maiores, ipsum praesentium corrupti necessitatibus voluptate dignissimos voluptates aperiam nisi? Velit, nesciunt architecto.',
        href: 'service-1'
    }
]

export default function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0" id="services">
            <TitleSection text={"Our Services "} />
            <div className="container mx-auto">
                <div class="grid md:grid-cols-2 gap-12">
                    <div class="lg:w-3/4">
                        <p class="mt-3 text-gray-300 dark:text-neutral-400">
                            I am a freelancer specializing in <strong>Web Development</strong>, <strong>API Development</strong>, and <strong>Android Development</strong>. I help businesses build functional and efficient digital solutions tailored to their needs.
                        </p>
                    </div>

                    <div class="space-y-6 lg:space-y-10">
                        <div class="flex gap-x-5 sm:gap-x-8">
                            <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-200 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            </span>
                            <div class="grow">
                                <h3 class="text-base sm:text-lg font-semibold text-gray-200 dark:text-neutral-200">
                                    Industry-leading documentation
                                </h3>
                                <p class="mt-1 text-gray-400 dark:text-neutral-400">
                                    I deliver clean, well-documented code to ensure smooth integration and collaboration in all stages of development.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-x-5 sm:gap-x-8">
                            <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-200 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                            </span>
                            <div class="grow">
                                <h3 class="text-base sm:text-lg font-semibold text-gray-200 dark:text-neutral-200">
                                    Strong API Development
                                </h3>
                                <p class="mt-1 text-gray-400 dark:text-neutral-400">
                                    I design and develop robust, secure, and scalable APIs that seamlessly connect various systems and applications.
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-x-5 sm:gap-x-8">
                            <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-200 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                            </span>
                            <div class="grow">
                                <h3 class="text-base sm:text-lg font-semibold text-gray-200 dark:text-neutral-200">
                                    Android Development Expertise
                                </h3>
                                <p class="mt-1 text-gray-400 dark:text-neutral-400">
                                    I create high-quality Android applications with a focus on performance, usability, and user satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}