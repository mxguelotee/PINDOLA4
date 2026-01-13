/**
 * Gestiona los datos y comportamiento de un producto del catálogo.
 */

class Producto {
   /**
   * @param {string} nombre - Nombre del producto.
   * @param {number} precio - Precio unitario.
   * @param {number} cantidad - Cantidad del producto.
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    /** @type {number} */
    this.precio = precio;
    this.cantidad = cantidad;
  }

   /**
   * Calcula el total por cantidad de un producto.
   * @returns {number} Total por la cantidad de productos.
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}


/**
 * Gestiona el carrito de compras.
 */
class Carrito {
  constructor() {
    this.productos = [];
  }

  
  /**
   * Agrega un producto al carrito.
   * @param {Producto} producto - Producto a agregar.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }


  /**
   * Calcula el total de todos los productos en el carrito.
   * @returns {number} Total del carrito.
   */ 
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

   /**
   * Vacía el carrito.
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

/**
 * Representa a un usuario del sistema que puede realizar compras.
 */
class Usuario {

  /**
   * @param {string} nombre - Nombre del usuario.
   * @param {string} correo - Correo electrónico del usuario.
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    /** @type {Carrito} */
    this.carrito = new Carrito();
  }

  /**
   * Añade un producto al carrito del usuario.
   * @param {Producto} producto - Producto que se quiere añadir al carrito.
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   * Finaliza la compra del usuario.
   * Calcula el total del carrito, muestra el importe por consola
   * y vacía el carrito una vez realizada la compra.
   */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();