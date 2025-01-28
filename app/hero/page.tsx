"use client";

import { useState } from 'react';

import { Send, Mail, Download, FileDown } from 'lucide-react';
import { cn } from "@/lib/utils";

import { FallingParticlesAnimation } from '@/components/theme/falling-paticles-animation';

export default function Hero() {
    const [isHoveredResume, setIsHoveredResume] = useState(false);
    const [isHoveredContact, setIsHoveredContact] = useState(false);

    return (
        <main className="flex items-center justify-center">
        <FallingParticlesAnimation />
        <section className="text-center max-w-2xl px-4 z-10">
            <div className="flex items-center justify-center mb-2 md:mb-4">
            <h1 className="text-xl font-bold mr-2 sm:text-2xl md:text-4xl md:mr-4">
                Hi, I'm Jhon Llyod Quizeo 
            </h1>
            <span className="text-lg sm:text-xl md:text-4xl animate-wave">👋</span>
            </div>
            <p className="text-md italic text-gray-600 mb-3 font-medium sm:text-lg md:mb-6 md:text-2xl dark:text-gray-300">
            Turning complex problems into elegant solutions.
            </p>
            <div className="flex justify-center space-x-3">
            <button 
                onMouseEnter={() => setIsHoveredResume(true)}
                onMouseLeave={() => setIsHoveredResume(false)}
                className="relative w-24 h-[32px] bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors overflow-hidden md:w-32 md:h-[40px]"
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className={cn("absolute flex items-center justify-center transition-all duration-300", isHoveredResume ? "opacity-0 -translate-y-4" : "opacity-100")}>
                        <Download className="mr-1 md:mr-2" size={18} /> 
                        <p className="text-sm sm:text-md md:text-lg">Resume</p>
                    </div>
                    <div className={cn("absolute flex items-center justify-center transition-all duration-300", isHoveredResume ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
                        <FileDown className="mr-1 md:mr-2" size={18} /> 
                        <p className="text-sm sm:text-md md:text-lg">Resume</p>
                    </div>
                </div>
            </button>
            <button 
                onMouseEnter={() => setIsHoveredContact(true)}
                onMouseLeave={() => setIsHoveredContact(false)}
                className="relative flex items-center w-28 h-[32px] md:w-40 md:h-[40px] border-2 border-blue-700 text-blue-700 rounded-lg hover:bg-blue-200/45 dark:hover:bg-gray-900/70 transition-colors overflow-hidden"
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className={cn("absolute flex items-center justify-center transition-all duration-300", isHoveredContact ? "opacity-0 -translate-y-4" : "opacity-100")}>
                        <Send className="mr-1 md:mr-2" size={18} /> 
                        <p className="text-sm sm:text-md md:text-lg">Contact Me</p>
                    </div>
                    <div className={cn("absolute flex items-center justify-center transition-all duration-300", isHoveredContact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
                        <Mail className="mr-1 md:mr-2" size={18} /> 
                        <p className="text-sm sm:text-md md:text-lg">Contact Me</p>
                    </div>
                </div>
            </button>
            </div>
        </section>
        </main>
    );
}