"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { BLOGS as blogs } from "@/lib/constants/blogs";

export default function Blogs() {
    return (
        <main className="h-full w-full flex flex-col items-center p-6 bg-slate-50 dark:bg-gray-900">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-5"
            >
                Personal Blogs
            </motion.h1>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="w-full max-w-4xl" 
            >
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,        
                        stretch: 0,
                        depth: 150,  
                        modifier: 1.5,
                        slideShadows: true
                    }}
                    initialSlide={0}      
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="w-full py-6"  
                >
                    {blogs.map((blog, index) => (
                        <SwiperSlide 
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative aspect-[16/10]">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                                    <p className="text-white text-xs">{blog.date} · {blog.readTime}</p>
                                </div>
                            </div>
                            <div className="p-5"> 
                                <h3 className="text-lg sm:text-xl font-bold text-indigo-700 dark:text-amber-400 mb-1">
                                    {blog.title}
                                </h3>
                                <p className="text-sm md:text-[1rem] text-gray-600 dark:text-gray-300 line-clamp-2">
                                    {blog.excerpt}
                                </p>
                                <Link href="/blogs" className="inline-block mt-4 mb-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                    Read More →
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </main>
    );
}