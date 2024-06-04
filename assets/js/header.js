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

      burgerIcon.classList.remove("fa-times");
      burgerIcon.classList.add("fa-bars");
    } else {
      itemsLinks.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");

      burgerIcon.classList.remove("fa-times");
      burgerIcon.classList.add("fa-bars");
      navMenu.classList.remove("active");
    }
  });
});

/* Eventos para el header y btn de Whatsapp */
const logo = document.querySelector(".header__logo img");
const header = document.querySelector(".header__inner");
const headerHeight = header.offsetHeight; // capturamos el height del header
let btnWatch = document.querySelector(".social-networks");
let footer = document.querySelector(".footer");
let lastScrollY = window.scrollY; // capturamos la posicion del scroll
let lastInnerWidth = window.innerWidth;

function onScrollNavbar() {
  // console.log("scrolling", window.scrollY, "lastScrollY", lastScrollY);
  if (
    window.scrollY > 96
    // && lastScrollY <= 96
  ) {
    header.style.height = "115px";
    logo.style.width = "125px";
  } else if (window.scrollY <= 96 && lastScrollY > 96) {
    header.style.height = "132px";
    logo.style.width = "125px";
  }
  lastScrollY = window.scrollY;
}

function onResizeBtn() {
  let innerwidth = window.innerWidth;
  // console.log("resize1", innerwidth);
  if (innerwidth <= 1024) {
    btnWatch.style.display = "none";
  } else {
    btnWatch.style.display = "flex";
  }

  if (lastScrollY + window.innerHeight >= footer.offsetTop) {
    btnWatch.style.display = "none";
  }

  lastInnerWidth = innerwidth;
}

function onScrollBtn() {
  console.log("window.innerWidth", lastInnerWidth);
  // console.log(" window.scrollY ", window.scrollY);
  // console.log(" window.innerHeight ", window.innerHeight);
  // console.log(" footer.offsetTop ", footer.offsetTop);
  if (lastScrollY + window.innerHeight >= footer.offsetTop) {
    btnWatch.style.display = "none";
  } else {
    btnWatch.style.display = "flex";
  }

  if (lastInnerWidth <= 1024) {
    btnWatch.style.display = "none";
  }
}

// Para activar los active de los items del menu automaticamente
function onSCrollActiveAutomatic() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (window.scrollY >= top - 100 && window.scrollY < top + height - 100) {
      itemsLinks.forEach((item) => {
        item.classList.remove("active");
        const href = item.getAttribute("href").substring(1);
        if (section.getAttribute("id") === href) {
          item.classList.add("active");
        }
      });
    }
  });
}

function onClickSectionsStop() {
  itemsLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = item.getAttribute("href");
      const section = document.querySelector(href);
      const top = section.offsetTop;
      window.scrollTo({
        top: top - 75,
        behavior: "smooth",
      });
    });
  });
}

window.addEventListener("click", () => {
  onClickSectionsStop();
});

window.addEventListener("scroll", () => {
  onScrollNavbar();
  onScrollBtn();
  onSCrollActiveAutomatic();
});

window.addEventListener("resize", () => {
  onResizeBtn();
});
