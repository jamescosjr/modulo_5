const { criarInterface } = require('../readlineInterface');
const rl = criarInterface();

function perguntar(mensagem, callback) {
    rl.question(mensagem, callback);
}

function perguntarNomeUsuario(callback) {
    perguntar("Digite o nome do usuário: ", callback);
}

function perguntarEmailUsuario(callback) {
    perguntar("Digite o email do usuário: ", callback);
}

function perguntarIdadeUsuario(callback) {
    perguntar("Digite a idade do usuário: ", callback);
}

function fecharInterface() {
    rl.close();
}

module.exports = {
    perguntar,
    perguntarNomeUsuario,
    perguntarEmailUsuario,
    perguntarIdadeUsuario,
    fecharInterface
};