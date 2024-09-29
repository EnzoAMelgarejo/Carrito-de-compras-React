import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"
export const CarritoRoute = () => {
  const {listaDeCompras, aumentarCantidad, disminuirCantidad, eliminarCompra} = useContext(CarritoContext)
  const calcularTotal = () => {
    return listaDeCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
  }
  const handleImpresion = () => {
    print()
  }
  return (
    <>
      <table className="table">
       <thead>
         <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
       </thead>
       <tbody>
        {
          listaDeCompras.map(item => (
            <tr key={item.id}>
              <th>{item.title}</th>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-ouline" onClick={() => aumentarCantidad(item.id)}>+</button>
                <button className="btn btn-primary" >{item.cantidad}</button>
                <button className="btn btn-ouline" onClick={() => disminuirCantidad(item.id)}>-</button>
              </td>
              <td>
                <button
                 type='button'
                 className="btn btn-danger"
                 onClick={() => eliminarCompra(item.id)}>QUITAR
                </button>
              </td>
            </tr>
          ))
        }
        <tr>
        <th><b>TOTAL:</b></th>
        <td></td>
        <td></td>
        <td>${calcularTotal()}</td>
        </tr>
       </tbody>
      </table>
      <div className="d-grid gap-2">
        <button 
         className="btn btn-primary" 
         onClick={handleImpresion}
         disabled={listaDeCompras<1}>COMPRAR
         </button>
      </div>
    </>
  )
}
