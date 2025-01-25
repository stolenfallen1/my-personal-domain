"use client";

import { useState } from "react";
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

    return (
        <>
            {/* Hamburger Menu Button */}
            <button
                className="fixed top-5 right-5 z-50 p-2 rounded-md border bg-white shadow-md dark:bg-gray-800 dark:text-white"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Sidebar */}
            <div
                className={cn(
                "fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col items-center transition-transform duration-300",
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Profile Section */}
                <div className="flex flex-col items-center mt-10">
                <img
                    src="/images/business_image.jpeg"
                    alt="Business Profile"
                    className="w-24 h-24 rounded-full border-2 border-indigo-700 dark:border-amber-400"
                />
                <p className="mt-4 text-lg font-medium dark:text-white">Jhon Llyod Quizeo</p>
                </div>

                {/* Navigation Links */}
                <ul className="mt-8 flex flex-col items-center gap-4">
                {NAV_MENU.map((item, index) => (
                    <li key={index}>
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                        <p className="text-xl font-light hover:underline dark:text-white">
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
                    className="dark:text-white hover:opacity-80"
                    >
                    {item.label === "Instagram" && <Instagram size={24} />}
                    {item.label === "Facebook" && <Facebook size={24} />}
                    {item.label === "Linkedin" && <Linkedin size={24} />}
                    {item.label === "Github" && <Github size={24} />}
                    </a>
                ))}
                </ul>
            </div>
        </>
    );
}