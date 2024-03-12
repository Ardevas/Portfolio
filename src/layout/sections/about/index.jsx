// About.jsx

import React from "react";
import SectionTitle from "../../../components/sectionTitle";
import SectionRow from "../../../components/sectionRow";

const About = () => {
  return (
    <div className="about">
      <SectionTitle title="Présentation" />
      <SectionRow
        texte="
          Je suis un développeur web junior, passionné par la programmation et
          le développement web. J'ai commencé à apprendre le développement web
          il y a un an, et j'ai acquis des compétences en
          HTML, CSS, JavaScript et React.

          J'ai également acquis des compétences en développement web en suivant
          des tutoriels sur YouTube et en suivant des cours sur la plateforme en
          ligne OpenClassrooms.

          J'ai également acquis des compétences en développement web en suivant
          des tutoriels sur YouTube et en suivant des cours sur la plateforme en
          ligneOpenClassrooms."
      />
    </div>
  );
};

export default About;
