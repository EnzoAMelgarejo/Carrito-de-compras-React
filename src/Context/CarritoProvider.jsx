import { CarritoContext } from "./CarritoContext";
import { useReducer } from "react";
const initialState = []
export const CarritoProvider = ({children}) => {
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] agregar compra':
                return [...state, action.payload]

            case '[CARRITO] aumentar cantidad':
                return state.map(item => {
                    const cant = item.cantidad +1
                    if (item.id === action.payload) return {...item, cantidad: cant}
                    return item
                })
            case '[CARRITO] disminuir cantidad':
                return state.map(item => {
                    const cant = item.cantidad -1
                    if(item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
                    return item
                })
            case '[CARRITO] eliminar compra':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state
        }
    }
    const [listaDeCompras, dispatch] = useReducer(comprasReducer, initialState)
    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
         type:'[CARRITO] agregar compra',
         payload: compra
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
         type:'[CARRITO] aumentar cantidad',
         payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
         type:'[CARRITO] disminuir cantidad',
         payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
         type:'[CARRITO] eliminar compra',
         payload: id       
        }
        dispatch(action)
    }
  return (
    <>
      <CarritoContext.Provider value={{listaDeCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra}}>
        {children}
      </CarritoContext.Provider>
    </>
  )
}
