document.addEventListener("DOMContentLoaded", function() {
  const mainElement = document.getElementById("main");

  const tesisData = [
    // ... (tu lista de datos de tesis) ...
  ];

  function mostrarTesisPorAñoYEspecialidad(especialidad, año) {
    mainElement.innerHTML = ""; // Limpia el contenido actual

    const tesisList = document.createElement("ul");
    tesisList.classList.add("tesis-list");

    tesisData.forEach(tesis => {
      if (tesis.especialidad === especialidad && tesis.año === año) {
        const tesisItem = document.createElement("li");
        tesisItem.classList.add("tesis-item");

        const tesisLink = document.createElement("a");
        tesisLink.href = `tesis/${especialidad}/${año}/${tesis.archivo}`;
        tesisLink.textContent = tesis.archivo;

        tesisItem.appendChild(tesisLink);
        tesisList.appendChild(tesisItem);
      }
    });

    mainElement.appendChild(tesisList);
  }

  const añoEspecialidadLinks = document.querySelectorAll(".año-especialidad-link");
  añoEspecialidadLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const especialidad = link.getAttribute("data-especialidad");
      const año = link.getAttribute("data-año");
      mostrarTesisPorAñoYEspecialidad(especialidad, año);
    });
  });

  mostrarTesisPorAñoYEspecialidad("", ""); // Muestra todas las tesis al cargar la página
});
