console.log(productos)


const contenedorProductos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("carrito");
const vaciarCarrito = document.getElementById("vaciarCarrito");
const compraTotal = document.getElementById("compraTotal")
const compras = document.getElementById("compras")
let carrito = [];


document.addEventListener(`DOMContentLoaded`, () => {
    if(localStorage.getItem(`carrito`)){
        carrito = JSON.parse(localStorage.getItem(`carrito`))
        actualizarCarrito();
    }
})



productos.forEach(element => {
    const divProductos = document.createElement("div");
    divProductos.classList.add("card", "d-flex", "col-xl-1.5");
    divProductos.innerHTML = `
                            <div>
                                <img src="${element.img}" class="card-img-top img-fluid py-3">
                                <div class="card-body">
                                    <h3 class="card-title"> ${element.nombre} </h3>
                                    <p class="card-text"> $${element.precio} </p>
                                    <button id="boton${element.id}" class="btn btn-outline-dark"> Agregar al Carrito </button>
                                </div>
                            </div>`;
    contenedorProductos.appendChild(divProductos);
    const boton = document.getElementById(`boton${element.id}`);
    boton.addEventListener("click", () => {
        agregarCarrito(element.id);
    })
});

const agregarCarrito = (id) => {
    const element = productos.find((producto) => producto.id === id)
    const producto = carrito.find((producto) => producto.id === id)
    if (producto) {
        producto.cantidad++
    } else {
        carrito.push(element)
    }
    actualizarCarrito()
    Toastify({
        text:`Producto agregado`,
        duration: 1000,
    }).showToast()
    
}




const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((element) => {
        const divCarrito = document.createElement("div")
        divCarrito.classList.add("card", "d-flex", "col-l-4", "m-2");
        divCarrito.innerHTML = `
                            <div>
                                <div class="card-body" style="width: 18rem">
                                    <h3 class="card-title"> ${element.nombre} </h3>
                                    <p class="card-text"> $${element.precio} </p>
                                    <p>Cantidad: ${element.cantidad} </p>
                                    <button onclick ="buy(${element.id})" class="btn btn-outline-success"> Comprar </button>
                                    <button onclick ="btn(${element.id})" class="btn btn-outline-danger"> Eliminar </button>           
                                </div>
                            </div>`;
        contenedorCarrito.appendChild(divCarrito)

        localStorage.setItem(`carrito`, JSON.stringify(carrito))
        calcular();
    })
}

const btn = (id) => {
    const producto = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf(producto)
    carrito.splice(indice, 1)
    actualizarCarrito()
    calcular();
    
    Toastify({
        text:`Producto eliminado del carrito`,
        duration: 3000,
        style: {
             background: "#b60d0d",           
        }
    }).showToast();
    
}

vaciarCarrito.addEventListener("click", () => {
    Swal.fire({
        title:"¿Quieres vaciar el carrito?",
        icon:"warning",
        confirmButtonText:"Vaciar",

        showCancelButton:true,
        cancelButtonText:"Cancelar",
    }).then((result) => {
        if(result.isConfirmed){
            Toastify({
                text:`Carrito Vaciado`,
                duration: 3000,
                position:`right`,
                gravity:`top`,
                background: `warning`,
            }).showToast()
            carrito.splice(0, carrito.length)
            actualizarCarrito()
            calcular()
            
        }
    })
    
    
    
})



const calcular = () => {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    compraTotal.innerHTML = total;
}


const buy = (id) => {
    const element = carrito.find((element) => element.id === id)
    Swal.fire({
        title:`Compra Realizada`,
        icon:`success`,
        confirmButtonText:`Confirmar`,
        width: `50%`,
        background:`#14830a`,
        timer: 10000,
    })
    btn(element.id)

}





    // contenedorCarrito.innerHTML = "";
    // const divCarrito = document.createElement("div")
    //     divCarrito.classList.add("card", "d-flex", "col-l-4", "m-2");
    //     divCarrito.innerHTML = `
    //                         <div style="background-color: rgb(25, 140, 50);">
    //                             <div class="card-body" style="width: 18rem">
    //                                 <h3 class="card-title"> ${element.nombre} </h3>
    //                                 <p class="card-text"> $${element.precio} </p>
    //                                 <p>Cantidad: ${element.cantidad} </p>
    //                                 <button onclick ="buy(${element.id})" class="btn btn-outline-success"> Comprar </button>
    //                                 <button onclick ="btn(${element.id})" class="btn btn-outline-danger"> Eliminar </button>           
    //                             </div>
    //                         </div>`;
    //     contenedorCarrito.appendChild(divCarrito)

    for(let letra of "hola"){
            console.log(letra); 
}
    for(let letra of "Nacho"){
    setTimeout( () =>{
        console.log(letra);
    },2000)
}
