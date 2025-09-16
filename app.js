// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = []

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = "";

    for (let i = 0; i < arrayNombres.length; i++) {
        let li = document.createElement("li");

        li.textContent = arrayNombres[i];

        listaAmigos.appendChild(li);
    }
}

function agregarAmigo() {
    let elementoNombre = document.getElementById('amigo');
    let nombre = elementoNombre.value;

    if (nombre == '') {
        alert('El nombre no puede ser vacio')
    } else {
        arrayNombres.push(nombre);
        mostrarAmigos();
        elementoNombre.value = '';
    }
}

function sortearAmigo() {

    if (arrayNombres.length === 0) {
        alert('Primero debes agregar un amigo para sortear')
        return;
    }
    let sorteo = Math.floor(Math.random() * arrayNombres.length);
    let sortearAmigoSecreto = arrayNombres[sorteo];

    let valorSorteo = document.getElementById('resultado');

    valorSorteo.innerHTML = `<li> Tu amgido secreto es: ${sortearAmigoSecreto}</li>`;
}