import React from 'react';

const MostrarProducto = ({nombre,descripcion}) =>{

    //const nombre = props.nombre;
    //const descripcion = props.descripcion;
    //Es lo mismo que arriba pero un poco mas simplificado
    //const {nombre,descripcion}= props;

    return(
        <>
            <h3>{nombre}</h3>
            <div>{descripcion}</div>
        </>
       
    );
}

export default MostrarProducto;