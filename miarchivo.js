/*function Producto (nombre, stock, precio, imagen, categoria){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.imagen = imagen;
    this.categoria = categoria;
 }
 
 const productoA = new Producto('Cort stratocaster', 10, 75800, './imagenes/descarga1.jpg', 'guitarra');
 const productoB = new Producto('Fender telecarter', 15, 180000, './imagenes/images2.jpg', 'guitarra');
 const productoC = new Producto('Gibson lp', 3, 450000, './imagenes/images3.jpg', 'guitarra');
 const productoD = new Producto('Ltd', 18, 120000, './imagenes/images.jpg', 'guitarra');
 const productoF = new Producto('Amplificador Marshall', 20, 125000, './imagenes/descarga2.jpg', 'amplificador');
 const productoG = new Producto('Head rush', 60, 120000, './imagenes/descarga5.jpg', 'pedalera');
 const productoH = new Producto('Amplificador Fender 60ac', 26, 90000, './imagenes/images4.jpg', 'amplificador');
 const productoI = new Producto('Amplificador Fender 100w', 30, 140000, './imagenes/images6.jpg', 'amplificador');
 
 const baseDeDatos = [productoA, productoB, productoC, productoD, productoF, productoG, productoH, productoI];*/
 
 const baseDeDatos = [
    {
        id: 1,
        nombre: 'cort stratocaster',
        stock: 10,
        precio: 75800,
        imagen: './imagenes/descarga1.jpg',
        categoria: 'guitarra'
    },
    {
        id: 2,
        nombre: 'Fender telecarter',
        stock: 3,
        precio: 450000,
        imagen: './imagenes/images2.jpg',
        categoria: 'guitarra',
    },
    {
        id: 3,
        nombre: 'Gibson lp',
        stock: 15,
        precio: 450000,
        imagen: './imagenes/images3.jpg',
        categoria: 'guitarra',
    },
    {
        id: 4,
        nombre: 'Ltd',
        stock: 18,
        precio: 120000,
        imagen: './imagenes/images.jpg',
        categoria: 'guitarra',
    },
    {
        id: 5,
        nombre: 'Amplificador Marshall',
        stock: 20,
        precio: 125000,
        imagen: './imagenes/descarga2.jpg',
        categoria: 'amplificador'
    },
    {
        id: 6,
        nombre: 'Head rush',
        stock: 60,
        precio: 120000,
        imagen: './imagenes/descarga5.jpg',
        categoria: 'pedalera'
    },
    {
        id: 7,
        nombre: 'Amplificador Fender 60ac',
        stock: 26,
        precio: 90000,
        imagen: './imagenes/images4.jpg',
        categoria: 'amplicador'
    },
    {
        id: 8,
        nombre: 'Amplificador Fender 100',
        stock: 30,
        precio: 140000,
        imagen: './imagenes/images6.jpg',
        categoria: 'amplicador'
    },
    
];

const resultado1 = baseDeDatos.filter((x) => x.nombre.includes('Fender'));
const resultado2 = baseDeDatos.filter((x) => x.nombre.includes('Gibson'));
const resultado3 = baseDeDatos.filter((x) => x.nombre.includes('Cort'));
const resultado4 = baseDeDatos.filter((x) => x.nombre.includes('Ltd'));
const resultado5 = baseDeDatos.filter((x) => x.nombre.includes('Head'));
const bajoPrecio = baseDeDatos.filter((x) => x.precio <= 150000);
const clase = baseDeDatos.filter((x) => x.categoria === 'guitarra');
const clase2 = baseDeDatos.filter((x) => x.categoria === 'amplificador');
const clase3 = baseDeDatos.filter((x) => x.categoria === 'pedalera');
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(bajoPrecio);
console.log(clase);
console.log(clase2);
console.log(clase3);

console.log( baseDeDatos?.categoria || "no existe");
console.log( baseDeDatos?.nombre?.electronica || "no existe");

for(const producto of baseDeDatos){
   console.log(producto.nombre + " " + producto.precio + " " + producto.stock + " " + producto.categoria);
}

/*baseDeDatos.push( new Producto('Pedalera Zoom', 8, 30000, 'pedalera'));
baseDeDatos.push( new Producto('Amplificador Peavy', 6, 40000, 'amplificador'));
baseDeDatos.push( new Producto('Pedalera gt5', 6, 3000, 'pedalera'));
baseDeDatos.push( new Producto('Prs', 6, 90000, 'guitarra'));
baseDeDatos.push( new Producto('Pedalera Boss', 6, 98000, 'pedalera'))*/

let carrito = [];
const divisa = '$';
const DomItems = document.querySelector('#items');
const DomCarrito = document.querySelector('#carrito');
const DomTotal = document.querySelector('#total');
const DomBotonVaciar = document.querySelector('#boton-vaciar');
const DomCuotas = document.querySelector('#boton-comprar');
const DomSelectCuotas = document.querySelector('#selectCuotas');
//const DomBusqueda = document.querySelector('#buscar');
localStorage.setItem("productosAlmacenados", JSON.stringify(baseDeDatos));

function renderizarProductos() {
    baseDeDatos.forEach((info) => {

        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-3', 'mx-2', 'my-2');

        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        const miNodoTitle = document.createElement('h3');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;

        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);

        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;

        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'agregar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DomItems.appendChild(miNodo);
    });
}

const formulario = document.querySelector('#formulario');
const tecla = document.querySelector('#tecla');
const result = document.querySelector('#result')

/*const fil = () =>{
    //console.log(formulario.value);
    result.innerHTML  = '';
const texto = formulario.value.toLowerCase();

for(producto of baseDeDatos){
    let nombre = producto.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
        result.innerHTML += `
        <li>${producto.nombre} - valor:${producto.valor}</li>
        `
    }
}
if(result.innerHTML === ''){
    <li>Producto no encontrado...</li>
}
}

tecla.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar)*/

function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito();
    DomBotonVaciar.disabled = false;
    DomCuotas.disabled = false;
}

function renderizarCarrito() {

    if (carrito.length === 0) {
        DomCarrito.textContent = 'No hay productos en el carrito';

    carrito.length === 0 && console.log("no hay productos en el carrito");


    } else {
        DomCarrito.textContent = '';

        const opcion = document.createElement('option');
        opcion.value = 1;
        opcion.textContent = '3 cuota de ${total / 3 }'

        opcion.value = 2;
        opcion.textContent = '6 cuota de ${total / 6 }'

        DomSelectCuotas.appendChild(opcion);
    };

    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {

        const miItem = baseDeDatos.filter((itemBaseDatos) => {

            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {

            return itemId === item ? total += 1 : total;
        }, 0);

        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;

        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger',);
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);

        miNodo.appendChild(miBoton);
        DomCarrito.appendChild(miNodo);
    });

    DomTotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    renderizarCarrito();

    if (carrito.length === 0) {
        DomBotonVaciar.disabled = true;
        DomCuotas.disabled = true;
    }
}

function calcularTotal() {

    return carrito.reduce((total, item) => {

        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });

        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

function vaciarCarrito() {

    carrito = [];

    DomBotonVaciar.disabled = true;
    DomCuotas.disabled = true;

    renderizarCarrito();
}

DomBotonVaciar.addEventListener('click', vaciarCarrito);

renderizarProductos();
renderizarCarrito();