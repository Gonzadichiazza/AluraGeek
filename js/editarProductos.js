import { conexion } from "./conexion.js"
const formulario = document.querySelector("[data-formulario]"); 
const nombre = document.querySelector("[data-nombre]"); 
const precio = document.querySelector("[data-precio]"); 
const imagen = document.querySelector("[data-imagen]"); 
const volver = document.querySelector(".volver")
const url = new URLSearchParams(window.location.search)
const id = url.get("id");

async function atributo(e){
    e.preventDefault(); 
    const productos =Array.from(await conexion.productos()); 
    productos.forEach(producto => {
        if(producto.id == id){
            console.log(producto.nombre.toString());
            nombre.setAttribute("value", producto.nombre); 
            precio.setAttribute("value", producto.precio);  
            const imagenUrl = producto.imagen.replace("./assets/", "");
            imagen.setAttribute("value", imagenUrl); 

        }
    }) 

}
async function editar (e){
    try {
        e.preventDefault()

        
    
        const errorNombre = document.querySelector("[data-error_nombre]");
        const errorPrecio = document.querySelector("[data-error_precio]");
        const errorImagen = document.querySelector("[data-error_imagen]");

        errorNombre.setAttribute('hidden', '');
        errorPrecio.setAttribute('hidden', '');
        errorImagen.setAttribute('hidden', '');
        
        if (nombre.value === '') {
            errorNombre.removeAttribute('hidden');
            errorNombre.innerHTML = "Debes colocar un nombre";
        } else if (precio.value === '') {
            errorPrecio.removeAttribute('hidden');
            errorPrecio.innerHTML = "Debes colocar un precio";
        } else if (isNaN(precio.value)) {
            errorPrecio.removeAttribute('hidden');
            errorPrecio.innerHTML = "Debes colocar un valor numerico";
        } else if (imagen.value === '') {
            errorImagen.removeAttribute('hidden');
            errorImagen.innerHTML = "No agregaste ninguna foto";
        } else {
            await conexion.editarArticulo(id, nombre.value, precio.value, imagen.value);
            window.location.href="../index.html";
        }


       
    } catch (error) {
        console.log(error);
    }    
}
function volverIndex(e){
    
    e.preventDefault()
    window.location.href="../index.html";
}
volver.addEventListener("click", e => volverIndex(e))
formulario.addEventListener("submit", e => editar(e))
window.addEventListener("DOMContentLoaded", e => atributo(e))