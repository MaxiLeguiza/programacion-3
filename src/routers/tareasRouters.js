const express = require('express');
const router = express.Router();

const {Tarea}= require('../models/Tarea');

//CRUD -> TAREAS
//GET: listado de tareas - http://localhost:4000/api/tareas

router.get('/api/tareas', async(req , res) =>{

    const tareas = await Tarea.find();

    res.send(tareas);

 //   res.send([{nombre: "tareas 1s "},{nombre: "tareas 2s "}]);
});

//GET: una tarea determinada - http://localhost:4000/api/tareas/:id
router.get('/api/tareas/:id',( req , res) =>{
    res.send({nombre: "tareas 1 "});
});

router.post('/api/tareas',async (req,res) =>{

    try{

        const {nombre,descripcion,finalizada} =req.body;//cuerpo del mensaje
    
    const tarea = new Tarea({
        nombre,
        descripcion,
        finalizada

        //si los nombres coinciden se puede simplificar y poner solo uno 
        //nombre: nombre,
        //descripcion: descripcion,
        //finalizada: finalizada
    });

    let nuevaTarea =await tarea.save();
    res.status(201).send(nuevaTarea);
    }catch(error){
        console.error(error);
        res.status(500).send( {mensaje :'Error desconcido, Contactarse con soporte'});
    }
});

//POST: crear una tarea - http://localhost:4000/api/tareas -> en body el json del tarea
//PUT: actualizar una tarea - http://localhost:4000/api/tareas -> en body el json del tarea
//DELETE: eliminar una tarea - http://localhost:4000/api/tareas/:id
//PUT: cambiar estdo de una tarea
//GET: buscar tareas por algun criterio

module.exports = router;