let nombresAmigos = [];

function agregarAmigo() {
    if (document.getElementById('amigo').value === '') {
        alert('Debes escribir un nombre');
        return;
    } else {

        let amigo = document.getElementById('amigo').value;
        let listaAmigos = document.getElementById('listaAmigos');
        nombresAmigos.push(amigo);
        document.getElementById('amigo').value = ''
        listaAmigos.innerHTML = `${nombresAmigos.map(amigo => `<li>${amigo}</li>`).join('')}`;

        console.log(nombresAmigos);
    }
}

function sortearAmigo(){
    let amigoSorteado = nombresAmigos[Math.floor(Math.random() * nombresAmigos.length)];
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es:${amigoSorteado}`;
    document.getElementById('listaAmigos').setAttribute('style', 'display: none');
    console.log(amigoSorteado);
}