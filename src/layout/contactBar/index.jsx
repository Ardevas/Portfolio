// ContactBar.jsx

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactBar = () => {
  return (
    <section className="contact-bar" id="accueil">
      <div className="mail">
        <a href="mailto:ardevas.otter@gmail.com" className="contact-link">
          <span>ardevas.otter@gmail.com</span> <FaEnvelope />
        </a>
      </div>
      <div className="contact-links">
        <a
          href="https://github.com/Ardevas"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>Github</span>
        </a>
        <a
          href="https://fr.linkedin.com/in/thomas-bardot-a8931787?trk=people-guest_people_search-card"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span>Linkedin</span>
        </a>
      </div>
    </section>
  );
};

export default ContactBar;
