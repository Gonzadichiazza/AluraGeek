import { conexion } from "./conexion.js";

const volver = document.querySelector(".volver");
const formulario = document.querySelector("[data-formulario]");

async function agregar(e) {
    try {
        console.log("hola");
        e.preventDefault();

        const nombre = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        const imagen = document.querySelector("[data-imagen]").value;
        const errorNombre = document.querySelector("[data-error_nombre]");
        const errorPrecio = document.querySelector("[data-error_precio]");
        const errorImagen = document.querySelector("[data-error_imagen]");

        // Resetear mensajes de error
        errorNombre.setAttribute('hidden', '');
        errorPrecio.setAttribute('hidden', '');
        errorImagen.setAttribute('hidden', '');

        if (nombre === '') {
            errorNombre.removeAttribute('hidden');
            errorNombre.innerHTML = "Debes colocar un nombre";
        } else if (precio === '') {
            errorPrecio.removeAttribute('hidden');
            errorPrecio.innerHTML = "Debes colocar un precio";
        } else if (isNaN(precio)) {
            errorPrecio.removeAttribute('hidden');
            errorPrecio.innerHTML = "Debes colocar un valor numerico";
        } else if (imagen === '') {
            errorImagen.removeAttribute('hidden');
            errorImagen.innerHTML = "No agregaste ninguna foto";
        } else {
            await conexion.crearArticulo(nombre, precio, imagen);
            window.location.href = "../index.html";
        }
    } catch (error) {
        console.log(error);
    }
}

function volverAtras(e) {
    e.preventDefault();
    window.location.href = "../index.html";
}

volver.addEventListener("click", volverAtras);
formulario.addEventListener("submit", agregar)