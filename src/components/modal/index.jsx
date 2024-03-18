import React from "react";
import { FaTimes } from "react-icons/fa";
import Carousel from "../carousel";

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-close">
        <FaTimes className="close-icon" onClick={onClose} />
      </div>
      <div className="modal-title">
        <h2>{project.title}</h2>
      </div>
      <Carousel images={project.image} />
      <div className="modal-body">
        <p>{project.texte}</p>
        <p>{project.texte1}</p>
        <p>{project.texte2}</p>
      </div>
      <div className="modal-link">
        <a href={project.link} target="_blank" rel="noreferrer">
          Voir le projet
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            Voir le site
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
