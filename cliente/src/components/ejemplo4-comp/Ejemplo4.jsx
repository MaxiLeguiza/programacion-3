import React from 'react'

//Componente customizado
const MiTitulo = (props) =>{
    return(
        <div>
            <h1>
                {props.valor && <h1>{props.valor}</h1>}
                {!props.valor && <h1>Titulo por defecto</h1>}
                {props.children}
            </h1>
        </div>
    )
}

const Ejemplo4 = () => {
    return (
        <div>
             <MiTitulo valor = {"Titulo 1"}>
                <h2>Subtitulo</h2>
             </MiTitulo>
            
        </div>
    )
}

export default Ejemplo4
