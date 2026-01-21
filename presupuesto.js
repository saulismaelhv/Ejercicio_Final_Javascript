// presupuesto.js
// Control total del formulario y del presupuesto SIN submit

document.addEventListener('DOMContentLoaded', function () {

    // ===============================
    // SELECCIÓN DE ELEMENTOS
    // ===============================

    const nombre = document.getElementById('nombre');         
    const apellidos = document.getElementById('apellidos');   
    const telefono = document.getElementById('telefono');     
    const email = document.getElementById('email');           
    const producto = document.getElementById('producto');     
    const plazo = document.getElementById('plazo');           
    const extras = document.querySelectorAll('.extra');       
    const total = document.getElementById('total');           
    const condiciones = document.getElementById('condiciones');
    const botonEnviar = document.getElementById('btnEnviar'); 

    // ===============================
    // CÁLCULO DEL PRESUPUESTO
    // ===============================

    function calcularPresupuesto() {

        let precio = parseInt(producto.value);

        extras.forEach(extra => {
            if (extra.checked) {
                precio += parseInt(extra.value);
            }
        });

        if (plazo.value >= 6) {
            precio *= 0.9;
        }

        total.textContent = precio.toFixed(2);
    }

    producto.addEventListener('change', calcularPresupuesto);
    plazo.addEventListener('input', calcularPresupuesto);
    extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));

    // ===============================
    // VALIDACIÓN AL PULSAR ENVIAR
    // ===============================

    botonEnviar.addEventListener('click', function () {

        // Validación campos obligatorios
        if (
            nombre.value.trim() === '' ||
            apellidos.value.trim() === '' ||
            telefono.value.trim() === '' ||
            email.value.trim() === ''
        ) {
            alert('Deben de rellenarse todos los datos de contacto');
            return;
        }

        // Validación condiciones
        if (!condiciones.checked) {
            alert('Debes de aceptar las condiciones');
            return;
        }

        // Si todo es correcto
        alert('Formulario enviado correctamente');

        // Reset
        document.getElementById('formulario').reset();
        total.textContent = '0';
    });

});