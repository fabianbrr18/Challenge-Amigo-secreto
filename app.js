// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = []
function almacenarNombres(nombre) {
    arrayNombres.push(nombre);
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = arrayNombres.map(amigo => `<li>${amigo}</li>`).join('');

}
function agregarAmigo() {
    let elementoNombre = document.getElementById('amigo');
    let nombre = elementoNombre.value;

    if (nombre == '') {
        alert('El nombre no puede ser vacio')
    } else {
        almacenarNombres(nombre);
        elementoNombre.value = '';
    }
}

function sortearAmigo() {
    let sorteo = Math.floor(Math.random() * arrayNombres.length);
    let sortearAmigoSecreto = arrayNombres[sorteo];
    console.log(sortearAmigoSecreto);
}