//IMPORTS
const express=require('express');
const app = express();

const tareasRouters = require('./routers/tareasRouters');

//CONFIGURACIONES

const PORT = 4000; 

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