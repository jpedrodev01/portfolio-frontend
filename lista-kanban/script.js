let cardSelecionado = null;

function adicionar(texto) {
  if (!texto.trim()) return;

  const card = document.createElement("div");
  card.className = "card";

  const span = document.createElement("span");
  span.textContent = texto;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";
  botaoRemover.className = "remover";
  botaoRemover.onclick = () => card.remove();

  card.appendChild(span);
  card.appendChild(botaoRemover);

  card.draggable = true;
  card.ondragstart = () => (cardSelecionado = card);

  document.getElementById("step1").appendChild(card);
  document.getElementById("task-name").value = "";
}

document.querySelectorAll(".column").forEach((coluna) => {
  coluna.ondragover = (e) => e.preventDefault();
  coluna.ondrop = () => {
    if (cardSelecionado) coluna.appendChild(cardSelecionado);
  };
});
