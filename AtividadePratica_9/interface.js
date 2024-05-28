const { perguntarPerguntaCadastro, perguntarNomeFuncionario, perguntarCargoFuncionario, perguntarSalarioFuncionario, fecharInterface } = require('./input');
const { adicionarFuncionario, mostrarMaiorSalario } = require('./funcionarios');

function perguntaCadastro() {
    perguntarPerguntaCadastro((opcaoCadastro) => {
        if (opcaoCadastro === 'sim') {
            perguntarDadosFuncionario();
        } else if (opcaoCadastro === 'não') {
            mostrarMaiorSalario();
            fecharInterface();
        } else {
            console.log("Opção inválida! Digite 'sim' ou 'não'.");
            perguntaCadastro();
        }
    });
}

function perguntarDadosFuncionario() {
    perguntarNomeFuncionario((nome) => {
        perguntarCargoFuncionario((cargo) => {
            perguntarSalarioFuncionario((salario) => {
                adicionarFuncionario(nome, cargo, salario);
                perguntaCadastro();
            });
        });
    });
}

module.exports = {
    perguntaCadastro,
};