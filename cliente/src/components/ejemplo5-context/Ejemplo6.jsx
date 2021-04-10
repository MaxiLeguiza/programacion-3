import React from 'react';

const Store = React.createContext();

const App = (props) => {
    const estadoInicial = {
        productos: [{id:1, nombre: "Producto uno", precio: 33},
                    {id:2, nombre: "Producto dos", precio: 66}],
        prodSeleccionado : 2
    }
    return(
        <Store.Provider value = {estadoInicial}>
                {props.children}
        </Store.Provider>
    )
}

const ListaProductos = () => {
    const ctx = React.createContext(Store);
    const {productos} = ctx ;
    return(
        <div>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
                {productos.map( prod => {
                    return(
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                    )
                })}
               
map indefinido verificar prq no funcion video cliente servidor 21 -react context 4
            </table>
        </div>
    )
}

const MostrarProducto = () => {
    return(
        <div>
            Mostrar Productos
        </div>
    )
}
const Ejemplo6 = () => {
    return(
        <App>
            <ListaProductos />
            <MostrarProducto />
        </App>
    )
}

export default Ejemplo6;