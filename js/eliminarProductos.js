import { conexion } from "./conexion.js"

document.querySelector("[data-lista]").addEventListener("click", event => {
    if(event.target.matches("[data-eliminar]")){
        const id = event.target.getAttribute("data-id")
        conexion.eliminarArticulo(id);
    }
    else{
        throw new Error ("No se pudo eliminar el producto")
    }
})