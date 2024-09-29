import { useState } from 'react'
import '../Styles/Card.css'
export const Card = ({imagen, titulo, descripcion, precio, handleAgregar, handleQuitar}) => {
    const [added, setAdded] = useState(false)
    const HandleAdd = () => {
      handleAgregar()
      setAdded(true)
    }
    const HandleQuit = () => {
      handleQuitar()
      setAdded(false)
    }
  return (
    <div className="tarjeta">
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{titulo}</h3>
            <p className="tarjeta-descripcion">{descripcion}</p>
            <p className="tarjeta-precio">{precio}</p>
        {
        added ? 
        <button
         type="button"
         className="boton-quitar"
         onClick={HandleQuit}>
            Quitar del carrito
        </button> :
        <button
        type="button"
        className="boton-agregar"
        onClick={HandleAdd}>
            Agregar al carrito
        </button> 
        }
        </div>
    </div>
  )
}
