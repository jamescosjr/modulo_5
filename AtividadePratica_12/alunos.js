let alunos = [];

function adicionarAluno(nome, idade, curso, media, detalhes) {
    alunos.push({ nome, idade, curso, media, detalhes });
    console.log("Aluno adicionado com sucesso!");
}

function buscarChaveEmAlunos(chaveProcurada) {
    const resultados = [];
    alunos.forEach(aluno => {
        if (encontrarChave(aluno, chaveProcurada)) {
            resultados.push(aluno);
        }
    });
    return resultados;
}

function encontrarChave(objeto, chaveProcurada) {
    for (let chave in objeto) {
        if (chave === chaveProcurada) {
            return true;
        } else if (typeof objeto[chave] === 'object' && objeto[chave] !== null) {
            if (encontrarChave(objeto[chave], chaveProcurada)) {
                return true;
            }
        }
    }
    return false;
}

module.exports = { adicionarAluno, buscarChaveEmAlunos };