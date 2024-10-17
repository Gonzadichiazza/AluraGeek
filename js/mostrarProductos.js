async function mostrarProductos () {
    
    try{
        const url = "http://localhost:3001/articulos";
        const productos = await fetch(url);
        const productosModificados = await productos.json(); 
        const posicion = document.querySelector("[data-lista]")

        productosModificados.forEach(element => {
            const contenido= ` 
            
            <article class="productos__card">
            <img src="${element.imagen}" alt="imagen" class="productos__card__img">
            <div class="productos__card__header">
              <h2 class="producto__card__titulo">${element.nombre}</h2>
              <h3 class="producto__card__precio">$${element.precio}</h3>
            </div>
          </article>`
          posicion.innerHTML = posicion.innerHTML + contenido; 
        });

    }
    catch(e){
        console.log(e);
    }
    
}

mostrarProductos(); 