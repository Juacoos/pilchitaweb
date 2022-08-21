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
                showCancelButton: false,
                showDenyButton: true,
                confirmButtonText: "Confirmar",
                denyButtonText: "Cancelar",
                confirmButtonColor:'#FCA311',
                width: 400,
                padding: '3em',
                color: '#FCA311'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Comprado', '', 'success')
                }else if (result.isDenied) {
                    Swal.fire(`Cancelada la compra de ${product.nombre}`, '', 'warning')
                }
            })
        }) //botonComprar
    }) //data.forEach

    const agregarAlCarrito = (prodId) => {
        const prodAgregar = data.find((prod) => prod.id === prodId);
        // Alerta del carrito
        Swal.fire({
            title: `¿Agregar ${prodAgregar.nombre} al carrito?`,
            icon: "success",
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: "Aceptar",
            denyButtonText: "Cancelar",
            showCancelButton: false,
            /* cancelButtonText: "Salir",  */
            confirmButtonColor:'#FCA311',
            width: 400,
            padding: '3em',
            color: '#FCA311'
        }).then((result) => {
            if (result.isConfirmed) {
                carrito.push(prodAgregar);
                totalPrecioCarrito = carrito.reduce((acumulador,elementoLista) => acumulador + elementoLista.precio, 0);
                actualizarCarrito();
                Swal.fire({title:`Agregaste ${prodAgregar.nombre}`,text:`El total del carrito es de $${totalPrecioCarrito} chelines`,icon: "success"})
            } else if (result.isDenied) {
                Swal.fire(`Cancelado el agregado de ${prodAgregar.nombre}`, '', 'warning')
            }
        })
        
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
    carrito.length == 0 ? totalPrecioCarrito = 0 : totalPrecioCarrito; // Para que quede en 0 el precio cuando se vacie
    totalCarrito.innerText = `Total: $${totalPrecioCarrito}`;
    localStorage.setItem('carrito',JSON.stringify(carrito))
}