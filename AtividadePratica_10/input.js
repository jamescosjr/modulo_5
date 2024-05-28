const { criarInterface } = require('../readlineInterface');
const rl = criarInterface();

function perguntar(mensagem, callback) {
    rl.question(mensagem, callback);
}

function perguntarNumeros(callback) {
    perguntar("Digite os números que quer reorganizar, separados por um espaço ' ':", callback);
}

function perguntarOpcaoCadastro(callback) {
    perguntar('Deseja cadastrar um novo funcionário (SIM/NÃO)? ', callback);
}

function perguntarNomeFuncionario(callback) {
    perguntar("Digite o nome do funcionário: ", callback);
}

function perguntarCargoFuncionario(callback) {
    perguntar("Digite o cargo do funcionário: ", callback);
}

function perguntarSalarioFuncionario(callback) {
    perguntar("Digite o salário do funcionário: ", callback);
}

function fecharInterface(){
    rl.close();
}

module.exports = {
    perguntar,
    perguntarNumeros,
    perguntarOpcaoCadastro,
    perguntarNomeFuncionario,
    perguntarCargoFuncionario,
    perguntarSalarioFuncionario,
    fecharInterface
};