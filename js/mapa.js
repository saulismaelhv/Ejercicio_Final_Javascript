// MAPA DINÁMICO CON RUTA AL USUARIO

// Coordenadas de la empresa (TechWeb Solutions)
const negocio = [41.385349, 2.149304];

// Crear mapa centrado en la empresa
const map = L.map('mapa').setView(negocio, 16);

// Capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Marcador de la empresa
L.marker(negocio)
    .addTo(map)
    .bindPopup("TechWeb Solutions")
    .openPopup();

map.locate({ setView: false });

// OBTENER POSICIÓN DEL USUARIO Y DIBUJAR RUTA
map.on("locationfound", function(e){
    L.Routing.control({
        waypoints: [
            L.latLng(e.latitude, e.longitude),
            L.latLng(negocio[0], negocio[1])
        ],
        routeWhileDragging: false
    }).addTo(map);
});

// ERROR: usuario NO permite ubicación
map.on("locationerror", () => {
    alert("No se pudo obtener tu ubicación.");
});
