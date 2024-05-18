const readline = require('readline');
const { adicao, subtracao, multiplicacao, divisao, percentual } = require('./operacoes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarNumero(pergunta) {
    return new Promise((resolve, reject) => {
        rl.question(pergunta, (num) => {
            const parsedNum = parseFloat(num);
            if (isNaN(parsedNum)) {
                reject('Por favor, digite um número válido.');
            } else {
                resolve(parsedNum);
            }
        });
    });
}

function perguntarOperacao() {
    return new Promise((resolve, reject) => {
        rl.question('Escolha uma operação entre +, -, *, /, %: ', (operacao) => {
            const validOperations = ['+', '-', '*', '/', '%'];
            operacao = operacao.trim();
            if (!validOperations.includes(operacao)) {
                reject('Operação inválida. Escolha entre +, -, *, /, %.');
            } else {
                resolve(operacao);
            }
        });
    });
}

async function obterNumero(pergunta) {
    while (true) {
        try {
            return await perguntarNumero(pergunta);
        } catch (error) {
            console.log(error);
        }
    }
}

async function obterOperacao() {
    while (true) {
        try {
            return await perguntarOperacao();
        } catch (error) {
            console.log(error);
        }
    }
}

async function iniciarCalculadora() {
    try {
        const num1 = await obterNumero('Digite o primeiro número: ');
        const operacao = await obterOperacao();
        const num2 = await obterNumero('Digite o segundo número: ');

        let resultado;
        switch (operacao) {
            case '+':
                resultado = adicao(num1, num2);
                break;
            case '-':
                resultado = subtracao(num1, num2);
                break;
            case '*':
                resultado = multiplicacao(num1, num2);
                break;
            case '/':
                if (num2 === 0) {
                    console.log('O denominador não pode ser 0.');
                    rl.close();
                    return;
                }
                resultado = divisao(num1, num2);
                break;
            case '%':
                resultado = percentual(num1, num2);
                break;
            default:
                console.log('Operação inválida. Escolha entre +, -, *, /, %.');
                rl.close();
                return;
        }
        console.log(`O resultado da operação é: ${resultado}`);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    } finally {
        rl.close();
    }
}

module.exports = { iniciarCalculadora };