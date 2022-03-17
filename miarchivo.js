/*function Producto (nombre, stock, precio, categoria){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
 }
 
 const productoA = new Producto('Cort stratocaster', 10, 75800, 'guitarra', "./imagenes/descarga(1).jpg");
 const productoB = new Producto('Fender telecarter', 15, 180000, 'guitarra', './imagenes/images(2).jpg');
 const productoC = new Producto('Gibson lp', 3, 450000, 'guitarra');
 const productoD = new Producto('Ltd', 18, 120000, 'guitarra');
 const productoF = new Producto('Amplificador Marshall', 20, 125000, 'amplificador');
 const productoG = new Producto('Head rush', 60, 120000, 'pedalera');
 const productoH = new Producto('Amplificador Fender 60ac', 26, 90000, 'amplificador');
 const productoI = new Producto('Amplificador Fender 100w', 30, 140000, 'amplificador');
 
 const baseDeDatos = [productoA, productoB, productoC, productoD, productoF, productoG, productoH, productoI];*/
 
/*const baseDeDatos = [{ id: 1, nombre: "Cort stratotaster", precio: 75800, stock: 10, imagen:'./imagenes/descarga(1).jpg' },
{ id: 2, nombre: "Fender telecaster", precio: 180000, stock: 15, },
{ id: 3, nombre: "Gibson LP", precio: 450000, stock: 3,   }];*/

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


/*const resultado1 = listadoProductos.filter((x) => x.nombre.includes('Fender'));
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
console.log(clase3);*/

/*for(const producto of listadoProductos){
   console.log(producto.nombre + " " + producto.precio + " " + producto.stock + " " + producto.categoria);
}*/

/*listadoProductos.push( new Producto('Pedalera Zoom', 8, 30000, 'pedalera'));
listadoProductos.push( new Producto('Amplificador Peavy', 6, 40000, 'amplificador'));
listadoProductos.push( new Producto('Pedalera gt5', 6, 3000, 'pedalera'));
listadoProductos.push( new Producto('Prs', 6, 90000, 'guitarra'));
listadoProductos.push( new Producto('Pedalera Boss', 6, 98000, 'pedalera'));*/

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMcuotas = document.querySelector('#boton-comprar');
const DOMSelectCuotas = document.querySelector('#selectCuotas');
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
        DOMitems.appendChild(miNodo);
    });
}

function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito();
    DOMbotonVaciar.disabled = false;
    DOMcuotas.disabled = false;
}

function renderizarCarrito() {

    if (carrito.length === 0) {
        DOMcarrito.textContent = 'No hay productos en el carrito';

    } else {
        DOMcarrito.textContent = '';

        const opcion = document.createElement('option');
        opcion.value = 1;
        opcion.textContent = '3 cuota de ${total / 3 }'

        opcion.value = 2;
        opcion.textContent = '6 cuota de ${total / 6 }'

        DOMSelectCuotas.appendChild(opcion);
    }

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
        DOMcarrito.appendChild(miNodo);
    });

    DOMtotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    renderizarCarrito();

    if (carrito.length === 0) {
        DOMbotonVaciar.disabled = true;
        DOMcuotas.disabled = true;
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

    DOMbotonVaciar.disabled = true;
    DOMcuotas.disabled = true;

    renderizarCarrito();
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);

renderizarProductos();
renderizarCarrito();