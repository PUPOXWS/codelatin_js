console.log("READY");

let iconomenu = document.querySelector("#icono-menu");
let navbar = document.querySelector(".menu");
iconomenu.onclick = () => {
  iconomenu.classList.toggle("bx-x");
  navbar.classList.toggle("activar");
};
let secciones = document.querySelectorAll("section");
let enlacesnav = document.querySelectorAll("header nav a");

window.onscroll = () => {
  secciones.forEach(seccion => {
    let arriba = window.scrollY;
    let offset = seccion.offsetTop - 150;
    let alto = seccion.offsetHeight;
    let id = seccion.getAttribute("id");
    if (arriba >= offset && arriba < offset + alto) {
      enlacesnav.forEach(enlaces =>{
        enlaces.classList.remove("activar");
        document.querySelector("header nav a [href * = "+ id+ "]").classList.add("activar");  
      });
    };
  });
  let header = document.querySelector(".header");  
  header.classList.toggle("sticky", window.scrollY > 100);
  iconomenu.classList.remove("bx-x");
  navbar.classList.remove("activar");
};

//slider
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Cambio mono noche
let icononoche = document.querySelector("#icono-noche");
icononoche.onclick = () => {
  icononoche.classList.toggle("bx-sun");
  document.body.classList.toggle("modooscuro");
};
ScrollReveal({   
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,

});
ScrollReveal().reveal('.content-inicio, cabecera', { origin: "top" });