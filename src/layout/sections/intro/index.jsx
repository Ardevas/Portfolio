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
        <video autoPlay muted loop className="portrait">
          <source src="./assets/images/Portrait.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Intro;
