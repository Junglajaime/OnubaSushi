
// Espera a que el documento HTML se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el contenedor de la barra de navegación
    var navbar = document.querySelector(".navbar-nav");

    // Agrega un evento de clic al contenedor de la barra de navegación
    navbar.addEventListener("click", function(event) {
        // Verifica si el objetivo del evento es un enlace dentro de la barra de navegación
        if (event.target.tagName === "A") {
            // Evita el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtiene el identificador del destino del enlace
            var targetId = event.target.getAttribute("href").substring(1);

            // Oculta todas las secciones
            var sections = document.querySelectorAll("section");
            sections.forEach(function(section) {
                section.style.display = "none";
            });

            // Muestra solo la sección correspondiente al enlace pulsado
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        }
    });
});

