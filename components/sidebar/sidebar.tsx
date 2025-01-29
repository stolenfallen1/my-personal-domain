"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_MENU, SOCIAL_MEDIA } from "@/lib/constants/nav-menu";
import { ThemeSwitcher } from "../theme/theme-switcher";
import { Menu, X, Instagram, Facebook, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleKeyEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isMenuOpen) {
                toggleMenu();
            }
        };

        document.addEventListener("keydown", handleKeyEscape);
        return () => document.removeEventListener("keydown", handleKeyEscape);
    }, [isMenuOpen]);

    return (
        <>
            {/* Hamburger Menu Button */}
            <button
                className={cn("fixed top-5 right-5 z-50 px-2 py-1 rounded-md dark:text-white dark:border-amber-400", isMenuOpen ? "text-red-500 dark:text-red-500 duration-300" : "text-black")}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Sidebar */}
            <div
                className={cn(
                "fixed inset-0 z-40 bg-white/95 dark:bg-gray-950/95 pt-14 flex flex-col items-center transition-transform duration-300",
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Profile Section */}
                <div className="flex flex-col items-center mt-10">
                    <img
                        src="/images/business_image.jpeg"
                        alt="Business Profile"
                        className="w-32 h-32 rounded-full border-2 border-indigo-700 dark:border-amber-400"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="mt-8 flex flex-col items-center gap-4">
                    {NAV_MENU.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                                <p className="text-md font-light hover:opacity-70 md:text-xl dark:text-white">
                                {item.label}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Theme Switcher */}
                <div className="mt-6">
                    <ThemeSwitcher />
                </div>

                {/* Social Media Links */}
                <ul className="mt-10 flex items-center gap-6">
                    {SOCIAL_MEDIA.map((item, index) => (
                        <a
                        href={item.href}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {item.label === "Instagram" && <Instagram size={22} className="hover:text-red-400" />}
                        {item.label === "Facebook" && <Facebook size={22} className="hover:text-blue-800" />}
                        {item.label === "Linkedin" && <Linkedin size={22}  className="hover:text-sky-500" />}
                        {item.label === "Github" && <Github size={22} className="hover:text-slate-400" />}
                        </a>
                    ))}
                </ul>
            </div>
        </>
    );
}