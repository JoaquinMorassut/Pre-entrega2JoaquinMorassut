// Variables
let nombreCliente = prompt("Ingrese su nombre:");
let productos = ["bombillas", "cables", "enchufes"];
let precioProductos = [2.99, 4.99, 1.99];
let cantidadProductos = [];
let descuento = 0.1;

// Algoritmos
for (let i = 0; i < productos.length; i++) {
    let cantidad = parseInt(prompt(`Ingrese la cantidad de ${productos[i]}:`));
    cantidadProductos.push(cantidad);
}
let subtotal = 0;
for (let i = 0; i < productos.length; i++) {
    subtotal += precioProductos[i] * cantidadProductos[i];
}

// anidaciones

let total;
if (subtotal > 50 && subtotal <= 100) {
    total = subtotal * (1 - descuento);
} else if (subtotal > 100) {
    total = subtotal * (1 - 2 * descuento);
} else {
    total = subtotal;
}

let totalString = total.toFixed(2);
let totalNum = parseFloat(totalString);

// Script
console.log(`Bienvenido a la tienda de electricidad/iluminación, ${nombreCliente}!`);
console.log(`Los productos disponibles son: ${productos}`);
console.log(`Los precios de los productos son: ${precioProductos}`);
console.log(`La cantidad de cada producto que has elegido es: ${cantidadProductos}`);
console.log(`El subtotal es: ${subtotal.toFixed(2)}`);
console.log(`El total con descuento es: ${totalNum.toFixed(2)}`);

// Condicionales y estructura if
if (total > 50) {
    console.log("¡Felicidades! ¡Tienes derecho a envío gratuito!");
} else {
    console.log("Lamentablemente, no cumples con el monto mínimo para envío gratuito.");
}

// Scope
function imprimirMensaje() {
    let mensaje = "Gracias por tu compra!";
    console.log(mensaje);
}
imprimirMensaje();
