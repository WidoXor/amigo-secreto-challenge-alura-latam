let nombreAmigos = [];

function agregarAmigo() {
    // Obtiene valor de input id amigo
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Debes ingresar un Nombre válido.');
    }
    nombreAmigos.push(amigo);
    muestraAmigosInscritos('ul#listaAmigos', nombreAmigos);
    
    // Limpia input para nuevo ingreso
    limpiaInput();
}

function muestraAmigosInscritos(elemento, amigos) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = '';

    // Listado usando For
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        elementoHTML.appendChild(li);
    }
}

function limpiaInput() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    let indiceSorteado = Math.floor(Math.random() * nombreAmigos.length);
    let amigoSecreto = nombreAmigos[indiceSorteado];
    let textListaAmigos = document.querySelector('ul#listaAmigos');
    textListaAmigos.innerHTML = '';
    let textResultado = document.querySelector('ul#resultado');
    textResultado.innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;
    return amigoSecreto;
}