// Objeto cliente
const cliente = {
    nombre: prompt("Ingrese su nombre:"),
    apellido: prompt("Ingrese su apellido:")
};

// Objeto productos
const productos = [
    { nombre: "bombillas", precio: 2.99 },
    { nombre: "cables", precio: 4.99 },
    { nombre: "enchufes", precio: 1.99 }
];

console.log("Bienvenido a la tienda de electricidad / iluminación, " + cliente.nombre + " " + cliente.apellido + "!");
alert("a continuación le solicitaremos la cantidad de productos que desee llevar");

// Función para obtener la cantidad de cada producto
function obtenerCantidadProductos(producto) {
    const cantidad = parseInt(prompt("Ingrese la cantidad de " + producto.nombre + ":"));

    return { ...producto, cantidad };
}

// Array de cantidad de productos
const cantidadProductos = productos.map(obtenerCantidadProductos);

// Función para calcular el subtotal
function calcularSubtotal(cantidadProducto) {
    return cantidadProducto.precio * cantidadProducto.cantidad;
}

const subtotal = cantidadProductos.reduce((acc, curr) => acc + calcularSubtotal(curr), 0);

console.log(`El subtotal es: ${subtotal.toFixed(2)}`);

// Función de descuento
const descuento = 0.1;
function obtenerDescuento(subtotal) {
    if (subtotal > 50 && subtotal <= 100) {
        return subtotal * descuento;
    } else if (subtotal > 100) {
        return subtotal * (2 * descuento);
    } else {
        return 0;
    }
}

const descuentoTotal = obtenerDescuento(subtotal);

// Función para calcular el total
function calcularTotal(subtotal, descuento) {
    return subtotal - descuento;
}

const total = calcularTotal(subtotal, descuentoTotal);
const totalString = total.toFixed(2);
const totalNum = parseFloat(totalString);

// Función para imprimir el mensaje de envío
function imprimirMensajeEnvio() {
    console.log("¡Felicidades! ¡Tienes derecho a envío gratuito!");
    alert("¡Felicidades! ¡Tienes derecho a envío gratuito!");
}

// Condicional para envío gratuito
let envioGratuito = false;
if (total >= 50) {
    imprimirMensajeEnvio();
    envioGratuito = true;
} else {
    console.log("Lamentablemente, no cumples con el monto mínimo para envío gratuito.");
    alert("Lamentablemente, no cumples con el monto mínimo para envío gratuito.");
}

console.log("Gracias, " + cliente.nombre + "! Su compra total fue de " + totalNum.toFixed(2) + " y hemos enviado un recibo a su dirección de correo electrónico.");

// Función para imprimir mensaje de agradecimiento
function imprimirMensajeAgradecimiento() {
    let mensaje = "Gracias por tu compra!";
    console.log(mensaje);
}

imprimirMensajeAgradecimiento();
