let numeroOculto, tentativas;

function iniciarJogo() {
  numeroOculto = +document.getElementById("numeroSecreto").value;
  if (!numeroOculto || numeroOculto < 1 || numeroOculto > 100) {
    alert("Digite um número válido entre 1 e 100.");
    return;
  }
  tentativas = 10;
  toggleVisibilidade(true);
  atualizarTentativas();
  limparFeedback();
  habilitarChute(true);
}

function verificarChute() {
  const chuteInput = document.getElementById("chute");
  const chute = +chuteInput.value;
  const feedback = document.getElementById("feedback");

  if (!chute) {
    feedback.textContent = "Digite um número válido!";
    return;
  }

  if (chute === numeroOculto) {
    feedback.textContent = "🎉 Parabéns! Você acertou o número!";
    fimDeJogo();
    return;
  }

  tentativas--;
  atualizarTentativas();

  if (tentativas === 0) {
    feedback.textContent = `❌ Suas tentativas acabaram. O número era ${numeroOculto}.`;
    fimDeJogo();
    return;
  }

  feedback.textContent = chute > numeroOculto ? "O número oculto é menor." : "O número oculto é maior.";
  chuteInput.value = "";
}

function reiniciarJogo() {
  document.getElementById("numeroSecreto").value = "";
  document.getElementById("chute").value = "";
  limparFeedback();
  habilitarChute(false);
  toggleVisibilidade(false);
}

function fimDeJogo() {
  habilitarChute(false);
  document.getElementById("btnReiniciar").classList.remove("escondido");
}

function toggleVisibilidade(jogoAtivo) {
  document.getElementById("setup").classList.toggle("escondido", jogoAtivo);
  document.getElementById("jogo").classList.toggle("escondido", !jogoAtivo);
  document.getElementById("btnReiniciar").classList.add("escondido");
}

function atualizarTentativas() {
  document.getElementById("tentativasRestantes").textContent = tentativas;
}

function limparFeedback() {
  document.getElementById("feedback").textContent = "";
}

function habilitarChute(habilitar) {
  document.getElementById("chute").disabled = !habilitar;
}