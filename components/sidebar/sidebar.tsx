"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import BusinessImage from "@/public/images/business_image.jpeg";
// import AltBusinessImage from "@/public/images/alt_business_image.svg";
import { NAV_MENU, SOCIAL_MEDIA } from '@/lib/constants/nav-menu'
import { Instagram, Facebook, Linkedin, Github, Menu } from 'lucide-react';

export function Sidebar() {    
    // const [showAnotherImage, setShowAnotherImage] = useState(false);

    const handleLogoClick = () => {
        // setShowAnotherImage(!showAnotherImage);
        alert("Logo clicked");
    }

    return (
        <>
            <nav className="hidden md:flex flex-col items-center border-r-2 px-8 lg:px-12 py-20">
                <section>
                    <div className="w-full relative">
                        <Image
                            src={BusinessImage}
                            alt="business profile image"
                            objectFit="cover"
                            className="w-36 h-36 lg:w-48 lg:h-48 top-0 left-0 object-cover rounded-full border-2 cursor-pointer border-indigo-700 dark:border-amber-400"
                            onClick={handleLogoClick}
                        />
                    </div>
                </section>
                <ul className="mt-8 flex flex-col items-center gap-5">
                    {NAV_MENU.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href}>
                                <p className="text-md lg:text-xl font-extralight hover:underline">{item.label}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center gap-4 absolute bottom-10">                
                    {SOCIAL_MEDIA.map((item) => (
                        <Link href={item.href}>
                            {item.label === "Instagram" && <Instagram size={24} className="hover:text-red-400" />}
                            {item.label === "Facebook" && <Facebook size={24} className="hover:text-blue-800" />}
                            {item.label === "Linkedin" && <Linkedin size={24}  className="hover:text-sky-500" />}
                            {item.label === "Github" && <Github size={24} className="hover:text-slate-400" />}
                        </Link>
                    ))}
                </ul>
            </nav>
        </>
    )
}