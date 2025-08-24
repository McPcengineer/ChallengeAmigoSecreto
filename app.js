// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array 
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserta un nombre.");
    return;
  }
// Agregar amigo al array
  amigos.push(nombre); 
  input.value = "";    
  actualizarLista();   
}

// Actualizar la lista en el DOM
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
// Mostrar cada amigo en la lista
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Sorteo 
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos a un amigo.");
    return;
  }
// Selección aleatoria
  const indice = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo secreto es: <b>${amigos[indice]}</b>`;
}
