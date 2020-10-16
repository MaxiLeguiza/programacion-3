//IMPORTS
const express=require('express');
const app = express();
const mongoose = require('mongoose');

const tareasRouters = require('./routers/tareasRouters');

//CONFIGURACIONES

const PORT = 4000; 

const MONGO_URI='mongosdb://localhost:27017/programacion3-2020';
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//MIDDLEWARES


//RUTAS A NUESTROS SERVICIOS

/*app.get('/', (req, res) => {
    res.send('<h1>Hola mundo</h1>');
});*/

app.use(tareasRouters);

//INICIAR APP

app.listen(PORT, () => console.log('Iniciando app en puerto $(PORT)'));

//mongodb - robo3t
//postman