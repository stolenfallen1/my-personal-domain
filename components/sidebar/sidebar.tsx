"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import BusinessImage from "@/public/images/business_image.jpeg";
// import AltBusinessImage from "@/public/images/alt_business_image.svg";
import { NAV_MENU } from '@/lib/constants/nav-menu'
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
                            className="w-36 h-36 lg:w-48 lg:h-48 top-0 left-0 object-cover rounded-full border-2 border-red-500 cursor-pointer"
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
                <ul className="flex items-center gap-4 absolute bottom-8">                
                    <Instagram />
                    <Facebook />
                    <Linkedin />
                    <Github />
                </ul>
            </nav>
        </>
    )
}