import { useEffect } from "react";

const Background = () => {
  useEffect(() => {
    VANTA.WAVES({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 1440.0,
      minWidth: 400.0,
      scale: 0.6,
      scaleMobile: 1.0,
      color: 0x2e6bac,
      shininess: 76.0,
      waveHeight: 19.5,
      waveSpeed: 0.85,
      zoom: 0.65,
    });
  }, []); // Empty array to run only once

  return <div id="background"></div>;
};

export default Background;
