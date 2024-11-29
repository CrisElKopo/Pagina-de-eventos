console.log("a")

// Array para almacenar los inputs creados
let inputsCreados = [];

// Función para manejar la cantidad de inputs
function dynamicInputs(quantity) {


    let inputsContainer = document.getElementsByClassName("inputs")[0];

    // Eliminar los inputs adicionales si la cantidad disminuye
    while ((inputsCreados.length/2) > quantity) {
        for (i=0; i<2; i++){
            const inputToRemove = inputsCreados.pop(); // Eliminar el último input del array
        inputsContainer.removeChild(inputToRemove); // Eliminar el input del DOM
        }
    }

    // Crear nuevos inputs si la cantidad aumenta
    while ((inputsCreados.length/2) < quantity) {
        const nuevoInput = crearInput(inputsContainer, "text", "inputPersona", `Nombres Persona ${(inputsCreados.length / 2) + 1}`);
        inputsCreados.push(nuevoInput); // Agregar el nuevo input al array

        const nuevoInput2 = crearInput(inputsContainer, "text", "inputPersona", `Apellidos Persona ${(inputsCreados.length / 2) + 0.5}`);
        inputsCreados.push(nuevoInput2); // Agregar el nuevo input al array
    }

    console.log(quantity); // Para depuración
}

// Función para crear un input dentro de un elemento padre
function crearInput(padre, tipo, clases, nombre, placeholder) {
    // Crear el contenedor <div class="input fullwidth">
    const div = document.createElement('div');
    div.className = 'input';

    // Crear el <label>
    const label = document.createElement('label');
    label.setAttribute('for', nombre); // El 'for' se asocia al nombre del input
    label.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1); // Usamos el nombre como texto del label, capitalizado
    if (clases) label.className = clases;

    // Crear el <input>
    const input = document.createElement('input');
    input.type = tipo;
    input.name = nombre;
    input.placeholder = placeholder || ''; // Si se pasa un placeholder, lo usa, si no, queda vacío
    input.id = nombre.toLowerCase(); // Usamos el nombre en minúsculas como id del input
    if (clases) input.className = clases;

    // Añadir el label y el input al div
    div.appendChild(label);
    div.appendChild(input);

    // Agregar el div al padre
    padre.appendChild(div);

    // Devolver el div creado para tener acceso a él
    return div;
}

