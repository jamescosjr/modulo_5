const { criarInterface } = require('../readlineInterface');
const rl = criarInterface();

function perguntar(mensagem, callback) {
    rl.question(mensagem, callback);
}

function perguntarNomeAluno(callback) {
    perguntar("Digite o nome do aluno: ", callback);
}

function perguntarIdadeAluno(callback) {
    perguntar("Digite a idade do aluno: ", callback);
}

function perguntarCursoAluno(callback) {
    perguntar("Digite o curso do aluno: ", callback);
}

function perguntarMediaAluno(callback) {
    perguntar("Digite a média do aluno: ", callback);
}

function perguntarDetalhesAluno(callback) {
    const solicitarDetalhes = () => {
        perguntar("Digite detalhes adicionais em formato JSON (ex: {\"contato\": {\"email\": \"exemplo@dominio.com\"}}): ", detalhes => {
            try {
                const detalhesObj = JSON.parse(detalhes);
                callback(detalhesObj);
            } catch (e) {
                console.log("JSON inválido. Por favor, digite um JSON válido.");
                solicitarDetalhes();
            }
        });
    };
    solicitarDetalhes();
}

function perguntarChaveBusca(callback) {
    perguntar("Digite a chave de busca: ", callback);
}

function fecharInterface() {
    rl.close();
}

module.exports = {
    perguntar,
    perguntarNomeAluno,
    perguntarIdadeAluno,
    perguntarCursoAluno,
    perguntarMediaAluno,
    perguntarDetalhesAluno,
    perguntarChaveBusca,
    fecharInterface
};