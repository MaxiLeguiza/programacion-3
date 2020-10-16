const express = require('express');
const router = express.Router();


//CRUD -> TAREAS
//GET: listado de tareas - http://localhost:4000/api/tareas

router.get('/api/tareas', (req , res) =>{
    res.send([{nombre: "tareas 1s "},{nombre: "tareas 2s "}]);
});

//GET: una tarea determinada - http://localhost:4000/api/tareas/:id
router.get('/api/tareas/:id',( req , res) =>{
    res.send({nombre: "tareas 1 "});
});

//POST: crear una tarea - http://localhost:4000/api/tareas -> en body el json del tarea
//PUT: actualizar una tarea - http://localhost:4000/api/tareas -> en body el json del tarea
//DELETE: eliminar una tarea - http://localhost:4000/api/tareas/:id
//PUT: cambiar estdo de una tarea
//GET: buscar tareas por algun criterio

module.exports = router;