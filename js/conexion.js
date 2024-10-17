async function crearArticulo(nombre, precio, imagen){
    try {
        const conexion = await fetch("http://localhost:3001/articulos",
    {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre: nombre, 
            precio:precio, 
            imagen: imagen
        })
    }
    )

    const conexionConvertida = await conexion.json(); 

    return conexionConvertida
    } catch (error) {
        console.log(error);
    }
    
}

export const conexion ={
    crearArticulo
}