//LIBRERIA
import { imprimir_todos } from "./cargar-los-todos.js";
import { data_todo_list } from "./data.js";
let caja_de_todos = document.querySelector(".todo_list")
imprimir_todos();

function puente(){
  let mensaje  = document.querySelector(".entrada").value;
  nueva_tarea(mensaje);
  
}
function ol(){
  let tachado = document.querySelector(".icono").value;
  nueva_tarea(tachado)
}


//CREAR UNA NUEVA TAREAs

function nueva_tarea (mensaje){
    data_todo_list.push(
         {
             id: "4",
             mensaje: mensaje,
             estado: true
           }
    )
    caja_de_todos.innerHTML= " ";
    imprimir_todos();

    document.querySelector(".modal").classList.remove("Activar"); 
    document.querySelector(".entrada").value = " ";

 }
 document.querySelector(".btn-tarea").addEventListener("click",puente);

 


/*Caja de texto */
function blanco(){
  let espacio = document.querySelector(".entrada").value= " ";
  (espacio);
}

 document.querySelector(".cerrar").addEventListener("click",blanco);
 

 /*tachado ***********************************************/

 let tch = document.querySelectorAll(".ico");

 tch.forEach((tch, nueva_tarea)=>{
  tch.addEventListener("click", tch)
 })

 /*function pueba(){
  let tachado = document.querySelector(".tachar").value= " ";
  (tachado)
 }
 document.querySelector(".todo_list").addEventListener("click", pueba);
 
 */
 