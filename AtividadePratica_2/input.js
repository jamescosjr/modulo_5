function pedirNumero(rl, callback) {
    rl.question('Digite o número que deseja obter a tabuada: ', (input) => {
        const numero = parseFloat(input);
        if (!isNaN(numero)) {
            callback(numero);
            rl.close();
        } else {
            console.log('Dado inválido. Por favor, digite um número.');
            pedirNumero(rl, callback);
        }
    });
}

module.exports = { pedirNumero };