let arrayNombres = [];

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    arrayNombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function agregarAmigo() {
    let elementoNombre = document.getElementById('amigo');
    let nombre = elementoNombre.value.trim();

    if (nombre === '') {
        mostrarPopup("El nombre no puede estar vacío", true);
    } else if (arrayNombres.includes(nombre)) {
        mostrarPopup("El nombre ya existe en la lista", true)
        elementoNombre.value = '';
    } else {
        arrayNombres.push(nombre);
        mostrarAmigos();
        elementoNombre.value = '';
    }
}

function sortearAmigo() {
    if (arrayNombres.length === 0) {
        mostrarPopup("Primero debes agregar un amigo para sortear", true);
        return;
    }
    let sorteo = Math.floor(Math.random() * arrayNombres.length);
    let sortearAmigoSecreto = arrayNombres[sorteo];

    mostrarPopup(`Tu amigo secreto es: ${sortearAmigoSecreto}`);

    arrayNombres = [];
    mostrarAmigos();
    document.getElementById('amigo').value = '';
}

function mostrarPopup(mensaje, error = false) {
    let popup = document.getElementById("resultado");
    let texto = document.getElementById("popupMensaje");

    texto.textContent = mensaje;
    texto.style.color = error ? "red" : "#05DF05";

    popup.style.display = "flex";
    popup.setAttribute("aria-hidden", "false");
}

function cerrarPopup() {
    let popup = document.getElementById("resultado");
    popup.style.display = "none";
    popup.setAttribute("aria-hidden", "true");
}

document.getElementById("toggleDark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const btn = document.getElementById("toggleDark");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
