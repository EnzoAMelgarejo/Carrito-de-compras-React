// El componente Card representa un artículo en la página de compras, mostrando detalles del producto y permitiendo al usuario agregarlo o quitarlo del carrito.

// Funcionalidades principales:
// - Recibe las siguientes props: `imagen`, `titulo`, `descripcion`, `precio`, `handleAgregar`, y `handleQuitar`.
// - Utiliza el hook de estado `useState` para llevar un seguimiento de si el artículo ha sido agregado al carrito (`added`).
// - Si el artículo ya está en el carrito (`added` es `true`), muestra un botón que permite al usuario quitar el artículo del carrito. Si no está agregado, muestra un botón para agregarlo.
// - Muestra una tarjeta con la imagen, el título, la descripción y el precio del artículo. El estilo de la tarjeta está definido en el archivo `Card.css`.

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
