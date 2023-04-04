/**
 Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.
 */
function añadirLista() {

    let lista = document.getElementById("nuevaTarea").value;

    if (lista) {

        let listaDeTareas = document.getElementById("listaDeTareas");

        let nuevaTarea = document.createElement("li");

        nuevaTarea.className = "list-group-item";

        nuevaTarea.innerHTML = lista + ' <button class="btn btn-danger btn-xs" onclick="sacarTarea(this)">Eliminar</button>';

        listaDeTareas.appendChild(nuevaTarea);
        document.getElementById("nuevaTarea").value = "";
    }
}

function sacarTarea(button) {
    let lista = button.parentNode;
    lista.parentNode.removeChild(lista);
}
