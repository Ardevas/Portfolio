// Projects.jsx

import React from "react";
import SectionTitle from "../../../components/sectionTitle";
import Card from "../../../components/card";
import projectsData from "../../../data/projects.json";

const Projects = () => {
  return (
    <div className="projects">
      <SectionTitle title="Projets" />
      <div className="projects-cards">
        {projectsData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
