// Lista de imágenes 
const imagenes = [
    "../assets/images/1.jpg",    //IMAGEN 1
    "../assets/images/2.jpg",   //IMAGEN 2
    "../assets/images/3.jpg",  //IMAGEN 3
    "../assets/images/4.jpg"  //IMAGEN 4
];

// Elemento donde se insertarán las miniaturas
const galeria = document.getElementById("galeria");

// GENERAR MINIATURAS EN LA PÁGINA
imagenes.forEach(src => {
    const img = document.createElement("img");      // Crear imagen
    img.src = src;                                 // Ruta de la imagen
    img.classList.add("item-galeria");            // Texto alternativo
    galeria.appendChild(img);                   // Agregar imagen a la galería

// Al hacer clic → abrir modal
    img.addEventListener("click", () => {
        document.getElementById("modal").style.display = "block";   // Mostrar modal
        document.getElementById("imagenModal").src = src;           // Mostrar imagen grande
    });
});

// CERRAR MODAL HACIENDO CLICK FUERA
document.getElementById("cerrar").onclick = function () {
    document.getElementById("modal").style.display = "none";
};
