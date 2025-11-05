// Validación simple del formulario de inscripción
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formInscripcion");
  const mensaje = document.getElementById("mensaje");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const curso = document.getElementById("curso").value;

      if (nombre && correo && curso) {
        mensaje.textContent = `¡Gracias ${nombre}! Tu inscripción al curso "${curso}" fue enviada con éxito.`;
        form.reset();
      } else {
        mensaje.textContent = "Por favor, completa todos los campos.";
      }
    });
  }
});
