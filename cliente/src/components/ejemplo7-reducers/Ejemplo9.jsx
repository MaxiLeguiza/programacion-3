import React from 'react'

const Ejemplo9 = () => {

    const estadoInicial = 0;

    const reducer = (state, accion) => {
 
     console.info(`El estado es: ${state} - ejecutado por ${accion}`);

     switch (accion.type) {
         case "SUMAR":
            return state + accion.payload;
        case  "RESTAR":
            return state - accion.payload; 
        case "lIMPIAR":
            return estadoInicial;
         default:
             break;
     }
        }
     
     const [state, dispatch] = React.useReducer(reducer, estadoInicial);
    
    
    
     return (
         <div>
              <div> Contador: {state} </div> 
              <button onClick ={()=> dispatch({type: "SUMAR", payload: 2})}> + </button>
              <button onClick ={()=> dispatch({type: "RESTAR", payload: 1})}> - </button>
              <button onClick ={()=> dispatch({type: "lIMPIAR",payload: estadoInicial})}> limpiar </button>
         </div>
          //aqui o llamamos a modo de objeto 
     )
}

export default Ejemplo9
