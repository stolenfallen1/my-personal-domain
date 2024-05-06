"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import BusinessImage from "@/public/images/business_image.jpeg";
import AltBusinessImage from "@/public/images/alt_business_image.svg";
import { NAV_MENU } from '@/lib/constants/nav-menu'
import { Instagram, Facebook, Linkedin, Github, Menu } from 'lucide-react';

export function MobileSidebar() {   
    return (
        <>
            <nav className="block md:hidden absolute top-6 left-2">
                <Menu />
                {/* <ul>
                    {NAV_MENU.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href
                            }>
                                <p className="text-md lg:text-xl font-extralight hover:underline">{item.label}</p>
                            </Link>
                        </li>
                    ))}
                </ul> */}
            </nav>
        </>
    )
}