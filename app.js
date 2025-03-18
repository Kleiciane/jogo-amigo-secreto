//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
        input.focus();
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let embaralhado = [...amigos].sort(() => Math.random() - 0.5);
    
    let resultado = {};
    for (let i = 0; i < embaralhado.length; i++) {
        let sorteado = (i === embaralhado.length - 1) ? embaralhado[0] : embaralhado[i + 1];
        resultado[embaralhado[i]] = sorteado;
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    for (let amigo in resultado) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${resultado[amigo]}`;
        listaResultado.appendChild(li);
    }
}