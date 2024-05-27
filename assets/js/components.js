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

  const filtervalue = filter.split(".")[1];
  console.log("filtervalue", filtervalue);
  console.log("btnsFilter", btnsFilter);

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
});

var swiperCapacitaciones = new Swiper(".swiper--trainings", {
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
    delay: 1500,
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
    delay: 2000,
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
});
swiperClientes.init();

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
  const regexNotEmpty = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const errors = [];

  regexNotEmpty.test(representante)
    ? null
    : errors.push(" Nombre del representante vacío o errado");
  regexNotEmpty.test(empresa)
    ? null
    : errors.push(" Nombre de la empresa vacío o errado");
  regexNotEmpty.test(mensaje) ? null : errors.push(" Mensaje vacío o errado");

  if (errors.length > 0) {
    errors.push(" Debe contener más de 2 letras");
  }

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
      title: "Mensaje enviado",
      text: "¡Gracias, En breve nos comunicaremos contigo",
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
