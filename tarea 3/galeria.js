
const imagenes = [
    'img/1.jpg',
    'img/2.jpeg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg'
];

var indiceActual = 0;

var imagenGaleria = document.getElementById('imagen-galeria');
var botonAnterior = document.getElementById('boton-anterior');
var botonSiguiente = document.getElementById('boton-siguiente');
var estadoGaleria = document.getElementById('estado-galeria');

function mostrarImagen() {
    imagenGaleria.src = imagenes[indiceActual];
    estadoGaleria.innerText = "Imagen " + (indiceActual + 1) + " de " + imagenes.length; 

    if (indiceActual === 0) {
        botonAnterior.disabled = true;
    } else {
        botonAnterior.disabled = false;
    }

    if (indiceActual === imagenes.length - 1) {
        botonSiguiente.disabled = true;
    } else {
        botonSiguiente.disabled = false;
    }
}


botonAnterior.onclick = function () {
    if (indiceActual > 0) { 
        indiceActual--;
        mostrarImagen();
    }
};

botonSiguiente.onclick = function () {
    if (indiceActual < imagenes.length - 1) {
        indiceActual++;
        mostrarImagen();
    }
};

mostrarImagen();