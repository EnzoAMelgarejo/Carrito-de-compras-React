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
