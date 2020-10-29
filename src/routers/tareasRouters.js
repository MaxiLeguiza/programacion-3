const express = require('express');
const router = express.Router();

const {Tarea}= require('../models/Tarea');


//CRUD -> TAREAS

//GET: listado de tareas - http://localhost:4000/api/tareas

router.get('/api/tareas', async(req , res) =>{
    const tareas = await Tarea.find();
    res.send(tareas);

    //Ejemplo 

    //res.send('mensaje 55');

 //   res.send([{nombre: "tareas 1s "},{nombre: "tareas 2s "}]);
});
//GET: buscar tareas por algun criterio -http://localhost:4000/api/tareas/consultar?criterio=tarea
router.get('/api/tareas/consultar', async (req, res)=> {

    try {
        
        const {criterio} = req.query;
        const regExpTerm = new RegExp(criterio, 'i');//vamos a decir que pueda repetir, buscar como generar una expresion regular 
        const regExprSearch = [
            {nombre:  {$regex: regExpTerm}},
            {descripcion: {$regex: regExpTerm}}
        ];
        const tareas = await Tarea.find({ '$or' : regExprSearch});
        res.send(tareas);
        
    } catch (error) {
        console.error(error);
        res.status(500).send({mensaje: 'Error desconocido'});
    }
});

//GET: una tarea determinada - http://localhost:4000/api/tareas/:id
router.get('/api/tareas/:id',async ( req , res) => {

    try {

        const{id} = req.params;
        let tarea = await Tarea.findById(id);

        if(!tarea){
            res.status(404).send({mensaje: 'Tarea no encontrada' });
            return;
        }

        res.send(tarea);
        
    } catch (error) {
        console.error(error);
        res.status(500).send({mensaje: 'Error desconocido'});
    }
    //res.send({nombre: "tareas 1 "});
});
//POST: crear una tarea - http://localhost:4000/api/tareas -> en body el json del tarea
router.post('/api/tareas',async (req , res) => {

    try{

        const {nombre, descripcion, finalizada} = req.body;//cuerpo del mensaje
    
        const tarea = new Tarea({
        nombre : nombre,
        descripcion,
        finalizada

        //si los nombres coinciden se puede simplificar y poner solo uno 
        //nombre: nombre,
        //descripcion: descripcion,
        //finalizada: finalizada
        });

        let nuevaTarea =await tarea.save();
        res.status(201).send(nuevaTarea);
        }   catch(error){
            console.error(error);
            res.status(500).send( {mensaje :'Error desconcido, Contactarse con soporte'});
        }
});

//PUT: actualizar una tarea - http://localhost:4000/api/tareas/:id -> en body el json del tarea

router.put('/api/tareas/:id',async (req , res) => {
        try{
            const id = req.params.id;
            const {nombre, descripcion, finalizada} = req.body;//cuerpo del mensaje

            let tarea = await Tarea.findById(id);

            if(!tarea){
                res.status(404).send({mensaje: 'La tarea con id = ${id}'})
                return;
            }

            if(nombre){
                tarea.nombre = nombre;
            }
            
            if(descripcion){
                tarea.descripcion = descripcion;
            }
            
            if(finalizada){
                tarea.finalizada = finalizada;
            }

            tarea.fechaActualizacion = new Date();

            tarea.save();

            res.status(200).send(tarea);

        }catch(err){
            console.error(err);
            res.status(500).send({mensaje: 'Error desconocido'});
        }
});

//DELETE: eliminar una tarea - http://localhost:4000/api/tareas/:id

router.delete('/api/tareas/:id',async (req , res) => {

    try {
        const {id} = req.params;     
        let tarea = await Tarea.findById(id);

        if(!tarea){
             res.status(404).send({mensaje: 'Tarea no encontrada'});    
             return;
        }

        const tareaEliminada = await tarea.remove();
        return res.send({ id: tareaEliminada.id, mensaje: 'Tarea eliminada con existo'});


    } catch (err) {
        console.error(error);  
        res.status(500).send({mensaje: 'Error desconocido'});
    }
});

//PUT: cambiar estdo de una tarea - http://localhost:4000/api/tareas/:id/finalizada/cambiar
// Es similar al metodo de actualizar

router.put('/api/tareas/:id/finalizada/cambiar',async (req , res) => { 

    try {
        const {id} = req.params;     
        let tarea = await Tarea.findById(id);

        if(!tarea){
             res.status(404).send({mensaje: 'Tarea no encontrada'});    
             return;
        }

        tarea.finalizada = !tarea.finalizada;
        tarea.save();
        return res.send(tarea);


    } catch (error) {
        console.error(error);  
        res.status(500).send({mensaje: 'Error desconocido'});
    }

});




module.exports = router;