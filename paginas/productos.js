containerProd = document.getElementById("prod");

const obtenerProductos = async () =>{
    const response = await fetch('productos.json');
    const data = await response.json();
    data.forEach((product) => {
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
            // Alerta de compra 
            //alert(`Compraste el producto ${product.nombre} a $${product.precio} chelines`)
            Swal.fire({
                title: `¿Comprar ${product.nombre}?`,
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
                confirmButtonColor:'#FCA311',
                width: 400,
                padding: '3em',
                color: '#FCA311'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire('Comprado', '', 'success')
                }
            })
        }) //botonComprar
    }) //data.forEach

    const agregarAlCarrito = (prodId) => {
        const prodAgregar = data.find((prod) => prod.id === prodId);
        carrito.push(prodAgregar);
    
        
        totalPrecioCarrito = carrito.reduce((acumulador,elementoLista) => acumulador + elementoLista.precio, 0);
        
        // Alerta del carrito
        Swal.fire({
            title: `Agregaste ${prodAgregar.nombre} al carrito!`,
            text: `El total del carrito es $${totalPrecioCarrito} chelines`,
            icon: "success",
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: "Ver carrito",
            denyButtonText: "Cancelar",
            cancelButtonText: "Salir",
            confirmButtonColor:'#FCA311',
            width: 400,
            padding: '3em',
            color: '#FCA311'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire('Yendo al carrito', '', 'success')
            } else if (result.isDenied) {
            Swal.fire('Producto eliminado del carrito', '', 'warning')
            }
        })
        actualizarCarrito();
    }

} //obtenerProductos

obtenerProductos();



let carrito = [];





document.addEventListener("DOMContentLoaded", () =>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }
})


let totalPrecioCarrito = [];
let totalPrecioCarritoS = [];

//Agregar al Carrito
//--------------------------------------

const eliminarDelCarrito = (prodId) => {
    const prodEliminar = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(prodEliminar);
    carrito.splice(indice,1)
    actualizarCarrito();
}


const comprarProducto = (prodId) => {
    prodComprar = data.find((prod) => prod.id === prodId);
}


const carritoContenedor = document.getElementById("carrito-contenedor");

const botonVaciar = document.getElementById("boton-vaciar");
botonVaciar.addEventListener("click", () =>{
    carrito = [];
    actualizarCarrito();
})
const contadorCarrito = document.getElementById("contador-carrito");
const totalCarrito = document.getElementById("total-carrito");

const actualizarCarrito = () => {
    carritoContenedor.innerHTML = "";

    carrito.forEach((prod) =>{
        const tr = document.createElement('tr');
        tr.className = ('trprop');
        tr.innerHTML = `
        <td class="tdprop"><img src="${prod.carritoImg}" class="imgcarrito"></td>
        <td class="tdprop">${prod.nombre}</td>
        <td class="tdprop">$${prod.precio}</td>
        <td class="tdprop"><button class="btn" id="${prod.idComprar}">Comprar</button></td>
        `
        
        carritoContenedor.appendChild(tr);
    
        localStorage.setItem('carrito',JSON.stringify(carrito))
    });
    contadorCarrito.innerText = `Cantidad: ${carrito.length}`;
    totalCarrito.innerText = `Total: $${totalPrecioCarrito}`;
    localStorage.setItem('carrito',JSON.stringify(carrito))
}