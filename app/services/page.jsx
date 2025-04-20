"use client";

import * as motion from "motion/react-client"


export default function Services() {
    return (
        <section className="flex flex-col justify-center xl:py-0" id="services">
            <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
                <h4 className="text-center mb-2 text-lg">What I offer !!</h4>
                <h2 className="text-center font-bold text-5xl">My Services</h2>
                <p className="text-center max-w-2xl mx-auto mt-5 mb-12">Offering responsive web design and development services,
                    specializing in creating intuitive user interfaces with HTML, CSS, JavaScript, MongoDB, ExpressJs, ReactJs,
                    NodeJs, TailwindCss, and UI/UX designing in Web Development using Wordpress.</p>
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 sm:place-items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.8 }}
                        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.8 }}
                        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.8 }}
                        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}