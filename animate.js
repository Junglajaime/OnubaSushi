document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el contenedor de la barra de navegación
    var navbar = document.querySelector(".navbar-nav");

    // Agrega un evento de clic al contenedor de la barra de navegación
    navbar.addEventListener("click", function(event) {
        // Verifica si el objetivo del evento es un enlace dentro de la barra de navegación
        if (event.target.tagName === "A") {
            // Obtiene el identificador del destino del enlace
            var targetId = event.target.getAttribute("href").substring(1);

            // Verifica si el enlace pulsado es "Ofertas Especiales"
            if (targetId === "ofertas") {
                // Muestra todas las secciones
                var sections = document.querySelectorAll("section");
                sections.forEach(function(section) {
                    section.style.display = "block";
                });

                // Navega hacia la sección correspondiente al enlace pulsado
                var targetSection = document.getElementById(targetId);
                if (targetSection) {
                    // Anima el desplazamiento hacia la sección
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: "smooth"
                    });
                }
            } else {
                // Evita el comportamiento predeterminado del enlace
                event.preventDefault();

                // Oculta todas las secciones, excepto la de ofertas especiales
                var sections = document.querySelectorAll("section");
                sections.forEach(function(section) {
                    if (section.id !== "ofertas") {
                        section.style.display = "none";
                    }
                });

                // Muestra solo la sección correspondiente al enlace pulsado
                var targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = "block";
                }
            }
        }
    });
});



/* Uso de CANVAS*/  

var cnv, ctx, pos_x = 0, dir = 1; // La variable dir controlará la dirección del movimiento

function anim() {
    ctx.clearRect(0, 0, 600, 200);
    ctx.font = "30px Arial"; // Establece el tamaño y la fuente del texto
    ctx.fillText("Ofertas Especiales", pos_x, 100); // Dibuja el texto en la posición actual
    pos_x += dir; // Incrementa o decrementa la posición basado en la dirección
    if (pos_x >= 50 || pos_x <= 0) { // Si alcanza los bordes del canvas, cambia la dirección
        dir *= -1;
    }
    setTimeout(anim, 25);
}

window.onload = function() {
    cnv = document.getElementById('lienzo');
    ctx = cnv.getContext('2d');
    // Iniciar la animación
    anim();
}


