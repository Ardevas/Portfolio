// Carousel.jsx

import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use useffect to change the image every x milliseconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the image index to the next image in the array
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]); // Trigger the effect when the image array changes

  return (
    <div className="modal-carousel">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
    </div>
  );
};

export default Carousel;
