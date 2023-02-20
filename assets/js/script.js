alert("Bienvenido a la pagina de electricidad e iluminacion Fosam");

let nombreCliente = prompt("Ingrese su nombre:");
console.log(`Bienvenido a la tienda de electricidad/iluminación, ${nombreCliente}!`);

let nombreApellido = prompt("Ingrese su apellido:");
console.log(`Bienvenido a la tienda de electricidad/iluminación, ${nombreApellido}!`);

alert("a continuacion le solicitaremos la cantidad de productos que desee llevar");

let productos = ["bombillas", "cables", "enchufes"];
console.log(`Los productos disponibles son: ${productos}`);

let precioProductos = [2.99, 4.99, 1.99];
console.log(`Los precios de los productos son: ${precioProductos}`);

let cantidadProductos = [];
console.log(`La cantidad de cada producto que has elegido es: ${cantidadProductos}`);

let descuento = 0.1;

// Algoritmos
let subtotal = 0;
for (let i = 0; i < productos.length; i++) {
    let cantidad = parseInt(prompt(`Ingrese la cantidad de ${productos[i]}:`));
    cantidadProductos.push(cantidad);
    subtotal += precioProductos[i] * cantidadProductos[i];
}
console.log(`El subtotal es: ${subtotal.toFixed(2)}`);

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

// Condicionales y estructura if
let envioGratuito = false;
if (total >= 50) {
    console.log("¡Felicidades! ¡Tienes derecho a envío gratuito!");
    alert("¡Felicidades! ¡Tienes derecho a envío gratuito!");
    envioGratuito = true;
} else {
    console.log("Lamentablemente, no cumples con el monto mínimo para envío gratuito.");
    alert("Lamentablemente, no cumples con el monto mínimo para envío gratuito.");
}

console.log(`Gracias, ${nombreCliente}! Su compra total fue de ${totalNum.toFixed(2)} y hemos enviado un recibo a su dirección de correo electrónico.`);
// Scope
function imprimirMensaje() {
    let mensaje = "Gracias por tu compra!";
    console.log(mensaje);
}
imprimirMensaje();


