import Link from 'next/link'
import Image from 'next/image'
import BusinessImage from "@/public/business_image.jpeg";
import { NAV_MENU } from '@/lib/constants/nav-menu'

export function Sidebar() {    
    return (
        <nav className="flex flex-col items-center border-r-2 px-12 py-20">
            <section>
            <div className="w-full relative">
                <Image
                    src={BusinessImage}
                    alt="business profile image"
                    objectFit="cover"
                    className="w-48 h-48 top-0 left-0 object-cover rounded-full border-2 border-red-500"
                />
            </div>
            </section>
            <ul className="mt-8 flex flex-col items-center gap-5">
                {NAV_MENU.map((item) => (
                    <li key={item.label}>
                        <Link href={item.href}>
                            <p className="text-xl font-extralight">{item.label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}