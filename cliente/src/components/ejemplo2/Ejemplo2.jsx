import React, {useState} from 'react';


const estadoInicial = 0;

const Ejemplo2 = () =>{

    const [contador, setContador] = useState(estadoInicial);

    const reiniciarContador = () =>{
        setContador(estadoInicial);
    } 

    const restarNumero = () => {
        setContador(contador-1)
    }
    return (
            <div>
                <p>Contador: {contador}</p>
                <button onClick={() => setContador(contador+1)}>+1</button>
                <button  onClick={restarNumero}>-1</button>
                <button onClick={reiniciarContador}>Reiniciar</button>
            </div>
        );
    }

export default Ejemplo2

