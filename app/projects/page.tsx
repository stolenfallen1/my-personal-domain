"use client";

import { motion } from "framer-motion";
import { PROJECTS as projects } from "@/lib/constants/projects";

export default function Projects() {
    return (
        <main className="h-full w-full flex flex-col items-center p-6 bg-slate-50 dark:bg-gray-900">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mt-3 mb-6"
            >
                Featured Projects
            </motion.h1>

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 * (index + 1) }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-400 dark:border-gray-600 hover:border-indigo-700 hover:dark:border-amber-400 duration-300"
                    >
                        <div className="relative aspect-video">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-indigo-700 dark:text-amber-400 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm md:text-[1rem] text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}