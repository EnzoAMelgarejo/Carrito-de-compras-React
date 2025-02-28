# Carrito de Compras en React

## Descripción
Este es un proyecto de carrito de compras básico construido con React. Permite agregar productos a un carrito, aumentar o disminuir cantidades, eliminar productos, y calcular el total de la compra. Además, se incluye un sistema de navegación con un `NavBar` que permite acceder tanto a la lista de productos disponibles como al carrito de compras.

## Características
- **Visualización de productos**: El proyecto muestra una lista de productos obtenidos desde una API (FakeStore API) con detalles como título, descripción, precio e imagen.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, ajustar la cantidad de los productos o eliminarlos.
- **Cálculo del total**: El sistema calcula el total de la compra con base en los productos y cantidades seleccionadas.
- **Navegación**: El proyecto tiene dos rutas principales: una para ver los productos disponibles (`/Compras`) y otra para ver el carrito (`/Carrito`).
- **Persistencia de datos**: El estado de los productos y el carrito de compras se maneja mediante contextos y reducers, lo que permite la gestión centralizada del estado.

## Tecnologías Utilizadas
- **React**: Para la construcción de la interfaz y la gestión de estado de la aplicación.
- **React Router**: Para la gestión de rutas dentro de la aplicación.
- **Material UI**: Para el diseño de los iconos y el `Badge` de notificación en el `NavBar`.
- **Context API y Reducers**: Para manejar el estado global de los artículos y el carrito de compras.
- **FakeStore API**: Para obtener los datos de productos en formato JSON.
- **CSS**: Para la personalización del diseño visual de la aplicación.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <https://github.com/EnzoAMelgarejo/Carrito-de-compras-React>
   ```

2. Navega hasta el directorio del proyecto:
   ```bash
   cd Carrito-de-compras-React
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Ejecuta la aplicación:
   ```bash
   npm start
   ```

La aplicación debería estar corriendo en `http://localhost:3000`.

## Estructura del Proyecto

El proyecto sigue una estructura modular, con los siguientes componentes principales:

### 1. **`CarritoApp`**
   - Este es el componente principal que envuelve la aplicación con los contextos `ArticulosProvider` y `CarritoProvider`, y configura las rutas principales de la aplicación.
   - **Rutas**:
     - `/Compras`: Muestra la lista de productos disponibles.
     - `/Carrito`: Muestra los productos en el carrito de compras.

### 2. **`NavBar`**
   - El `NavBar` se encarga de mostrar el nombre de la tienda y un ícono de carrito con el número de productos en el carrito.

### 3. **`Card`**
   - Cada `Card` representa un producto y tiene botones para agregar o quitar el producto del carrito. Si el producto ya está en el carrito, cambia el botón a "Quitar del carrito".

### 4. **`ComprasRoute`**
   - Muestra la lista de productos disponibles para agregar al carrito. Usa el contexto `ArticulosContext` para obtener los productos y el contexto `CarritoContext` para agregar o quitar productos del carrito.

### 5. **`CarritoRoute`**
   - Muestra los productos que han sido agregados al carrito. Los usuarios pueden ajustar la cantidad de los productos o eliminarlos. También muestra el total de la compra.

### 6. **`CarritoContext`**
   - Gestiona el estado del carrito de compras, incluyendo agregar, eliminar, aumentar y disminuir cantidades de productos.

### 7. **`ArticulosContext`**
   - Gestiona el estado de los productos disponibles. Los productos se obtienen de la FakeStore API.

## Componentes y Funcionalidades

- **`NavBar`**: 
  - Muestra el icono del carrito de compras con el número de artículos añadidos.
  - Permite navegar entre las rutas de productos y carrito.
  
- **`Card`**:
  - Muestra la imagen, el título, la descripción y el precio de un producto.
  - Tiene un botón para agregar o quitar productos del carrito.
  
- **`ComprasRoute`**:
  - Muestra todos los productos disponibles.
  - Permite agregar productos al carrito.

- **`CarritoRoute`**:
  - Muestra los productos que se han agregado al carrito, con la opción de aumentar o disminuir la cantidad, y eliminar artículos.
  - Calcula el total de la compra.

- **`CarritoContext`**:
  - Administra el estado del carrito y las operaciones relacionadas, como agregar, quitar, aumentar y disminuir la cantidad de productos.

- **`ArticulosContext`**:
  - Administra el estado de los productos obtenidos de la API.
