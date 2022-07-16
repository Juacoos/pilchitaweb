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
}




let carrito = [];
let totalPrecio = [];
const sumarCarrito = () => {
}
function btnComprar(){
    alert("Compraste el producto");
}
function btnCarrito(){
    alert("Agregaste el producto al carrito");
}

// Botones de comprar
let comprar1 = document.getElementById("comprar1");
let comprar2 = document.getElementById("comprar2");
let comprar3 = document.getElementById("comprar3");
let comprar4 = document.getElementById("comprar4");
let comprar5 = document.getElementById("comprar5");
let comprar6 = document.getElementById("comprar6");
let comprar7 = document.getElementById("comprar7");
let comprar8 = document.getElementById("comprar8");
comprar1.addEventListener("click",btnComprar);
comprar2.addEventListener("click",btnComprar);
comprar3.addEventListener("click",btnComprar);
comprar4.addEventListener("click",btnComprar); 
comprar5.addEventListener("click",btnComprar);
comprar6.addEventListener("click",btnComprar);
comprar7.addEventListener("click",btnComprar); 
comprar8.addEventListener("click",btnComprar);
//botones de carrito
let carrito1 = document.getElementById("carrito1");
let carrito2 = document.getElementById("carrito2");
let carrito3 = document.getElementById("carrito3");
let carrito4 = document.getElementById("carrito4");
let carrito5 = document.getElementById("carrito5");
let carrito6 = document.getElementById("carrito6");
let carrito7 = document.getElementById("carrito7");
let carrito8 = document.getElementById("carrito8");
carrito1.addEventListener("click",btnCarrito);
carrito2.addEventListener("click",btnCarrito);
carrito3.addEventListener("click",btnCarrito);
carrito4.addEventListener("click",btnCarrito); 
carrito5.addEventListener("click",btnCarrito);
carrito6.addEventListener("click",btnCarrito);
carrito7.addEventListener("click",btnCarrito); 
carrito8.addEventListener("click",btnCarrito);
