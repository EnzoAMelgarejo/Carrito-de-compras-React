// Este componente representa la página de "Compras" de la aplicación. 
// Su objetivo es mostrar una lista de artículos disponibles para agregar al carrito de compras.

// Funcionalidades principales:
// - Utiliza el contexto de "ArticulosContext" para obtener la lista de artículos disponibles para la compra.
// - Utiliza el contexto de "CarritoContext" para obtener las funciones necesarias para agregar y eliminar artículos del carrito.
// - Para cada artículo en la lista, se renderiza un componente "Card", mostrando la información del artículo (imagen, título, descripción, precio) y proporcionando botones para agregarlo o quitarlo del carrito.
// - Al hacer clic en "Agregar", el artículo se agrega al carrito mediante la función `agregarCompra`.
// - Al hacer clic en "Quitar", el artículo se elimina del carrito utilizando la función `eliminarCompra`.

// El componente organiza los artículos en tarjetas, permitiendo que el usuario interactúe con ellos mediante los botones de agregar y quitar.

import { useContext } from "react"
import { Card } from "../Components/Card"
import { ArticulosContext } from "../Context/ArticuloContext"
import { CarritoContext } from "../Context/CarritoContext"
export const ComprasRoute = () => {
  const {articulos} = useContext(ArticulosContext)
  const { agregarCompra, eliminarCompra} = useContext(CarritoContext)
  const handleAgregar = (articulo) => {
    agregarCompra(articulo)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }
  return (
    <>
      <h1>Compras:</h1>
      <hr />

      {articulos.map(articulo => (
         <Card
          key={articulo.id}
          imagen={articulo.image}
          titulo={articulo.title}
          descripcion={articulo.description}
          precio={articulo.price}
          handleAgregar={() => handleAgregar(articulo)}
          handleQuitar={() => handleQuitar(articulo.id)} />))
        }
    </>
  )
}
