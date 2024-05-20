const { adicao, subtracao, multiplicacao, divisao, percentual } = require('./operacoes');

function perguntar(questionText, rl) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, (input) => {
            resolve(input.trim());
        });
    });
}

async function obterNumero(pergunta, rl) {
    while (true) {
        const resposta = await perguntar(pergunta, rl);
        const numero = parseFloat(resposta);
        if (!isNaN(numero)) {
            return numero;
        }
        console.log('Por favor, digite um número válido.');
    }
}

async function obterOperacao(rl) {
    const operacoesValidas = ['+', '-', '*', '/', '%'];
    while (true) {
        const operacao = await perguntar('Escolha uma operação entre +, -, *, /, %: ', rl);
        if (operacoesValidas.includes(operacao)) {
            return operacao;
        }
        console.log('Operação inválida. Escolha entre +, -, *, /, %.');
    }
}

async function calcular(num1, operacao, num2) {
    switch (operacao) {
        case '+':
            return adicao(num1, num2);
        case '-':
            return subtracao(num1, num2);
        case '*':
            return multiplicacao(num1, num2);
        case '/':
            if (num2 === 0) {
                throw new Error('O denominador não pode ser 0.');
            }
            return divisao(num1, num2);
        case '%':
            return percentual(num1, num2);
        default:
            throw new Error('Operação inválida.');
    }
}

async function iniciarCalculadora(rl) {
    try {
        const num1 = await obterNumero('Digite o primeiro número: ', rl);
        const operacao = await obterOperacao(rl);
        const num2 = await obterNumero('Digite o segundo número: ', rl);
        
        const resultado = await calcular(num1, operacao, num2);
        console.log(`O resultado da operação é: ${resultado}`);
    } catch (error) {
        console.error('Ocorreu um erro:', error.message);
    } finally {
        rl.close();
    }
}

module.exports = { iniciarCalculadora };