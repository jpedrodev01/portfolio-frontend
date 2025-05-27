AOS.init({
  duration: 1000,
  once: true
});

const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");
const header = document.getElementById("main-header");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = sideMenu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (sideMenu.classList.contains("open") && !isClickInsideMenu && !isClickOnToggle) {
    sideMenu.classList.remove("open");
  }
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        menuToggle.style.display = "block";
      } else {
        menuToggle.style.display = "none";
        sideMenu.classList.remove("open"); 
      }
    });
  },
  {
    root: null,
    threshold: 0
  }
);

observer.observe(header);

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const button = document.getElementById("form-button");
  const originalText = "Enviar";

  button.disabled = true;
  button.textContent = "Enviando...";
  button.style.backgroundColor = "#6C63FF";
  button.style.color = "#fff";

  fetch("https://formsubmit.co/ajax/jpedrodev01@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        button.style.backgroundColor = "#00FF99";
        button.textContent = "Mensagem enviada com sucesso!";
        form.reset();

        setTimeout(() => {
          button.disabled = false;
          button.style.backgroundColor = "#6C63FF";
          button.textContent = originalText;
        }, 2000);
      } else {
        throw new Error("Erro ao enviar");
      }
    })
    .catch(() => {
      button.style.backgroundColor = "#FF5050";
      button.textContent = "Erro ao enviar. Tente novamente.";

      setTimeout(() => {
        button.disabled = false;
        button.style.backgroundColor = "#6C63FF";
        button.textContent = originalText;
      }, 1000);
    });
});




