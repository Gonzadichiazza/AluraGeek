async function productos () {
    const conexion = await fetch("http://localhost:3001/articulos"); 
    const conexionConvertida = await conexion.json(); 
    return conexionConvertida; 
}

async function eliminarArticulo(id) {
    try {
        const conexion = await fetch(`http://localhost:3001/articulos/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });
        if (!conexion.ok) {
            throw new Error('Error eliminando el artículo');
        }
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.log(error);
    }
}



async function crearArticulo(nombre, precio, imagen){
    try {
        const conexion = await fetch("http://localhost:3001/articulos",
    {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre: nombre, 
            precio:precio, 
            imagen: `./assets/${imagen}`,
            activo: true
        })
    }
    )

    const conexionConvertida = await conexion.json(); 

    return conexionConvertida
    } catch (error) {
        console.log(error);
    }
    
}

async function editarProductos(id, nombre, precio, imagen){
    try {
        const conexion = await fetch(`http://localhost:3001/articulos/${id}`, {
            method: "PUT", 
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({
                nombre: nombre, 
                precio: precio, 
                imagen: `./assets/${imagen}`
            })
        })
        const conexionConvertida = await conexion.json(); 
    
        return conexionConvertida
    } catch (error) {
        console.log(error);
    }
}


export const conexion ={
    crearArticulo, eliminarArticulo, productos, editarProductos
}