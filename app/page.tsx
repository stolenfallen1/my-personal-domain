"use client";

import Hero from "./hero/page";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center justify-center">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>
    </>
  );
}