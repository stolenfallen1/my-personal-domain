"use client";

import { motion } from "framer-motion";
import Hero from "./hero/page";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.section 
        id="home"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        // viewport={{ once: true }}
        >
          <Hero />
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        initial={{ opacity: 0, y: 50  }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        // viewport={{ once: true }}
        >
          <About />
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        initial={{ opacity: 0, y: 50  }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        // viewport={{ once: true }}
        >
          <Projects />
      </motion.section>
    </>
  );
}