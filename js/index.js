//LIBRERIA
import { data_todo_list } from "./data.js";
import {item_component} from "./todo_item.js";

//FUNCION PARA IMPRIMIR A LISTA DE TAREAS
let caja_de_todos = document.querySelector(".todo_list")

function imprimir_todos(){
    
    data_todo_list.forEach((element, indice) => {

        let todo = document.createElement("div");

        todo.innerHTML= item_component(indice);

        caja_de_todos.appendChild(todo)

    });

}
imprimir_todos();


//CREAR UNA NUEVA TAREA
function nueva_tarea (){
   data_todo_list.push(
        {
            id: "4",
            mensaje: "Comer una fruta",
            estado: true
          }
   );
   caja_de_todos.innerHTML= "";
   imprimir_todos();
}
let boton = document.querySelector("#btn-todo");
boton.addEventListener("click", nueva_tarea);

