// About.jsx

import React from "react";
import SectionTitle from "../../../components/sectionTitle";

const About = () => {
  return (
    <div className="about">
      <SectionTitle title="Présentation" />
      <div className="section-row">
        <p>
          Je suis un développeur web junior, passionné par la programmation et
          le développement web. J'ai commencé à apprendre le développement web
          il y a un an, et j'ai acquis des compétences en{" "}
          <strong>HTML, CSS, JavaScript et React.</strong>
          <br />
          <br />
          J'ai également acquis des compétences en développement web en suivant
          des tutoriels sur YouTube et en suivant des cours sur la plateforme en
          ligneOpenClassrooms.
          <br />
          <br />
          J'ai également acquis des compétences en développement web en suivant
          des tutoriels sur YouTube et en suivant des cours sur la plateforme en
          ligneOpenClassrooms.
        </p>
      </div>
    </div>
  );
};

export default About;
