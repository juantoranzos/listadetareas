
function añadirLista() {
    let lista = document.getElementById("newTask").value;
    if (lista) {
        let taskList = document.getElementById("taskList");
        let newTask = document.createElement("li");
        newTask.className = "list-group-item";
        newTask.innerHTML = lista + ' <button class="btn btn-danger btn-xs" onclick="removeTask(this)">Eliminar</button>';
        taskList.appendChild(newTask);
        document.getElementById("newTask").value = "";
    }
}

function removeTask(button) {
    let lista = button.parentNode;
    lista.parentNode.removeChild(lista);
}
