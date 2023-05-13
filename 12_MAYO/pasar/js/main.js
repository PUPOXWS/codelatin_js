const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".btn");
const myslider = document.querySelectorAll(".img");
const background = document.querySelectorAll(".bg");
const option = document.querySelectorAll(".option");

var index = 1;
var optionIndex = 0;
var size = myslider[index].clientWidth;
actualizar();

function actualizar() {
  slider.style.transform = "translateX(" + -size * index + "px)";
  background.forEach((img) => img.classList.remove("show"));
  background[optionIndex].classList.add("show");
  option.forEach((option) => option.classList.remove("colored"));
  option[optionIndex].classList.add("colored");
}

function slide() {
  slider.style.transition = "transform .5s ease-in-out";
  actualizar();
}

function btnCheck() {
  if (this.id === "prev") {
    index--;
    if (optionIndex === 0) {
      optionIndex = 4;
    } else {
      optionIndex--;
    }
  } else {
    index++;
    if (optionIndex === 4) {
      optionIndex = 0;
    } else {
      optionIndex++;
    }
  }
  slide();
}

function validarOpciones() {
  let i = Number(this.getAttribute("optionIndex"));
  optionIndex = i;
  index = i + 1;
  slide();
}

slider.addEventListener("transitionend", () => {
  if (myslider[index].id === "primera") {
    slider.style.transition = "none";
    index = myslider.length - 2;
    slider.style.transform = "translateX(" + -size * index + "px)";
  } else if (myslider[index].id === "ultima") {
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = "translateX(" + -size * index + "px)";
  }
});

btns.forEach((btn) => btn.addEventListener("click", btnCheck));
option.forEach((option) => option.addEventListener("clic", validarOpciones));
