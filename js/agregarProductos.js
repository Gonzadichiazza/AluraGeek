import { conexion } from "./conexion.js";

const volver = document.querySelector(".volver");
console.log(volver);
const formulario = document.querySelector("[data-formulario]");
async function agregar (e) {

    try {
        e.preventDefault()
        const nombre = document.querySelector("[data-nombre]").value
        const precio = document.querySelector("[data-precio]").value
        const imagen = document.querySelector("[data-imagen]").value
            
            await conexion.crearArticulo(nombre, precio, imagen); 
        
            window.location.href="../index.html"
        
    } catch (error) {
        console.log(error);
    }

  
}

function volverAtras(e){
    
    e.preventDefault()
    window.location.href="../index.html"

}

volver.addEventListener("click", e => volverAtras(e))

formulario.addEventListener("submit", e => agregar(e))