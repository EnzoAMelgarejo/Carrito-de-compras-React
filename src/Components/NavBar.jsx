// Este componente representa el Navbar de la aplicación, utilizado para navegar entre las distintas rutas de la aplicación de carrito de compras.

// Funcionalidades principales:
// - Utiliza el contexto "CarritoContext" para obtener la lista de compras del carrito mediante `listaDeCompras`.
// - Muestra el nombre de la aplicación "Carrito" como enlace principal que redirige a la página del carrito.
// - Incluye un botón de navegación para colapsar el navbar en dispositivos móviles.
// - Proporciona un enlace a la ruta "Compras" donde el usuario puede agregar artículos al carrito.
// - Muestra un ícono de carrito de compras (ShoppingCart) en la barra de navegación, que incluye un "Badge" de Material UI, el cual muestra la cantidad de artículos en el carrito.
// - El contador del badge se actualiza dinámicamente según la cantidad de artículos en el carrito (utilizando `listaDeCompras.length`).

// Este navbar permite al usuario navegar entre la página de compras y el carrito, mientras mantiene siempre visible la cantidad de artículos en el carrito.

import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"
export const NavBar = () => {
 const {listaDeCompras} = useContext(CarritoContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
             <NavLink to='/Carrito' className="navbar-brand">Carrito</NavLink>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                         <NavLink to='/Compras' className="nav-link active" aria-current="page">Compras</NavLink>
                     </li>
                 </ul>
                 <NavLink to='/*'>
                     <Badge badgeContent={listaDeCompras.length} color="secondary">
                     <ShoppingCart color="action" /></Badge>
                 </NavLink>
                </div>
            </div>
       </nav>
    </>
  )
}