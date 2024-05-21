const { criarInterface } = require('../readlineInterface');

function pedirNumero(callback) {
    const rl = criarInterface();
    rl.question("Digite um número para verificar se é primo: ", (numero) => {
        rl.close();
        const numeroValido = parseInt(numero);
        if (isNaN(numeroValido)) {
            console.log("Entrada inválida. Por favor, digite um número.");
            pedirNumero(callback);
            return;
        }
    });
}
module.exports = { pedirNumero }