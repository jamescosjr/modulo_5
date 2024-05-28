const { criarInterface } = require('../readlineInterface');
const rl = criarInterface();

function perguntarPerguntaCadastro(callback) {
    rl.question('Deseja cadastrar um novo funcionário (SIM/NÃO)? ', (opcaoCadastro) => {
        callback(opcaoCadastro.toLowerCase());
    });
}

function perguntarNomeFuncionario(callback) {
    rl.question("Digite o nome do funcionário: ", (nome) => {
        callback(nome);
    });
}

function perguntarCargoFuncionario(callback) {
    rl.question("Digite o cargo do funcionário: ", (cargo) => {
        callback(cargo);
    });
}

function perguntarSalarioFuncionario(callback) {
    rl.question("Digite o salário do funcionário: ", (salario) => {
        callback(salario);
    });
}

function fecharInterface() {
    rl.close();
}

module.exports = {
    perguntarPerguntaCadastro,
    perguntarNomeFuncionario,
    perguntarCargoFuncionario,
    perguntarSalarioFuncionario,
    fecharInterface
};