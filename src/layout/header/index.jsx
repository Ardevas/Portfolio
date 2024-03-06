// Header.jsx

import React, { useEffect } from "react";
import headNav from "../../components/headNav/headNav";

const Header = () => {
  useEffect(() => {
    headNav();
  }, []);

  return (
    <header className="main-header">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#accueil">Accueil</a>
          </li>
          <li>
            <a href="#aboutSection">Présentation</a>
          </li>
          <li>
            <a href="#projectsSection">Projets</a>
          </li>
          <li>
            <a href="#skillsSection">Compétences</a>
          </li>
          <li>
            <a href="#cv">Mon CV</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
