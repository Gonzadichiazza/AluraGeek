import { conexion } from "./conexion.js"
const formulario = document.querySelector("[data-formulario]"); 
const volver = document.querySelector(".volver")
async function editar (e){
    try {
        e.preventDefault()
        const url = new URLSearchParams(window.location.search)
        const id = url.get("id")
    
        const nombre = document.querySelector("[data-nombre]").value; 
        const precio = document.querySelector("[data-precio]").value; 
        const imagen = document.querySelector("[data-imagen]").value; 
    
        
       await conexion.editarArticulo(id, nombre, precio, imagen);
       window.location.href="../index.html";
    } catch (error) {
        console.log(error);
    }    
}
function volverIndex(e){
    
    e.preventDefault()
    window.location.href="/index.html";
    console.log("oprimienddo");
}
volver.addEventListener("click", e => volverIndex(e))
formulario.addEventListener("submit", e => editar(e))