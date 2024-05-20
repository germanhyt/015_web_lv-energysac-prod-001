let loader = document.querySelector(".loader");
let section = document.querySelector("#section");
let overlay = document.querySelector("#overlay");

// logica para vez mientras no cargue el contenido de la pagina renderice el loader
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    overlay.style.display = "none";
    section.style.display = "none";
  }, 2000);
});

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

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn--filter");
  const filter = btn.getAttribute("data-filter");

  mixerPorfolio.filter(filter);

  if (filter === "modulo-capacitaciones") {
    btn.classList.add("active");
    btn.click();
  }
});

filterActive.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterActive.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

let mixerPorfolio = mixitup(".card-product__grid", {
  selectors: {
    target: ".card-product",
  },
  animation: {
    duration: 300,
  },
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

const form = document.getElementById("form-footer")
// const modelo_morral = document.getElementById("morral").innerHTML
const whatsapp = "+51910139973";

form.addEventListener("submit", (e)=> {
  e.preventDefault()

  const formData = new FormData(form)

  formData.append("cantidad", counter.count)
  formData.append("precio", precio.textContent)

  const nombres = formData.get("nombres");
  const color = formData.get("colores");
  const correo = formData.get("correo");

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const errors = [];
  
  regexEmail.test(correo) ? null : errors.push("Correo no valido");
  nombres.length <= 2 ? errors.push("El nombre debe ser mayor a 2 letras") : null;

  if(errors.length > 0) {
    Swal.fire({
      icon: 'error',
      title: 'Datos ingresados no válidos',
      text: errors,
      confirmButtonText:'Cerrar',
    });
  }else {
    Swal.fire("¡Gracias, su pedido fue enviado correctamente!", '', 'success')
    const text = `Hola 👋, quiero comprar:%0A*Modelo:* ${modelo_morral}%0A*Cantidad:* ${counter.count}%0A*Color:* ${color}%0A*Precio por Unidad:* S./${precioOriginal}%0A*Total a pagar:* S./${precio.textContent}%0A%0A*Mis datos son:*%0A*Nombres:* ${nombres}%0A*Correo:* ${correo}%0A`

    const url = `https://api.whatsapp.com/send?phone=${whatsapp}&text=${text}`;
    window.open(url, "_blank");
    form.reset();
  }
})
