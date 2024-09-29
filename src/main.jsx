import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'
import './Styles/Card.css'
import './Styles/Lista.css'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <CarritoApp />
  </StrictMode>
  </BrowserRouter>,
)
