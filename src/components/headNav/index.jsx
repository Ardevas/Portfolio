// HeadNav.jsx

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
