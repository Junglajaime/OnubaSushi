$(document).ready(function() {
    $('#open-reserva').click(function() {
      $('#open-reserva').addClass('zoom-out');
      setTimeout(function() {
        $('#open-reserva').hide();
        $('#open-reserva').removeClass('zoom-out');
      }, 500);
      $('#reservaModal').on('shown.bs.modal', function () {
        $('.modal-content').addClass('zoom-in');
      }).modal('show');
    });

    $('#reservaModal').on('hidden.bs.modal', function () {
      $('#open-reserva').show().addClass('zoom-in');
      $('.modal-content').removeClass('zoom-in');
    });
  }
);


document.addEventListener('DOMContentLoaded', function () {
  const headlines = document.querySelectorAll('.headline');
  
  const observerOptions = {
      root: null,
      rootMargin: '2px',
      threshold: 0.5 // Trigger cuando el 50% de la sección es visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Deja de observar una vez que la animación ha comenzado
          }
      });
  }, observerOptions);

  headlines.forEach(headline => {
      observer.observe(headline);
  });
});

$(document).ready(function() {
  $(".thumbnails img").on("click", function() {
      var newSrc = $(this).attr("src");
      if (!$("#video").prop("paused")) {
          $("#video").get(0).pause();
          $("#video").hide();
          $("#image").attr("src", newSrc).show();
      } else {
          $("#image").attr("src", newSrc);
      }
  });
});