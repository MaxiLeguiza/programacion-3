import React from 'react'

const Store = React.createContext();

const Padre = (props) =>{
    const nombre = "Juan";
    return(
        <Store.Provider value = {nombre}>
            {props.children}
        </Store.Provider>
    )
}

const Hijo1 = (props) =>{
    // return(
    //     <Store.Consumer>
    //     {(value) =>{
    //         return(
    //         <>
    //             <div>Hijo</div>
    //             {props.children}
    //         </> 
    //         )

    //     }}
    //     </Store.Consumer>
    // )

    const value = React.useContext(Store);
    return(
            <>
               <div>Hijo - mi papa es {value}</div>
                 {props.children}
             </> 
    )
}

const Nieto = () =>{
    const value = React.useContext(Store);
    return(
        <div>
            Soy el nieto - mi abuelo es {value}
        </div>
    )
}
const Hijo2 = (props) =>{
    const value = React.useContext(Store);
    return(
        <div>
           <div>
               Hijo 2 - Mi papa tambien es {value}
            </div>
           {props.children}
        </div>
       
    )
}

const Ejemplo5 = () => {
    return (
            <Padre>
                <Hijo1>
                    <Nieto/>
                </Hijo1>
                <Hijo2>
                    <p>Hola</p>
                </Hijo2>
            </Padre>
    )
}

export default Ejemplo5
