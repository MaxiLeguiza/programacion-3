const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    descripcion:{
      type: String  
    },
    finalizada:{
        type: Boolean,
        default: false
    },
    fechaActualizacion:{
        type: Date,
        default:Date.now
    },
    fechaCreacion:{
        type: Date,
        default:Date.now
    }
})

exports.Tarea = new mongoose.model('tareas', tareaSchema);