// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];
 
// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtener el campo de texto
    const nombre = input.value.trim(); // Obtener el valor y eliminar espacios en blanco
 
    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Ingrese un nombre válido"); // Mostrar alerta si el campo está vacío
        return; // Salir de la función
    }
 
    // Agregar el nombre al array
    amigos.push(nombre);
 
    // Limpiar el campo de texto
    input.value = "";
 
    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}
 
// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos"); // Obtener el elemento <ul>
    listaAmigos.innerHTML = ""; // Limpiar la lista actual
 
    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach((amigo) => {
        const li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo al <li>
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}
 
// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos dos amigos en la lista
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return; // Salir de la función
    }
 
    // Seleccionar un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio]; // Obtener el nombre del amigo sorteado
 
    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
}