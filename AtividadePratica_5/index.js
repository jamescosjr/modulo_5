const { pedirNumero } = require('./input');
const { numeroPrimo } = require('./primo');

pedirNumero((numero) => {
    if (isNaN(numero)) {
        console.log("Entrada inválida. Por favor, digite um número.");
        return;
    }

    const primo = numeroPrimo(numero);
    const mensagem = primo ? `${numero} é um número primo.` : `${numero} não é um número primo.`;
    console.log(mensagem);
});