// Intro.jsx

import React from "react";
import SectionTitle from "../../../components/sectionTitle";

const Intro = () => {
  return (
    <div className="intro">
      <SectionTitle title="Bienvenue sur mon portfolio" />
      <h2>DEVELOPPEUR WEB FRONTEND</h2>
      <h2>Thomas BARDOT</h2>
      <div className="section-portrait">
        <img src="./portfolio/assets/images/Portrait.gif" alt="Thomas BARDOT" />
      </div>
    </div>
  );
};

export default Intro;
