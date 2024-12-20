import { TitleSection } from "@/components/TitleSection";
import { FaLinkedin } from "react-icons/fa";

export default async function Experiences() {
    try {
        // Fetching the data from API
        const res = await fetch('https://kihub.site/api/experiences', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch experiences data.');
        const { data: experiences } = await res.json(); // Extract "data" from response

        return (
            <section className="h-full" id="experiences">
                <TitleSection text="Experiences / " />
                <div className="container h-full mt-10">
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        {experiences.map((experience, index) => (
                            <li key={index} className="mb-10 ms-4">
                                {/* Timeline point */}
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                                {/* Experience details */}
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    {experience.duration}
                                </time>
                                <h3 className="text-lg font-semibold text-gray-200 dark:text-white">
                                    {experience.company_name}
                                </h3>
                                <h4 className="text-md font-semibold text-gray-300 dark:text-white">
                                    {experience.job_title}
                                </h4>
                                {/* Splitting the description into bullet points */}
                                <ul className="mb-4 text-base font-normal text-gray-400 dark:text-gray-400 list-disc pl-5">
                                    {experience.description
                                        .split('//') // Split the description by "//"
                                        .map((item, i) => (
                                            <li key={i}>{item.trim()}</li> // Trim whitespace and map to list items
                                        ))}
                                </ul>

                                {/* Show detail button (LinkedIn example placeholder) */}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 gap-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    <p>Show detail</p>
                                    <FaLinkedin />
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        );
    } catch (error) {
        console.error(error);
        return (
            <section className="h-full" id="experiences">
                <TitleSection text="Experiences" />
                <div className="container h-full mt-10">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        Failed to load experiences. Please try again later.
                    </p>
                </div>
            </section>
        );
    }
}