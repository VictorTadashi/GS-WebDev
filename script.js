//Carrossel
const slides = document.querySelectorAll(".slide");
let current = 0;
function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function iniciarSlideShow() {
  mostrarSlide(current);
  setInterval(() => {
    current = (current + 1) % slides.length;
    mostrarSlide(current);
  }, 2000);
}

window.onload = iniciarSlideShow;