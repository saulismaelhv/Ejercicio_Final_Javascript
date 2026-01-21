// Carga dinámica de noticias desde un archivo JSON externo
// usando AJAX (Fetch API)

document.addEventListener('DOMContentLoaded', () => {       // Esperamos a que el DOM esté completamente cargado

    fetch('data/noticias.json')                   // Realizamos la petición al archivo JSON
        .then(response => {                      // Ruta RELATIVA correcta

            if (!response.ok) {                // Comprobamos si la respuesta es correcta
                throw new Error('No se pudo cargar el archivo JSON');
            }

            return response.json();             // Convertimos la respuesta a JSON
        })

.then(noticias => {

            const contenedor = document.getElementById('noticias');    // Seleccionamos el contenedor de noticias

            contenedor.innerHTML = '';                                // Limpiamos el contenedor por seguridad

        noticias.forEach(noticia => {                                // Recorremos cada noticia

                const article = document.createElement('article');  // Creamos el artículo
                
                // Insertamos el contenido
                article.innerHTML = `                              
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.contenido}</p>
                `;

                contenedor.appendChild(article);                 // Añadimos la noticia al HTML
            });
        })
        .catch(error => {
            console.error('ERROR AL CARGAR NOTICIAS:', error);  // Mostramos error en consola
        });

});