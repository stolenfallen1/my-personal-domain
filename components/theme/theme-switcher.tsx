"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import ThemeSwitchEmoji from "./emojis/theme-switch-emoji";

export function ThemeSwitcher() {
    const { resolvedTheme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(resolvedTheme === "dark");
    
    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setTheme(newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="flex items-center justify-center">
            <button
                className="relative w-16 h-8 rounded-full p-1 transition-all duration-300 bg-indigo-700 dark:bg-amber-400"
                onClick={toggleTheme}
            >
                <span
                    className="absolute inset-0 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-300 translate-x-0 dark:translate-x-full"
                >
                    <ThemeSwitchEmoji isDark={isDarkMode} />
                </span>
            </button>
        </div>
    );
}



