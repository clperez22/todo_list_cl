import {data_todo_list}from "./data.js";

export function item_component (numero_tarea){
    
    let item = `
    <div class="todo_item">
        <span id="icono" class="ico">☑️</span>
            <p><del>
              ${data_todo_list[numero_tarea].mensaje}
            </del></p>
    </div>`;

    data_todo_list.estado = false;
    return item;

}
console.log(data_todo_list);