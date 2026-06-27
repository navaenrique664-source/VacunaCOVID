const formRegistro = document.getElementById("formRegistro");

if (formRegistro) {
  formRegistro.addEventListener("submit", function(e) {
    e.preventDefault();

    const ciudadano = {
      curp: document.getElementById("curp").value,
      nombre: document.getElementById("nombre").value,
      edad: document.getElementById("edad").value,
      telefono: document.getElementById("telefono").value,
      discapacidad: document.getElementById("discapacidad").value,
      lengua: document.getElementById("lengua").value
    };

    localStorage.setItem("ciudadano", JSON.stringify(ciudadano));

    alert("Ciudadano guardado correctamente");
  });
}