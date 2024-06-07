// Lógica para el acordeón
const accordions = [
  ...document.getElementsByClassName("home-section-benefits__card-content"),
];

accordions.map((accordion) => {
  accordion.addEventListener("click", (e) => {
    // console.log("AAAA");
    if (
      e.target.classList.contains("home-section-benefits__card-content-box") ||
      e.target.classList.contains("home-section-benefits__card-icon") ||
      e.target.classList.contains("fa-caret-down")
    ) {
      // accordion.firstChild.nextSibling.classList.toggle("active");
      accordion.classList.toggle("active");
    }
  });
});

// Filtros de Mixitup
const filterActive = document.querySelectorAll(".btn--filter");

filterActive.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterActive.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const btn = document.querySelector(".btn--filter");
//   const filter = btn.getAttribute("data-filter");

//   mixerPorfolio.filter(filter);
//   console.log("filter", filter);
//   if (filter === ".modulo-capacitaciones") {
//     btn.classList.add("active");
//     btn.click();
//   }
// });

let mixerPorfolio = mixitup(".card-product__grid", {
  selectors: {
    target: ".card-product",
  },
  animation: {
    duration: 400,
  },
  // animation: {
  //   enable: false,
  //   effects: "fade translateZ(-100px)",
  //   duration: 200,
  // },
});

// Swiper de Filters en vversión mobile
const swiperFilter = new Swiper(".swiper--filter", {
  // loop: true,
  speed: 400,
  // spaceBetween: 50,
  grabCursor: true,
  // autoplay: {
  //   delay: 2000,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiperFilter.init();

// Al cambiar de slide se actualiza el filtro
const btnsFilter = document.querySelectorAll(".btn--filter");
swiperFilter.on("slideChange", function () {
  swiperFilter.update();
  let btn = document.querySelector(".swiper-slide-active .btn--filter");
  let filter = btn.getAttribute("data-filter");

  mixerPorfolio.filter(filter);

  btnsFilter.forEach((btn) => {
    if (btn.getAttribute("data-filter") === filter) {
      btn.click();
    }
  });

  btnsFilter.forEach((btn) => {
    if (btn.getAttribute("data-filter") === filter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // generar logica para que todos los elementos se muestren
  if (filter === ".all") {
    mixerPorfolio.filter("all");
  }
});

var swiperCapacitaciones = new Swiper(".swiper--trainings", {
  loop: true,
  effect: "slider",
  grabCursor: true,
  spaceBetween: 15,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet custom-bullet",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },

    1560: {
      slidesPerView: 3,
    },
  },
  speed: 400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiperCapacitaciones.init();

// Swiper de clientes
var swiperClientes = new Swiper(".swiper--clients", {
  loop: true,
  effect: "slider",
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet custom-bullet",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },

    1560: {
      slidesPerView: 3,
    },
  },
  speed: 300,
});
swiperClientes.init();

// Swiper de section about
var swiperAbout = new Swiper(".swiper--about", {
  loop: true,
  effect: "slider",
  // effect: "fade",
  grabCursor: true,
  spaceBetween: 1,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet custom-bullet",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
swiperAbout.init();

// -------------------- Formulario  ------------------------------
const form = document.getElementById("form-footer");
// const modelo_morral = document.getElementById("morral").innerHTML
const whatsapp = "+51948030253";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const empresa = formData.get("empresa");
  const representante = formData.get("representante");
  const mensaje = formData.get("mensaje");

  // const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const regexNotEmpty = /^[a-zA-ZÀ-ÿ\s]/;
  const errors = [];
  // Validar campos vacios
  regexNotEmpty.test(representante)
    ? null
    : errors.push(" Nombre del representante vacío o errado");
  regexNotEmpty.test(empresa)
    ? null
    : errors.push(" Nombre de la empresa vacío o errado");
  regexNotEmpty.test(mensaje) ? null : errors.push(" Mensaje vacío o errado");
  // Validar longitud de campos
  empresa.length > 2
    ? null
    : errors.push(" Nombre de la empresa debe contener más de 2 letras");
  empresa.length <= 400
    ? null
    : errors.push(
        " Nombre de la empresa debe contener menos de 400 caracteres"
      );
  representante.length > 2
    ? null
    : errors.push(" Nombre del representante debe contener más de 2 letras");
  representante.length <= 400
    ? null
    : errors.push(
        " Nombre del representante debe contener menos de 400 caracteres"
      );
  mensaje.length > 2
    ? null
    : errors.push(" Nombre del mensaje debe contener más de 2 letras");
  mensaje.length <= 400
    ? null
    : errors.push(" Nombre del mensaje debe contener menos de 400 caracteres");

  if (errors.length > 0) {
    Swal.fire({
      icon: "error",
      title: "Datos ingresados no válidos",
      text: errors,
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#ff0808",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Mensaje en proceso",
      text: "Contínúe con la consulta en WhatsApp",
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#3085d6",
    });

    // const text = `Hola 👋, quiero comprar:%0A*Modelo:* ${modelo_morral}%0A*Cantidad:* ${counter.count}%0A*Color:* ${color}%0A*Precio por Unidad:* S./${precioOriginal}%0A*Total a pagar:* S./${precio.textContent}%0A%0A*Mis datos son:*%0A*Nombres:* ${nombres}%0A*Correo:* ${correo}%0A`;
    const text = `"Hola 👋, soy *${representante}* de la empresa *${
      empresa ?? "-"
    }*: %0A ${mensaje} .`;

    const url = `https://api.whatsapp.com/send?phone=${whatsapp}&text=${text}`;

    window.open(url, "_blank");
    form.reset();
  }
});

// contador de caracteres
const mensaje = document.getElementById("mensaje");
const counter = document.getElementById("counter");
mensaje.addEventListener("input", (e) => {
  const value = e.target.value;
  counter.textContent = value.length;

  if (counter.textContent > 400) {
    counter.style.color = "red";
  } else {
    counter.style.color = "white";
  }
});

let itemsLinksFooter = [...document.querySelectorAll("#itemActive")];
function onClickSectionsStopFooter() {
  itemsLinksFooter.forEach((item) => {
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

let itemArrow = document.querySelectorAll("#itemactivehero");
itemArrow.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const href = item.getAttribute("href");
    const section = document.querySelector(href);
    const top = section.offsetTop;
    window.scrollTo({
      top: top - 120,
      behavior: "smooth",
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  onClickSectionsStopFooter();
});
