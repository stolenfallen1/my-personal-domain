"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Sun from "@/public/icons/sun.png";
import Moon from "@/public/icons/moon.png";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setTheme(newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="flex items-center justify-center">
            <button
                className={cn("relative w-16 h-8 rounded-full p-1 transition-all duration-300", isDarkMode ? "bg-gray-800" : "bg-amber-400")}
                onClick={toggleTheme}
            >
                <div
                    className={cn("absolute inset-0 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-300", isDarkMode ? "translate-x-full" : "translate-x-0")}
                >
                    <Image 
                        src={isDarkMode ? Sun : Moon}
                        alt="Switch Icons for Light and Dark Mode"
                        width={24} 
                        height={24}
                    />
                </div>
            </button>
        </div>
    );
}



