// HeadNav.jsx

// The headNav function is used to add an active class to the nav link when the link is clicked
function headNav() {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  const accueilLink = document.querySelector('.nav-links a[href="#accueil"]');
  accueilLink.classList.add("active");
}

export default headNav;
