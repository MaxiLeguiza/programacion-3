import React, {useEffect}from 'react'

const Mensaje = () => {

    useEffect(()=>{

        console.info("+++ Mostrando componente");

        return () =>{
            console.info("--- Desmontando el componente")
        }

    }, [])

    return (
        <div>
            Aqui mostramos el mensaje 
        </div>
    )
}

export default Mensaje
