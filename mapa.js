// Este archivo crea un mapa dinámico usando OpenStreetMap y Leaflet

const map = L.map('mapa').setView([41.385349, 2.149304],22);             // Creamos el mapa y lo centramos en el lugar de la empresa

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {     // Añadimos la capa de OpenStreetMap

    attribution: '© OpenStreetMap contributors'                        // Atribución obligatoria
        }).addTo(map);                                                // Lo añadimos al mapa


L.marker([41.385349,2.149304])                                                        // Creamos un marcador en la ubicación de la empresa
    .addTo(map)                                                                      // Añadimos el marcador al mapa
    .bindPopup('<a href="https://www.masterd.es/">TechWeb Solutions</a>')           // Texto del marcador
    .openPopup()                                                                   // Mostramos el popup al cargar
