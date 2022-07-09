class Producto{
    constructor(nombre,precio,envioGratis){
        this.nombre = nombre,
        this.precio = precio,
        this.envioGratis = envioGratis,
        this.vendido = false
    }
    vender(){
        this.vendido = true;
    }
}

const listaProd = [];

listaProd.push(new Producto("Jean",10000,true));
listaProd.push(new Producto("Camisa Negra",6500,false));
listaProd.push(new Producto("Campera",10500,true));
listaProd.push(new Producto("Campera de Jean",11500,false));
listaProd.push(new Producto("Remera Blanca",6500,true));

let productosNombre = [];

listaProd.forEach(element => {
    productosNombre.push(element.nombre);
});
let productosMinuscula = [];
productosNombre.forEach(element => {
    productosMinuscula.push(element.toLowerCase());
})


const detalleProductos = () => {
    alert("Productos disponibles: " + productosNombre.join(", "));
}
detalleProductos();

let carrito = [];
let totalPrecio = [];
const sumarCarrito = () => {
    let prodSumar = (prompt("Seleccione producto a comprar:")).toLowerCase();
    let indexProd = productosMinuscula.indexOf(prodSumar);
    let prodEncontrado = listaProd[indexProd];
    carrito.push(prodEncontrado);
    totalPrecio = carrito.reduce((acumulador,elementoLista) => acumulador + elementoLista.precio, 0);
    let volverAComprar = prompt("¿Desea seguir comprando? 'si/no'");
    if(volverAComprar == "si"){
        sumarCarrito();
    } else {alert("Total de su carrito: " + totalPrecio);}
}
sumarCarrito();