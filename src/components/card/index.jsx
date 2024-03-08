// Card.jsx

import React, { useState } from "react";
import Modal from "../../components/modal";

const Card = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={openModal}>
        <img src="./assets/images/image.jpg" alt="Miniature" />
        <div className="cardText">
          <h2>{project.title}</h2>
          <p>{project.caption}</p>
        </div>
      </div>
      {isModalOpen && <Modal project={project} onClose={closeModal} />}
    </>
  );
};

export default Card;
