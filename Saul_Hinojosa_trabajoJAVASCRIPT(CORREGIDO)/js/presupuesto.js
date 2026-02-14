let producto = document.getElementById("producto");
let plazo = document.getElementById("plazo");
let extras = document.querySelectorAll(".extra");
let totalEl = document.getElementById("total");

function calcularTotal() {
    let total = Number(producto.value);

    extras.forEach(chk => {
        if (chk.checked) total += Number(chk.value);
    });

    totalEl.textContent = total;
}

producto.addEventListener("change", calcularTotal);
plazo.addEventListener("input", calcularTotal);
extras.forEach(chk => chk.addEventListener("change", calcularTotal));

document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = nombre.value.trim();
    let apellidos = apellidos.value.trim();
    let telefono = telefono.value.trim();
    let email = email.value.trim();

    const regexTel = /^[0-9]{9}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nombre || !apellidos || !telefono || !email){
        alert("Debes rellenar todos los datos");
        return;
    }

    if(!regexTel.test(telefono)){
        alert("Teléfono incorrecto");
        return;
    }

    if(!regexEmail.test(email)){
        alert("Email incorrecto");
        return;
    }

    if(!condiciones.checked){
        alert("Debes aceptar las condiciones");
        return;
    }

    alert("Formulario enviado correctamente");
    this.reset();
    totalEl.textContent = "0";
});