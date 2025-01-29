"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
    return (
        <main className="h-full w-full flex flex-col items-center p-6 bg-slate-50 dark:bg-gray-900">
            {/* About Section */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mt-3 mb-6">
                    Get to know me more
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mb-6 flex flex-col sm:flex-row max-w-4xl w-full items-center gap-8 border border-gray-400 dark:border-gray-600 rounded-2xl shadow-lg overflow-hidden">
                    <div className="w-full sm:w-1/2">
                        <img
                            src="/images/business_image.jpeg"
                            alt="Business Profile"
                            className="w-full h-64 sm:h-full object-fit sm:object-cover rounded-none border-b-4 sm:border-b-0 sm:border-r-4 border-indigo-700 dark:border-amber-400"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full sm:w-1/2 p-5 sm:p-6">
                        <h1 className="text-xl md:text-2xl font-bold text-indigo-700 dark:text-amber-400 mb-4">
                            <TypeAnimation
                                sequence={[
                                    'Software Engineer',
                                    1300, 
                                    'Web Developer',
                                    1300, 
                                    'Mobile Developer',
                                    1300, 
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                speed={50}
                                className="inline-block"
                            />
                        </h1>
                        <p className="text-sm md:text-[1.065rem] leading-relaxed">
                            Results-driven with 3 years of relevant expertise, including almost 2 years of
                            professional experience. I am versatile in both front-end and back-end development. 
                        </p>
                        <p className="text-sm md:text-[1.065rem] leading-relaxed mt-4">
                            From API development, testing and client-side integration. Always eager to learn and grow, 
                            I strive to deliver impactful solutions that help business grow and scale.
                        </p>
                    </div>
            </motion.div>

            {/* What I can do Section */}
            <div className="max-w-5xl w-full">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    className="text-lg md:text-xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
                        What I'm capable of doing
                </motion.h1>
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8">
                    {/* Web Development */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.4 }}
                        className="p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-400 dark:border-gray-600 hover:border-indigo-700 hover:dark:border-amber-400 duration-300 w-full sm:w-1/3">
                            <h3 className="text-md md:text-lg font-bold text-indigo-700 dark:text-amber-400 mb-2 md:mb-3">
                                Web Development
                            </h3>
                            <p className="text-sm md:text-[1rem] italic text-gray-600 dark:text-gray-300">
                                Building custom web apps with modern frameworks.
                            </p>
                    </motion.div>
                    {/* UI / UX Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.55 }} 
                        className="p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-400 dark:border-gray-600 hover:border-indigo-700 hover:dark:border-amber-400 duration-300 w-full sm:w-1/3">
                            <h3 className="text-md md:text-lg font-bold text-indigo-700 dark:text-amber-400 mb-2 md:mb-3">
                                UI / UX Design
                            </h3>
                            <p className="text-sm md:text-[1rem] italic text-gray-600 dark:text-gray-300">
                                Designing UI's for web and mobile apps to enhance user experience.
                            </p>
                    </motion.div>
                    {/* Mobile Development */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.7 }}
                        className="p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-400 dark:border-gray-600 hover:border-indigo-700 hover:dark:border-amber-400 duration-300 w-full sm:w-1/3">
                            <h3 className="text-md md:text-lg font-bold text-indigo-700 dark:text-amber-400 mb-2 md:mb-3">
                                Mobile Development
                            </h3>
                            <p className="text-sm md:text-[1rem] italic text-gray-600 dark:text-gray-300">
                                Crafting cross-platform apps for iOS and Android.
                            </p>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
