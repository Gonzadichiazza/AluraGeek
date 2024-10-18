async function prueba(evento){
    evento.preventDefault(); 
    const url = new URLSearchParams(window.location.search); 
    const id = url.get("id")

    const formulario = document.querySelector("[data-formulario]")

    const conexion = await fetch(`http://localhost:3001/articulos/${id}`)
    const conexionConvertida = await conexion.json(); 

    const imagen = conexionConvertida.imagen.replace("/assets/", ""); 

    
    
    const contenido = `
    <form class="formulario" data-formulario>
    <div class="formulario__inputs">
        <label class="formulario__inputs__label" for="nombre">Ingresar el nombre del producto</label>
        <input class="formulario__inputs__input" id="nombre"type="text" name="nombre" value="${conexionConvertida.nombre}" data-nombre>
        <p class="formulario__inputs__error" hidden data-errorNombre></p>
    </div>
    <div class="formulario__inputs">
        <label class="formulario__inputs__label" for="nombre">Ingresar el precio del producto</label>
        <input class="formulario__inputs__input" id="precio"type="text" name="precio" data-precio value=${conexionConvertida.precio}>
        <p class="formulario__inputs__error" hidden data-errorPrecio>Debes ingresar un valor numerico</p>
    </div>
    <div class="formulario__inputs">
        <label class="formulario__inputs__label" for="nombre">Ingresar una imagen del producto</label>
        <input class="formulario__inputs__input" id="imagen"type="text" name="imagen" data-imagen value=${imagen}>
        <p class="formulario__inputs__error" hidden data-errorImagen></p>
    </div>
    <div class="principal__botones">
        <input class="principal__botones__boton" type="submit" value="Editar">
        <input class="principal__botones__boton volver" type="button" value="Volver">
    </div>
    </form>
    `

    formulario.innerHTML = contenido
}




window.addEventListener("DOMContentLoaded", evento => prueba(evento))