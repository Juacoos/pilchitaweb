class Producto{
    constructor(id,idgrid,idCarrito,idComprar,nombre,img,precio){
        this.id = id,
        this.idCarrito = idCarrito,
        this.idComprar = idComprar,
        this.idgrid = idgrid,
        this.nombre = nombre,
        this.img = img,
        this.precio = precio
    }
}

const listaProductos = [];

listaProductos.push(new Producto(1,"prod__uno","carrito1","comprar1","Jean de Mujer",`<img src="../recursos/jean-mujer.jpg" alt="jean de mujer" class="imgproducto">`,700));
listaProductos.push(new Producto(2,"prod_dos","carrito2","comprar2","Jean de Hombre",`<img src="../recursos/jean-hombre.jpg" alt="jean de hombre" class="imgproducto">`,800));
listaProductos.push(new Producto(3,"prod__tres","carrito3","comprar3","Camisa Negra",`<img src="../recursos/camisa-negra.jpg" alt="camisa negra" class="imgproducto">`,350));
listaProductos.push(new Producto(4,"prod__cuatro","carrito4","comprar4","Campera Marron",`<img src="../recursos/campera-marron.jpg" alt="campera marron" class="imgproducto">`,1100));
listaProductos.push(new Producto(5,"prod__cinco","carrito5","comprar5","Outfit Nashe",`<img src="../recursos/outfit-manso.jpg" alt="outfit fachero" class="imgproducto">`,1500));
listaProductos.push(new Producto(6,"prod__seis","carrito6","comprar6","Remera Blanca",`<img src="../recursos/remera-blanca.jpg" alt="remera blanca" class="imgproducto">`,250)); 
listaProductos.push(new Producto(7,"prod__siete","carrito7","comprar7","Remera Blanca",`<img src="../recursos/remera-blanca.jpg" alt="remera blanca" class="imgproducto">`,250)); 
listaProductos.push(new Producto(8,"prod__ocho","carrito8","comprar8","Remera Blanca",`<img src="../recursos/jean-hombre.jpg" alt="remera blanca" class="imgproducto">`,250)); 

containerProd = document.getElementById("prod");

for(let product of listaProductos){
    let productoTarjeta = document.createElement("div");
    productoTarjeta.innerHTML = `<p class="prod__titulo">${product.nombre}</p>
                                ${product.img}
                                <p>Precio: $ ${product.precio} chelines</p>
                                <button class="btn" id="${product.idComprar}">Comprar</button>
                                <button class="btn" id="${product.idCarrito}">Agregar al carrito</button>`
    productoTarjeta.className = "prod";
    productoTarjeta.classList.add(`${product.idgrid}`);
    containerProd.append(productoTarjeta);


    const botonCarrito = document.getElementById(`${product.idCarrito}`);
    botonCarrito.addEventListener("click",() =>{
        agregarAlCarrito(product.id);
    })

    const botonComprar = document.getElementById(`${product.idComprar}`);
    botonComprar.addEventListener("click",() => {
        alert(`Compraste el producto ${product.nombre} a $${product.precio} chelines`)
    })
}

let carrito = [];
let totalPrecioCarrito = [];
let totalPrecioCarritoS = [];
const agregarAlCarrito = (prodId) => {
    /* C??digo original SIN localStorage */
    const prodAgregar = listaProductos.find((prod) => prod.id === prodId);
    carrito.push(prodAgregar);
    totalPrecioCarrito = carrito.reduce((acumulador,elementoLista) => acumulador + elementoLista.precio, 0);
    alert(`Agregaste el producto ${prodAgregar.nombre} a $${prodAgregar.precio} chelines. El total del carrito es: $${totalPrecioCarrito} chelines`);
    
    //localStorage 
    //guardo los productos del carrito en "carritoProductos" en localStorage
    let carritoStorage = JSON.parse(localStorage.getItem("carritoProductos"));
    localStorage.setItem("carritoProductos",JSON.stringify(carritoStorage.concat(carrito)));
    
    
    //Ac?? hago el precio total del carrito directamente guardado en el localStorage
    let totalPrecioCarritoS = carritoStorage.reduce((acumulador,elementoLista) => acumulador + elementoLista.precio, 0);
    localStorage.setItem("precioCarrito",JSON.stringify(totalPrecioCarritoS));
    //Muestro por consola cada producto agregado y tambi??n el total del carrito
    console.log(`Agregaste el producto ${prodAgregar.nombre} a $${prodAgregar.precio} chelines. El total del carrito es: $${totalPrecioCarritoS} chelines`);
}

//Traigo a carritoStorage los elementos del carrito almacenados en localStorage para mostrar cuales quedaron almacenados
//con su nombre
let carritoStorage = JSON.parse(localStorage.getItem("carritoProductos")); 
nombresCarritoStorage = [];
carritoStorage.map(el => {
    nombresCarritoStorage.push(el.nombre)
})

//Traigo a precioStorage el precio total del carrito almacenado en localStorage para mostrarlo
let precioStorage = JSON.parse(localStorage.getItem("precioCarrito"));

//Con mostrarCarritoStorage se muestra el nombre de los productos del carrito y el total  cuando se recargue la p??gina
const mostrarCarritoStorage = () => {
    console.log("Productos en el carrito(localStorage anterior): " + nombresCarritoStorage.join(", "));
    console.log(`Precio del carrito(localStorage anterior): $${precioStorage} chelines`);
}
mostrarCarritoStorage();

const comprarProducto = (prodId) => {
    prodComprar = listaProductos.find((prod) => prod.id === prodId);
}



//JSON.stringify(value)
//JSON.parse(value)

//
//ELIMINAR ELEMENTOS "SPLICE"







// find, map, filter

// No tocar
let containerUser = document.getElementById("us");
let user;
let userStorage = sessionStorage.getItem("usuario");
if(userStorage){
    user = userStorage;
    /* let response = `Bienvenido ${user}`;
    alert(response); */
    let saludoTarjeta = document.createElement("h5");
    saludoTarjeta.innerHTML = `Bienvenido ${user}`;
    containerUser.append(saludoTarjeta);
}else{
    user = prompt("Ingrese su nombre");
    sessionStorage.setItem("usuario", user);
    let saludoTarjeta = document.createElement("h5");
    saludoTarjeta.innerHTML = `Bienvenido ${user}`;
    containerUser.append(saludoTarjeta);
}
//No tocar
