const boton = document.getElementById('boton');
const jeje = document.getElementById('aca');



boton.addEventListener("click", function () {
        event.stopPropagation();
  });


jeje.addEventListener('click', function holii() {
    alert('Hola! Soy el div');
});



