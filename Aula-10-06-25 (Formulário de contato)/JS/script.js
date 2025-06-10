document.addEventListener('DOMContentLoaded', () => {

    const elementoRelogio = document.getElementById("relogio");
    if (elementoRelogio) {
        setInterval(() => {
            const agora = new Date().toLocaleTimeString('pt-BR');
            elementoRelogio.innerText = "Hora atual: " + agora;
        }, 1000);
    }
    listar();
});

function salvar() {
    const inputNome = document.getElementById("nome");
    const nome = inputNome.value.trim();
    
    if (nome === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    let dados = JSON.parse(localStorage.getItem("alunos")) || [];
    dados.push(nome);

    localStorage.setItem("alunos", JSON.stringify(dados));

    inputNome.value = ""; 
    inputNome.focus(); 
    listar(); 
}

function listar() {
    const dados = JSON.parse(localStorage.getItem("alunos")) || [];
    const ul = document.getElementById("lista");
    
    if(!ul) return; 
    
    ul.innerHTML = ""; 

    dados.forEach((nome, index) => {
        const li = document.createElement("li");
        
        li.innerHTML = `${nome} <button onclick="remover(${index})">🗑️ Remover</button>`;
        ul.appendChild(li);
    });
}

function remover(indice) {
    let dados = JSON.parse(localStorage.getItem("alunos")) || [];
   
    dados.splice(indice, 1); 
    localStorage.setItem("alunos", JSON.stringify(dados));
    listar(); 
}

function limparTudo() {
    
    if (confirm("Tem certeza que deseja apagar todos os alunos?")) {
        localStorage.removeItem("alunos");
        listar(); 
    }
}