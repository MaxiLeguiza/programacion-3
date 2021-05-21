import React from 'react'

const ejemplo7 = () => {

    const array = [1,2,3,4,5];
    const array2 = [2,3,6,5,4];
    const reductora = (estado, valor) =>{
        const resultado = estado + valor;
        return resultado;
    }

    const estadoInicial = 0;
    const resultadoFinal1= array.reduce(reductora, estadoInicial);

    const resultadoFinal2= array2.reduce(reductora, estadoInicial);

// Tambien para hacerlo mas rapido podemos usar accumulator para no tener que ir guardando todos los valores 
    return (
        <div>
            La funcion reduce es  : {resultadoFinal1} 
            
            <div >
                La funcion reduce es  : {resultadoFinal2}
            </div>
        </div>

      
    )
}

export default ejemplo7
