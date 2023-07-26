// Datos de ejemplo
let registros = [
  { rut: '11111111-1', nombre: 'Juan', apellido: 'Pérez', email: 'juan@example.com', contraseña: '123456' },
  { rut: '22222222-2', nombre: 'María', apellido: 'González', email: 'maria@example.com', contraseña: '789012' },
];

// Función para mostrar los registros en la tabla
function mostrarRegistros() {
  const table = document.getElementById('myTable');

  // Limpiar la tabla
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Llenar la tabla con los registros
  for (let i = 0; i < registros.length; i++) {
    const registro = registros[i];

    const row = table.insertRow();
    row.insertCell().textContent = registro.rut;
    row.insertCell().textContent = registro.nombre;
    row.insertCell().textContent = registro.apellido;
    row.insertCell().textContent = registro.email;
    row.insertCell().textContent = registro.contraseña;

    const accionesCell = row.insertCell();
    const editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.addEventListener('click', function() {
      editarRegistro(i);
    });
    accionesCell.appendChild(editarButton);

    const eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar';
    eliminarButton.addEventListener('click', function() {
      eliminarRegistro(i);
    });
    accionesCell.appendChild(eliminarButton);
  }
}

// Función para agregar un registro
function agregarRegistro(event) {
  event.preventDefault();

  const rut = document.getElementById('rut').value;
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contrasena').value;

  const registro = { rut, nombre, apellido, email, contraseña };
  registros.push(registro);

  mostrarRegistros();

  // Limpiar el formulario
  document.getElementById('myForm').reset();
}

// Función para editar un registro
function editarRegistro(index) {
  const registro = registros[index];

  document.getElementById('rut').value = registro.rut;
  document.getElementById('nombre').value = registro.nombre;
  document.getElementById('apellido').value = registro.apellido;
  document.getElementById('email').value = registro.email;
  document.getElementById('contrasena').value = registro.contraseña;

  registros.splice(index, 1);  // Eliminar el registro de la lista
  mostrarRegistros();
}

// Función para eliminar un registro
function eliminarRegistro(index) {
  registros.splice(index, 1);
  mostrarRegistros();
}

// Mostrar los registros al cargar la página
mostrarRegistros();

// Agregar el evento de submit al formulario
document.getElementById('myForm').addEventListener('submit', agregarRegistro);
