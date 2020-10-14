//IMPORTS

const express= require('express');
const app = express();

//CONFIGURACIONES

const PORT = 4000; 

//MIDDLEWARES


//RUTAS A NUESTROS SERVICIOS

/*app.get('/', (req, res) => {
    res.send('<h1>Hola mundo</h1>');
});*/

//CRUD -> TAREAS
//GET: listado de tareas - http://localhost:4000/api/tareas

app.get('/api/tareas', (req , res) =>{
    res.send([{nombre: "tareas 1s "},{nombre: "tareas 2s "}]);
});

//GET: una tarea determinada - http://localhost:4000/api/tareas/:id

app.get('/api/tareas/:id',( req , res) =>{
    res.send({nombre: "tareas 1 "});
});

//POST: crear una tarea - http://localhost:4000/api/tareas -> en body el json del tarea
//PUT: actualizar una tarea - http://localhost:4000/api/tareas -> en body el json del tarea
//DELETE: eliminar una tarea - http://localhost:4000/api/tareas/:id
//PUT: cambiar estdo de una tarea
//GET: buscar tareas por algun criterio

//INICIAR APP

app.listen(PORT, () => console.log('Iniciando app en puerto $(PORT)'));

//mongodb - robo3t
//postman