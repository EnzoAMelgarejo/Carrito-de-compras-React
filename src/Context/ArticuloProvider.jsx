/*Este componente obtiene los productos de la API (https://fakestoreapi.com/products) y los guarda en el estado articulos usando useState.
El useEffect asegura que los productos se obtengan una sola vez cuando el componente se monta. Luego, el estado articulos se pasa al contexto para que otros componentes puedan acceder a él. */

import { ArticulosContext } from "./ArticuloContext"
import { useEffect, useState } from "react"
export const ArticulosProvider = ({children}) => {
const [articulos, setArticulos] = useState([])
const fetchProductos = async() => {
  const response= await fetch('https://fakestoreapi.com/products')
  const data= await response.json()
  console.log(data)
  setArticulos(data)
}
useEffect(() => {fetchProductos()
}, [])
 return (
    <>
     <ArticulosContext.Provider value={{articulos}}>
        {children}
     </ArticulosContext.Provider>
    </>
  )
}
