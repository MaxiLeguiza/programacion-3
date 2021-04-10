import React,{useState} from 'react'
import Mensaje from './Mensaje';

const Ejemplo3 = () => {
    
    const [verMensaje, setVerMensaje] = useState(true);

    return (
        <div>
            <button onClick={()=> setVerMensaje(!verMensaje)}>
                {verMensaje ? 'Ocultar' : 'Mostrar'}
            </button>
             {verMensaje && <Mensaje/>}
        </div>
    )
}

export default Ejemplo3;
