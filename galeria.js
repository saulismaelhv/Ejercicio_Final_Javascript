// Este archivo genera una galería de imágenes de forma dinámica

const imagenes = [      // Array que contiene las rutas de las imágenes
    'img/1.jpg',       // Imagen 1
    'img/2.jpg',      // Imagen 2
    'img/3.jpg',     // Imagen 3
    'img/4.jpg',    //Imagen 4
];

const galeria = document.getElementById('galeria'); // Seleccionamos el contenedor donde se insertará la galería

imagenes.forEach(ruta => {                      // Recorremos el array de imágenes
    const img = document.createElement('img'); // Creamos un elemento <img>
    img.src = ruta;                           // Asignamos la ruta de la imagen
    img.alt = 'Imagen de la galería';        // Texto alternativo para accesibilidad
    img.style.width = '600px';              // Ancho de la imagen
    img.style.margin = '30px';             // Margen entre imágenes

    galeria.appendChild(img);            // Añadimos la imagen al contenedor
});
