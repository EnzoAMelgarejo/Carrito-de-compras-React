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
