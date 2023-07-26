var selectedRow = null;

function showAlert(message, classrut){
    const div = document.createElement("div");
    div.classrut = 'alert alert-$(classrut)';

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//clear fields

function clearFields(){
    document.querySelector("#rut").value = "";
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#roll").value = "";
}

// all data

document.querySelector("#cliente-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const rut = document.querySelector("#rut").value;
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#email").value;
    const roll = document.querySelector("#roll").value;

    //validar
    if (rut == "" - nombre == "" - apellido == "" - email == "" - roll == ""){
        showAlert("por favor completar todos los campos")
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${rut}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${email}</td>
            <td>${roll}</td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("cliente añadido", "success")
        }
        else{
            selectedRow.children[0].textcontent = rut;
            selectedRow.children[1].textcontent = nombre;
            selectedRow.children[2].textcontent = apellido;
            selectedRow.children[3].textcontent = email;
            selectedRow.children[4].textcontent = roll;
            selectedRow = null;
            showAlert("cliente editado", "info");
        }

        clearFields();
    }
});

// edit

document.querySelector("#cliente-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.container("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#rut").value = selectedRow.children[0].textcontent = rut;
        document.querySelector("#nombre").value = selectedRow.children[1].textcontent = nombre;
        document.querySelector("#apellido").value = selectedRow.children[2].textcontent = apellido;
        document.querySelector("#email").value = selectedRow.children[3].textcontent = email;
        document.querySelector("#roll").value = selectedRow.children[4].textcontent = roll;
    }
});

// delete data

document.querySelector("#cliente-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.container("delete")){
        target.parentElement.parentElement.remove();
        showAlert("cliente eliminado", "danger");
    }
});