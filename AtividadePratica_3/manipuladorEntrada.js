function perguntarEscala(rl, callback) {
    rl.question("Você vai digitar a temperatura em qual escala ('C' para Celsius ou 'F' para Fahrenheit)? ", (escala) => {
        escala = escala.trim().toLowerCase();
        if (escala === 'c' || escala === 'f') {
            callback(escala);
        } else {
            console.log("Dados inválidos! Escolha 'C' para Celsius ou 'F' para Fahrenheit");
            perguntarEscala(rl, callback);
        }
    });
}

function perguntarTemperatura(rl, escala, callback) {
    const pergunta = escala === 'f' ? "Qual a temperatura em Fahrenheit deseja converter para Celsius? " : "Qual a temperatura em Celsius deseja converter para Fahrenheit? ";
    rl.question(pergunta, (input) => {
        const temperatura = parseFloat(input);
        if (!isNaN(temperatura)) {
            callback(temperatura);
        } else {
            console.log('Dados inválidos! Digite a temperatura em números');
            perguntarTemperatura(rl, escala, callback);
        }
    });
}

module.exports = { perguntarEscala, perguntarTemperatura };