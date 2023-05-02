// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "10px";
  } else {
    document.getElementById("header").style.fontSize = "60px";
  }
} 

// Obtener la imagen
const imagen = document.querySelector('heart');

// Establecer el nuevo src cuando se pasa el cursor por encima
imagen.addEventListener('mouseover', function() {
  this.src = 'heartconsimple.png';
});

// Establecer el src original cuando se quita el cursor
imagen.addEventListener('mouseout', function() {
  this.src = 'heartconsimple.png';
});

// Establecer el nuevo src cuando se hace clic en la imagen
imagen.addEventListener('click', function() {
  this.src = 'heart.png';
});

function cambiarImagen(heart) {
  const imagen = document.querySelector('heart.png');
  imagen.src = 'heartconsimple.png';
}





