// Este es el componente principal de la aplicación "CarritoApp". 
// Se encarga de envolver toda la aplicación en los Contextos de los artículos y el carrito, 
// proporcionando acceso a estos contextos en toda la aplicación.
// Además, establece las rutas principales de la aplicación, utilizando "react-router-dom" para la navegación. 
// Estas rutas permiten a los usuarios navegar entre las páginas de "Compras" y "Carrito". 
// Si el usuario intenta acceder a una ruta no válida, será redirigido a la página de "Carrito" por defecto.


import { Routes, Route, Navigate} from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { CarritoRoute } from "./Routes/CarritoRoute"
import { ComprasRoute } from "./Routes/ComprasRoute"
import { ArticulosProvider } from "./Context/ArticuloProvider"
import { CarritoProvider } from "./Context/CarritoProvider"
export const CarritoApp = () => {
  return (
    <ArticulosProvider>
      <CarritoProvider>
    <NavBar></NavBar>
    <div className="Container">
    <Routes>
      <Route path="/Compras" element={<ComprasRoute />}></Route>
      <Route path="/Carrito" element={<CarritoRoute />}></Route>
      <Route path="/*" element={<Navigate to="/Carrito" />}></Route>
    </Routes>
    </div>
      </CarritoProvider>
    </ArticulosProvider>
  )
}