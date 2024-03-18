// ScrollHandler.jsx

import React, { useEffect } from "react";

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop; // The distance from the top of the page to the top of the section
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // The distance the page has been scrolled from the top

    // If the top of the section is less than or equal to the distance the page has been scrolled from the top
    if (sectionTop <= scrollTop + 1) {
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(
        `nav .nav-links a[href="#${sectionId}"]`
      );

      document
        .querySelectorAll("nav .nav-links a")
        .forEach((link) => link.classList.remove("active"));
      navLink.classList.add("active");

      return;
    }
  });
}

// To navigate to the section when the nav link is clicked
export default function ScrollHandler() {
  useEffect(() => {
    window.addEventListener("scroll", updateActiveNavLink);
    updateActiveNavLink(); // Initial call to update the active nav link when the page loads
    return () => {
      window.removeEventListener("scroll", updateActiveNavLink);
    };
  }, []);

  return null; // Return null because this component doesn't render anything
}

// To scroll smooth to a section
export const smoothScroll = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
