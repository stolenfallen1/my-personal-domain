"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { cn } from '@/lib/utils';
import BusinessImage from "@/public/images/business_image.jpeg";
import AltBusinessImage from "@/public/images/alt_business_image.svg";
import { NAV_MENU } from '@/lib/constants/nav-menu'
import { Instagram, Facebook, Linkedin, Github, Menu } from 'lucide-react';

export function MobileSidebar() {   
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav className="block md:hidden absolute top-6 left-2">
                <Menu onClick={toggleMenu} className="cursor-pointer hover:text-indigo-700 hover:dark:text-amber-400" />
                <div className={cn("fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity", isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")} />
                <div className={cn("fixed top-0 left-0 h-full w-1/2 bg-white shadow-lg z-50 transform transition-transform", isMenuOpen ? "translate-x-0" : "-translate-x-full")}>
                        <ul className="mt-4">
                        {NAV_MENU.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href}>
                                    <p
                                        className="text-md lg:text-xl font-extralight hover:underline"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </p>
                                </Link>
                            </li>
                            ))}
                        </ul>
                </div>
            </nav>
        </>
    )
}