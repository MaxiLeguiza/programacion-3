import React from 'react';
import MostrarProducto from './MostrarProducto';

const LISTA_PROUCTOS = [
    {
        id: 1 ,
        nombre:"Productos 1",
        descripcion: "Descripcion producto 1"
    },
    {
        id: 2 ,
        nombre:"Productos 2",
        descripcion: "Descripcion producto 2"
    },
    {
        id: 3,
        nombre:"Productos 3 - test",
        descripcion: "Descripcion producto 3"
    }
    //lista que hacemos de cuenta que viene de una base de datos

]
const Ejemplo1 = () => {

    return LISTA_PROUCTOS.map((prod) => {
              return <MostrarProducto key={prod.id} nombre = {prod.nombre} descripcion ={prod.descripcion}/>}
          )};
                    

export default Ejemplo1;