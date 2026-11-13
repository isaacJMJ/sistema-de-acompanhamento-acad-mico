// === FUNÇÕES QUE CALCULAM ===

// Recebe as três notas e DEVOLVE a média

function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

// Função de Definir Situação

function definirSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    }

    else if (media >= 5 && media < 7) {
        return "Recuperação";
    }

    else { return "Reprovado"; }
}

// Função de Definir Classe da Situação

function classeDaSituacao(situacao) {
    if (situacao === "Aprovado") {
        return "aprovado";
    }

    else if (situacao === "Reprovado") {
        return "reprovado";
    }

    else { return "recuperacao"; }
}

// Função de Mostrar Mensagem

function mostrarMensagem(texto, classe) {
    let resultado = document.getElementById("resultado");
    resultado.innerText = texto;
    resultado.className = classe;
}

// === FUNÇÃO PRINCIPAL: O BOTÃO "CALCULAR MÉDIA" ===

// Função de Processar os Alunos

function processarAluno() {
    let nome = document.getElementById("nome").value.trim();
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
}
