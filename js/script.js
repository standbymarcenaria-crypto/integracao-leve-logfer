document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar nav a");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const checkboxes = document.querySelectorAll("#checklist input[type='checkbox']");

  checkboxes.forEach(box => {
    box.addEventListener("change", atualizarProgresso);
  });

  function atualizarProgresso() {
    const total = checkboxes.length;
    const marcados = document.querySelectorAll("#checklist input[type='checkbox']:checked").length;
    const percentual = Math.round((marcados / total) * 100);

    let progresso = document.getElementById("progresso-checklist");

    if (!progresso) {
      progresso = document.createElement("div");
      progresso.id = "progresso-checklist";
      progresso.className = "alert";
      document.getElementById("checklist").appendChild(progresso);
    }

    progresso.innerHTML = `Progresso do checklist: <strong>${percentual}%</strong>`;
  }
});
