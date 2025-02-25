let nombreAmigo = []

function recolectarAmigo() {
    // Obtener el valor del campo de entrada
    let registraAmigo = document.getElementById('amigo').value

    // Validar que el campo no esté vacío
    if (registraAmigo.trim() === "") {
        // Mostrar un mensaje de error si el campo está vacío
        alert("Por favor, inserte un nombre.")
    } else {
        // Agregar el nombre al array si no está vacío
        nombreAmigo.push(registraAmigo)

        // Mostrar el array en la consola
        console.log(nombreAmigo)

        // Restablecer el campo de texto a una cadena vacía
        document.getElementById('amigo').value = ""

        // Actualizar la lista de nombres en el HTML
        mostrarAmigos()
    }
}

function mostrarAmigos() {
    // Obtener el elemento <ul> donde se mostrarán los nombres
    let listaAmigos = document.getElementById("listaAmigos")

    // Limpiar la lista antes de agregar nuevos elementos
    listaAmigos.innerHTML = ""

    // Recorrer el array nombreAmigo usando un bucle for
    for (let i = 0; i < nombreAmigo.length; i++) {
        // Crear un nuevo elemento <li>
        let elementoLista = document.createElement("li")

        // Asignar el nombre como contenido del <li>
        elementoLista.textContent = nombreAmigo[i]

        // Agregar el <li> a la lista <ul>
        listaAmigos.appendChild(elementoLista)
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (nombreAmigo.length === 0) {
        alert("No hay nombres en la lista. Por favor, añade al menos un amigo.")
        return
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombreAmigo.length)

    // Obtener el nombre sorteado
    let amigoSecreto = nombreAmigo[indiceAleatorio]

    // Mostrar el resultado en el HTML
    let resultadoElemento = document.getElementById("resultado")
    resultadoElemento.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`
}

// Por XhrisGG