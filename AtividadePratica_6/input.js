const { criarInterface } = require('../readlineInterface');

function solicitarNumero() {
    return new Promise((resolve, reject) => {
        const rl = criarInterface();
        rl.question('Digite o número que deseja calcular o fatorial: ', (numero) => {
            rl.close();
            try {
                const numeroConvertido = converterParaNumero(numero);
                resolve(numeroConvertido);
            } catch (error) {
                reject(error);
            }
        });
    });
}

function converterParaNumero(valor) {
    const numero = parseInt(valor);
    if (isNaN(numero)) {
        throw new Error('Valor inválido! Digite um número.');
    }
    return numero;
}

module.exports = { solicitarNumero };