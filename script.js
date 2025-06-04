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

//Quiz
const perguntas = [
  {
    pergunta: "1. O que fazer ao ver sinais de enchente iminente?",
    opcoes: [
      "Ignorar e continuar em casa",
      "Subir para áreas elevadas e seguras",
      "Aguardar ordens na varanda",
      "Tirar fotos para registrar"
    ],
    correta: 1 
  },
  {
    pergunta: "2. Como proteger sua casa contra enchentes?",
    opcoes: [
      "Deixar as portas abertas",
      "Instalar barreiras e proteger móveis",
      "Usar velas para iluminação",
      "Desligar todos os equipamentos elétricos"
    ],
    correta: 1
  },
  {
    pergunta: "3. Qual é a atitude correta ao encontrar água de enchente na rua?",
    opcoes: [
      "Andar descalço para evitar molhar os sapatos",
      "Atravessar rapidamente para chegar ao destino",
      "Evitar o contato e procurar rotas alternativas",
      "Usar a água para lavar objetos sujos"
    ],
    correta: 2
  },
  {
    pergunta: "4. Como tratar a água para consumo após uma enchente?",
    opcoes: [
      "Filtrar e ferver ou usar hipoclorito de sódio",
      "Misturar com sabão em pó",
      "Deixar repousar por 24 horas",
      "Adicionar açúcar para purificar"
    ],
    correta: 0
  },
  {
    pergunta: "5. Qual medida ajuda a proteger sua casa contra enchentes?",
    opcoes: [
      "Deixar portas e janelas abertas",
      "Elevar móveis e eletrodomésticos do chão",
      "Remover telhas para a água escoar",
      "Desligar o fornecimento de água"
    ],
    correta: 1
  },
  {
    pergunta: "6. O que fazer com alimentos que tiveram contato com água de enchente?",
    opcoes: [
      "Lavar bem e consumir normalmente",
      "Secar ao sol antes de consumir",
      "Descartar, pois podem estar contaminados",
      "Ferver por 10 minutos antes de consumir"
    ],
    correta: 2
  },
  {
    pergunta: "7. Após uma enchente, quando é seguro retornar para casa?",
    opcoes: [
      "Assim que a água baixar completamente",
      "Após autorização das autoridades competentes",
      "Quando o tempo estiver ensolarado",
      "Imediatamente, para verificar os danos"
    ],
    correta: 1
  },
  {
    pergunta: "8. Qual é uma medida preventiva eficaz contra enchentes?",
    opcoes: [
      "Construir casas em áreas de várzea",
      "Desmatar encostas para evitar deslizamentos",
      "Manter calhas e bueiros limpos",
      "Canalizar rios para dentro das cidades"
    ],
    correta: 2
  },
  {
    pergunta: "9. Em caso de enchente, qual é a recomendação quanto à energia elétrica?",
    opcoes: [
      "Manter todos os aparelhos ligados",
      "Desligar a energia elétrica para evitar acidentes",
      "Usar aparelhos elétricos para secar a água",
      "Instalar mais tomadas próximas ao chão"
    ],
    correta: 1
  },
  {
    pergunta: "10. Qual é a função da Defesa Civil em situações de enchente?",
    opcoes: [
      "Organizar eventos comunitários",
      "Fornecer assistência e coordenar ações de emergência",
      "Cobrar taxas de reconstrução",
      "Vender seguros residenciais"
    ],
    correta: 1
  }
];

let indiceAtual = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("question");
const opcoesEl = document.getElementById("opcoes");
const resultadoEl = document.getElementById("result-message");
const containerResultado = document.getElementById("result-container");

function carregarPergunta() {
  const perguntaAtual = perguntas[indiceAtual]; 
  perguntaEl.textContent = perguntaAtual.pergunta; 
  opcoesEl.innerHTML = ""; 

   perguntaAtual.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.classList.add("option-button");
    botao.addEventListener("click", () => verificarResposta(index));
    opcoesEl.appendChild(botao); 
  });
}

function verificarResposta(respostaSelecionada) {
  const perguntaAtual = perguntas[indiceAtual];
  if (respostaSelecionada === perguntaAtual.correta) {
    pontuacao++; // Aumenta a pontuação se estiver correta
  }

  indiceAtual++;

   if (indiceAtual < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

document.addEventListener("DOMContentLoaded", carregarPergunta);