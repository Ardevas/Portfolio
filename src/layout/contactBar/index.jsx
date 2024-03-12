// ContactBar.jsx

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactBar = () => {
  return (
    <section className="contact-bar" id="accueil">
      <div className="mail">
        <a href="mailto:ardevas.otter@gmail.com" className="contact-link">
          ardevas.otter@gmail.com <FaEnvelope />
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
          Github
        </a>
        <a
          href="https://linkedin.com/in/votreprofil"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          Linkedin
        </a>
      </div>
    </section>
  );
};

export default ContactBar;
