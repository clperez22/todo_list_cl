function modal(){
    document.querySelector(".modal").classList.add("Activar") //busca el objeto que se llama modal y le agregar activar para que sea visible
}

let boton = document.querySelector("#bt-todo");
boton.addEventListener("click", modal);




/*para que se cierre la ventana*/
function cerrarv(){
    document.querySelector(".modal").classList.remove("Activar") //busca el objeto que se llama modal y le agregar activar para que sea visible
}

let cerrar = document.querySelector(".cerrar");
cerrar.addEventListener("click", cerrarv);











