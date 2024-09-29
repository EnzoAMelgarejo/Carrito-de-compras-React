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