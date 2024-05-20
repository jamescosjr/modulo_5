const { criarInterface } = require('./readlineInterface');

function obterValor(question) {
    return new Promise((resolve) => {
        const rl = criarInterface();
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

async function obterNumeroValido(question) {
    while (true) {
        const valor = await obterValor(question);
        if (isNumber(valor)) {
            return valor;
        } else {
            console.log('Entrada inválida. Por favor, insira um número válido.');
        }
    }
}

async function obterValores(callback) {
    try {
        const num1 = await obterNumeroValido('Digite o primeiro valor: ');
        const num2 = await obterNumeroValido('Digite o segundo valor: ');
        const num3 = await obterNumeroValido('Digite o terceiro valor: ');
        callback(num1, num2, num3);
    } catch (error) {
        console.error('Erro ao obter valores:', error);
    }
}

module.exports = { obterValores };