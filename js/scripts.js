function Producto (nombre, stock, precio, categoria){
   this.nombre = nombre;
   this.stock = stock;
   this.precio = precio;
   this.categoria = categoria;
}

const productoA = new Producto('Cort stratocaster', 10, 75800, 'guitarra');
const productoB = new Producto('Fender telecarter', 15, 180000, 'guitarra');
const productoC = new Producto('Gibson lp', 3, 450000, 'guitarra');
const productoD = new Producto('Ltd', 18, 120000, 'guitarra');
const productoF = new Producto('Amplificador Marshall', 20, 125000, 'amplificador');
const productoG = new Producto('Head rush', 60, 120000, 'pedalera');
const productoH = new Producto('Amplificador Fender 60ac', 26, 90000, 'amplificador');
const productoI = new Producto('Amplificador Fender 100w', 30, 140000, 'amplificador');

const listadoProductos = [productoA, productoB, productoC, productoD, productoF, productoG, productoH, productoI];

const resultado1 = listadoProductos.filter((x) => x.nombre.includes('Fender'));
const resultado2 = listadoProductos.filter((x) => x.nombre.includes('Gibson'));
const resultado3 = listadoProductos.filter((x) => x.nombre.includes('Cort'));
const resultado4 = listadoProductos.filter((x) => x.nombre.includes('Ltd'));
const resultado5 = listadoProductos.filter((x) => x.nombre.includes('Head'));
const bajoPrecio = listadoProductos.filter((x) => x.precio <= 150000);
const clase = listadoProductos.filter((x) => x.categoria === 'guitarra');
const clase2 = listadoProductos.filter((x) => x.categoria === 'amplificador');
const clase3 = listadoProductos.filter((x) => x.categoria === 'pedalera');
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(bajoPrecio);
console.log(clase);
console.log(clase2);
console.log(clase3);

for(const producto of listadoProductos){
   console.log(producto.nombre + " " + producto.precio + " " + producto.stock + " " + producto.categoria);
}

listadoProductos.push( new Producto('Pedalera Zoom', 8, 30000, 'pedalera'));
listadoProductos.push( new Producto('Amplificador Peavy', 6, 40000, 'amplificador'));
listadoProductos.push( new Producto('Pedalera gt5', 6, 3000, 'pedalera'));
listadoProductos.push( new Producto('Prs', 6, 90000, 'guitarra'));
listadoProductos.push( new Producto('Pedalera Boss', 6, 98000, 'pedalera'));

 
let cantidadComprada;
let precioTotalVenta = 0;
 
alert(`Hola estos son los productos que te podemos ofrecer:
           ${productoA.nombre}
           ${productoB.nombre}
           ${productoC.nombre}
           ${productoD.nombre}
           ${productoF.nombre}
           ${productoG.nombre}
           ${productoH.nombre}
           ${productoI.nombre}
`)

function stockInsuficiente(stock) {
   alert("No tenemos suficiente stock del producto, puede comprar hasta " + stock + ' unidades');
}
function stockSuficiente(stock, precio, nombre) {
   stock -= cantidadComprada;
   precioTotalVenta += cantidadComprada * precio;
   console.log("quedan " + stock + " " + nombre + " en stock");
}
function compra(stock, precio, nombre) {
   cantidadComprada = parseInt(prompt(`Ingrese cantidad que quiere comprar de ${nombre}`));
   if (cantidadComprada <= stock) {
       stockSuficiente(stock, precio, nombre);
   }
   else {
       stockInsuficiente(stock);
   }
}
 
function cuotas() {
   let cuotas = parseInt(prompt("Ingrese cantidad de cuotas"));
   let precioCuota = precioTotalVenta / cuotas;
   alert("El precio de la cuota es de $" + precioCuota.toFixed(2));
}



let cantidadProductosComprados = parseInt(prompt('Ingrese la cantidad de productos distintos que desea comprar'));
 
for (let i = 0; i < cantidadProductosComprados; i++) {

let nombreCompra = prompt("Ingrese el nombre del producto a comprar:");

if (nombreCompra.toLowerCase() === listadoProductos[0].nombre.toLowerCase()) {
       compra(productoA.stock, productoA.precio, productoA.nombre);
}
else if (nombreCompra.toLowerCase() === listadoProductos[1].nombre.toLowerCase()) {
       compra(productoB.stock, productoB.precio, productoB.nombre);
}
else if (nombreCompra.toLowerCase() === listadoProductos[2].nombre.toLowerCase()) {
       compra(productoC.stock, productoC.precio, productoC.nombre);
 
}
else if (nombreCompra.toLowerCase() === listadoProductos[3].nombre.toLowerCase()) {
      compra(productoD.stock, productoD.precio, productoD.nombre);

}
else if (nombreCompra.toLowerCase() === listadoProductos[4].nombre.toLowerCase()) {
   compra(productoF.stock, productoF.precio, productoF.nombre);

}
else if (nombreCompra.toLowerCase() === listadoProductos[5].nombre.toLowerCase()) {
   compra(productoG.stock, productoG.precio, productoG.nombre);

}
else if (nombreCompra.toLowerCase() === listadoProductos[6].nombre.toLowerCase()) {
   compra(productoH.stock, productoH.precio, productoH.nombre);

}
else if (nombreCompra.toLowerCase() === listadoProductos[7].nombre.toLowerCase()) {
   compra(productoI.stock, productoI.precio, productoI.nombre);

}
   else {
       alert('No tenemos ese producto');
   }
}


let respuestaCuotas = prompt("¿Desea pagar en cuotas? Si/No");
 
if (respuestaCuotas.toLowerCase() === "si") {
   cuotas();
}

else if (respuestaCuotas.toLowerCase() === "no") {
   alert("El precio total de la compra es de $" + precioTotalVenta);
} 
else {
   alert("Ingrese una respuesta valida");
}


alert("¡Gracias por su compra!");




