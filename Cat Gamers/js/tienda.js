// Variables globales //
let mainContainer = document.querySelector(".main-container");
let contenedorMain = document.getElementById("contenedor-main");
let tarjetaProducto = document.querySelector(".tarjeta-producto");
let imagenProducto = document.querySelector(".imagen-producto");
let tituloProducto = document.querySelector(".titulo-producto");
let listaDetallesProducto = document.querySelector(".lista-detalles-producto");
let descripcionProducto = document.querySelector(".descripcion-producto");
let categoriaProducto = document.querySelector(".categoria-producto");
let precioProducto = document.querySelector(".precio-producto");
let botonTarjeta = document.querySelector(".añadir-carrito");

fetch(
    'data/productos.json')
.then(respuesta => respuesta.json())
.then(productos => {
    productos.forEach(producto => {
    const tarjetaHTML = `
    <div class="tarjeta-producto">
      <img class="imagen-producto" src="${producto.imagen}" alt="${producto.nombre}">
      <h2 class="titulo-producto">${producto.nombre}</h2>
      <ul class="lista-detalles-producto">
        <li class="descripcion-producto">${producto.descripcion}</li>
        <li class="categoria-producto">${producto.categoria}</li>
        <li class="precio-producto">${producto.precio}€</li>
      </ul>
      <button class="añadir-carrito">Añadir al carrito</button>
    </div>
    `;
    contenedorMain.innerHTML += tarjetaHTML;
    });
})
.catch(error => console.error("Error al cargar:", error));
