// Modal.jsx

import React from "react";

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-title">
        <h2>{project.title}</h2>
        <button onClick={onClose}>Fermer</button>
      </div>
      <div className="modal-image">
        <img src={project.image} alt="Header" />{" "}
      </div>
      <div className="modal-body">
        <p>{project.texte}</p>
      </div>
    </div>
  );
};

export default Modal;
