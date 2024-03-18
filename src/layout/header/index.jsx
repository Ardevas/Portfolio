// Header.jsx

import React, { useEffect, useState } from "react";
import headNav from "../../components/headNav";
import { smoothScroll } from "../../components/scrollHandler";

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
            <a href="#accueil" onClick={(e) => smoothScroll(e, "accueil")}>
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#aboutSection"
              onClick={(e) => smoothScroll(e, "aboutSection")}
            >
              Présentation
            </a>
          </li>
          <li>
            <a
              href="#projectsSection"
              onClick={(e) => smoothScroll(e, "projectsSection")}
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#skillsSection"
              onClick={(e) => smoothScroll(e, "skillsSection")}
            >
              Compétences
            </a>
          </li>
          <li>
            <a href="./assets/documents/CV.pdf" target="_blank">
              Mon CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
