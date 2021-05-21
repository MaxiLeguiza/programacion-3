import React from 'react'

const Ejemplo8 = () => {
   // Dispatch --> disparador
   
   const estadoInicial = 0;

   const reducer = (state, accion) => {

    console.info(`El estado es: ${state} - ejecutado por ${accion}`);

    if(accion === "SUMAR"){
        return state + 1;
    }

    if(accion === "RESTAR"){
        return state - 1;
    }

    if(accion === "lIMPIAR"){
        return estadoInicial;
    }

    return state;
   }
    
   
    const [state, dispatch] = React.useReducer(reducer, estadoInicial);
   
   
   
    return (
        <div>
             <div> Contador: {state} </div> 
             <button onClick ={()=> dispatch("SUMAR")}> + </button>
             <button onClick ={()=> dispatch("RESTAR")}> - </button>
             <button onClick ={()=> dispatch("lIMPIAR")}> limpiar </button>
        </div>
    )
}

export default Ejemplo8
