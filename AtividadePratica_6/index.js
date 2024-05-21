const { solicitarNumero } = require('./input');
const { validarEntrada, calcularFatorial } = require('./fatorial');

async function main() {
    try {
        const numero = await solicitarNumeroValido();
        exibirFatorial(numero);
    } catch (error) {
        console.error('Ocorreu um erro:', error.message);
    }
}

async function solicitarNumeroValido() {
    try {
        const numero = await solicitarNumero();
        if (validarEntrada(numero)) {
            return numero;
        } else {
            console.error('Entrada inválida! Digite um número inteiro não negativo.');
            return await solicitarNumeroValido();
        }
    } catch (error) {
        console.error(error.message);
        return await solicitarNumeroValido();
    }
}

function exibirFatorial(numero) {
    const resultado = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é ${resultado}`);
}

main();