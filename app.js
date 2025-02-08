let nombresAmigos = [];
let sorteados = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Debes escribir un nombre');
        return;
    } else if (nombresAmigos.includes(amigo)) {
        alert(`${amigo} ya fue agregado anteriomente, por favor agrega otro nombre`)
    } else {
        let amigo = document.getElementById('amigo').value;
        let listaAmigos = document.getElementById('listaAmigos');
        nombresAmigos.push(amigo);
        document.getElementById('amigo').value = ''
        listaAmigos.innerHTML = `${nombresAmigos.map(amigo => `<li>${amigo}</li>`).join('')}`;
        console.log(nombresAmigos);
    }
}

function sortearAmigo() {
    let amigoSorteado = nombresAmigos[Math.floor(Math.random() * nombresAmigos.length)];
    if (sorteados.includes(amigoSorteado)) {
        if (sorteados.length === nombresAmigos.length) {
            document.getElementById('resultado').innerHTML = 'Todos los nombres sorteados'
        } else {
            sortearAmigo()
        }
    } else {
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es:${amigoSorteado}`;
        document.getElementById('listaAmigos').setAttribute('style', 'display: none');
        sorteados.push(amigoSorteado)
        console.log(amigoSorteado);
    }
}
/* let nombreAmigos = [];
let sorteados = []

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}
 
//Crea una función que recorra el array y actualice la lista
function amigosAgregados() {
    let listaAmigos = document.getElementById('listaAmigos'); // toma el elemento HTML
    listaAmigos.innerHTML = ''; // Limpia la lista antes de volver a llenarla
 
    // Recorre la lista y agrega cada amigo como un <li>
    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement('li'); // Crea un elemento <li>
        li.textContent = nombreAmigos[i]; // Le asigna el nombre del amigo
        listaAmigos.appendChild(li); // Agrega el <li> a la lista
    }
}
 
function agregarAmigo() {
    let amigoDeUsuario = document.getElementById('amigo').value.trim(); // Captura y limpia espacios del nombre
 
    // Validaciones
    if (amigoDeUsuario === '') {
        alert('Por favor, inserte un nombre.');
    } else if (nombreAmigos.includes(amigoDeUsuario)) {
        alert('Ese nombre ya fue ingresado, por favor indica otro nombre');
    } else {
        nombreAmigos.push(amigoDeUsuario); // Agrega el nombre al array
        amigosAgregados(); // Actualiza la lista en el HTML
        limpiarCaja(); // Limpia la caja de texto
    }
}
 
function sortearAmigo() {
    if (nombreAmigos.length === 0) { // Mejor comparación para arrays vacíos
        alert('No hay amigos para sortear, por favor ingresa amigos');
    } else {
        let amigoSecreto = nombreAmigos[Math.floor(Math.random() * nombreAmigos.length)];
        if(sorteados.includes(amigoSecreto)){
            sortearAmigo()
        }else{
            sorteados.push(amigoSecreto)
            document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: <strong>${amigoSecreto}</strong>`;
        }
    }
}
 */