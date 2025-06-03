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
