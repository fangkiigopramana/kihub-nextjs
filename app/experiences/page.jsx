import { TitleSection } from "@/components/TitleSection";
import { FaLinkedin } from "react-icons/fa";

export default function Experiences() {
    return (
        <section className="h-full">
            <TitleSection text=" Experiences " />
            <div className="container h-full mt-10">
                <ol class="relative border-s border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Start - End Month 2022</time>
                        <h3 class="text-lg font-semibold text-gray-200 dark:text-white">Company Name</h3>
                        <h4 class="text-md font-semibold text-gray-400 dark:text-white">Job Title</h4>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, aspernatur?</p>
                        <a href="#" class="inline-flex items-center px-4 py-2 gap-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            <p>Show detail</p>
                            <FaLinkedin /> </a>
                    </li>
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Start - End Month 2022</time>
                        <h3 class="text-lg font-semibold text-gray-200 dark:text-white">Company Name</h3>
                        <h4 class="text-md font-semibold text-gray-400 dark:text-white">Job Title</h4>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, aspernatur?</p>
                        <a href="#" class="inline-flex items-center px-4 py-2 gap-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            <p>Show detail</p>
                            <FaLinkedin /> </a>
                    </li>
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Start - End Month 2022</time>
                        <h3 class="text-lg font-semibold text-gray-200 dark:text-white">Company Name</h3>
                        <h4 class="text-md font-semibold text-gray-400 dark:text-white">Job Title</h4>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, aspernatur?</p>
                        <a href="#" class="inline-flex items-center px-4 py-2 gap-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            <p>Show detail</p>
                            <FaLinkedin /> </a>
                    </li>
                </ol>
            </div>
        </section>
    )
}