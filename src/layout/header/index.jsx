// Header.jsx

import React, { useEffect, useState } from "react";
import headNav from "../../components/headNav/headNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  useEffect(() => {
    headNav();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
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
