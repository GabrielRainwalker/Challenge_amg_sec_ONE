//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteados = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (!nome) {
    alert("Digite um nome válido.");
    return;
  }
  if (amigos.includes(nome) || sorteados.includes(nome)) {
    alert("Esse nome já foi adicionado, troque por outro nome ou adicione sobrenome");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
  input.focus();

}

function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  amigos.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function atualizarListaSorteados() {
    const lista = document.getElementById('resultado');
    lista.innerHTML = "";

    sorteados.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function resetarSorteio() {
    amigos = [];
    sorteados = [];
    atualizarLista();
    atualizarListaSorteados();
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("Todos os nomes foram sorteados, a lista será resetada");
    resetarSorteio();
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos.splice(indiceAleatorio, 1)[0];
  sorteados.push(nomeSorteado);

  alert(`Nome sorteado: ${nomeSorteado}`);

  atualizarLista();
  atualizarListaSorteados();
}