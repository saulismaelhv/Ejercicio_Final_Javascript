// CARGA DINÁMICA DE NOTICIAS DESDE UN ARCHIVO JSON
fetch("data/noticias.json")
    .then(r => r.json())
    .then(noticias => {
        let cont = document.getElementById("noticias");
        noticias.forEach(n => {
            cont.innerHTML += `
                <div class='noticia'>
                    <h3>${n.titulo}</h3>
                    <p>${n.descripcion}</p>
                </div>
            `;
        });
    });
