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

//Validação
const form = document.getElementById("form_ajuda");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const estado = document.getElementById("estado");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  
  if (
    nome.value.trim() === "" ||
    email.value.trim() === "" ||
    estado.value.trim() === ""
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  alert("Formulário enviado com sucesso!");
  form.reset(); 
});

