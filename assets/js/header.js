// Agregamos la clase active al menu
const burgerIcon = document.getElementById("burger");
const navMenu = document.getElementById("menu");
burgerIcon.addEventListener("click", () => {
  if (burgerIcon.classList.contains("fa-bars")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-times");
  } else {
    burgerIcon.classList.remove("fa-times");
    burgerIcon.classList.add("fa-bars");
  }
  navMenu.classList.toggle("active");
});

// Agregamos la clase active a los items del menu
const itemsLinks = [...document.querySelectorAll("#itemActive")];
itemsLinks.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      itemsLinks.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    }
  });
});

// Luego de scrollear hacia abajo, el header cambia de height y el logo
const logo = document.querySelector(".header__logo img");
const header = document.querySelector(".header__inner");
const headerHeight = header.offsetHeight; // capturamos el height del header
let lastScrollY = window.scrollY; // capturamos la posicion del scroll
window.addEventListener("scroll", () => {
  // console.log("scrolling", window.scrollY, "lastScrollY", lastScrollY);
  if (window.scrollY > 96 && lastScrollY <= 96) {
    header.style.height = "96px";
    logo.style.width = "56px";
  } else if (window.scrollY <= 96 && lastScrollY > 96) {
    header.style.height = "120px";
    logo.style.width = "76px";
  }
  lastScrollY = window.scrollY;
});
