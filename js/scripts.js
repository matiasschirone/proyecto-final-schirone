function Producto (nombre, stock, precio){
   this.nombre = nombre;
   this.stock = stock;
   this.precio = precio;
}

const productoA = new Producto('Cort stratocaster', 10, 75800);
const productoB = new Producto('Fender telecarter', 15, 180000);
const productoC = new Producto('Gibson lp gold top', 3, 450000);
const productoD = new Producto('Ltd by Esp', 18, 120000);
const productoF = new Producto('Amplificador Marshall', 20, 125000);
const productoG = new Producto('Pedalera Head rush', 60, 120000);
const productoH = new Producto('Amplificador Fender Champion 60ac', 26, 90000);
const productoI = new Producto('Amplificador Marshall 100w', 30, 140000);

const listadoProductos = [productoA, productoB, productoC];

const resultado = producto.filter((el) => el.nombre.includes('Fender'))
 console.log(resultado)

for(const producto of listadoProductos){
   console.log(producto.nombre + " " + producto.precio + " " + producto.stock)
}
listadoProductos.push( new Producto('Pedalera Zoom', 8, 30000));
listadoProductos.push( new Producto('Amplificador Peavy', 6, 40000));

 
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

/*let seguirCompra = prompt("¿Desea seguir comprando? Si/No");

if(seguirCompra.toLowerCase() === "si"){
    nombreCompra();
}
else if(seguirCompra.toLowerCase() === "no"){
    alert("¿Gracias por su compra")
}*/

alert("¡Gracias por su compra!")




