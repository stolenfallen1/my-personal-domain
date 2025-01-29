"use client";

import Hero from "./hero/page";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}