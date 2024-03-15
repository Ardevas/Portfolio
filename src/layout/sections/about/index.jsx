// About.jsx

import React from "react";
import SectionTitle from "../../../components/sectionTitle";
import SectionRow from "../../../components/sectionRow";

const About = () => {
  return (
    <div className="about">
      <SectionTitle title="Présentation" />
      <SectionRow
        texte={
          <>
            Je m'appelle Thomas BARDOT.
            <br />
            <br />
            Suite à un licenciement économique, j'ai transformé cette situation
            en opportunité pour me réorienter professionnellement dans le
            développement web.
            <br />
            <br />
            Curieux et passionné par la programmation et les nouvelles
            technologies, j'ai profité de cette occasion pour apprendre et
            développer mes compétences en suivant une formation sur la
            plateforme en ligne OpenClassrooms.
            <br />
            <br />
            Je suis actuellement en recherche d'un emploi dans ce domaine et
            continue mon apprentissage afin de réaliser et d'améliorer des
            projets personnels et professionnels.
          </>
        }
      />
    </div>
  );
};

export default About;
