import React from 'react';

const Store = React.createContext();


const App = (props) => {

    const estadoInicial = {
        productos: [{ id: 1, nombre: "Producto uno", precio: 33 },
        { id: 2, nombre: "Producto dos", precio: 66 }],
        prodSeleccionado: 2
    }

    return (
        <Store.Provider value={estadoInicial}>
            {props.children}
        </Store.Provider>
    )
}

const ListaProductos = () => {
    const ctx = React.useContext(Store);
    const { productos } = ctx;
    return (
        <div>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>

                {productos.map(prod => {
                    return (
                        <tr key={prod.id}>
                            <td>{prod.nombre}</td>
                            <td>{prod.precio}</td>
                        </tr>

                    )
                })}


            </table>
        </div>
    )

}

const MostrarProducto = () => {
    return (
        <div>
            Mostrar Productos
        </div>
    )
}
const Ejemplo6 = () => {
    return (
        <App>
            <ListaProductos />
            <MostrarProducto />
        </App>
    )
}

export default Ejemplo6;