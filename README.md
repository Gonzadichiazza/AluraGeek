Proyecto realizado con HTML, CSS y JavaScript. Para poder probar la creacion, edicion y eliminacion de los productos debemos: 

1- Crear el archivo db.json
    Crear el archivo db.json con el siguiente contenido.
    {"productos": []}

2- Instalar json-server
    Si aún no tienes json-server, instálalo globalmente usando npm:
    npm install -g json-server

3- Iniciar json-server en el puerto 3001
    Para iniciar el servidor en el puerto 3001, usa el siguiente comando:
    json-server --watch db.json -p 3001
