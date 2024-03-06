// Home.jsx

import React, { useState } from "react";

import About from "../../layout/sections/about";
import Projects from "../../layout/sections/projects";
import Skills from "../../layout/sections/skills";

const Home = () => {
  return (
    <main>
      <section id="aboutSection">
        <About />
      </section>
      <section id="projectsSection">
        <Projects />
      </section>
      <section id="skillsSection">
        <Skills />
      </section>
    </main>
  );
};

export default Home;
