const { criarInterface } = require('../readlineInterface');
const { converterFahrenheitParaCelsius, converterCelsiusParaFahrenheit } = require('./conversorTemperatura');
const { perguntarEscala, perguntarTemperatura } = require('./manipuladorEntrada');

function apresentarResultado(escala, temperatura) {
    const resultado = escala === 'f' 
        ? converterFahrenheitParaCelsius(temperatura) 
        : converterCelsiusParaFahrenheit(temperatura);
    
    const escalaDestino = escala === 'f' ? 'Celsius' : 'Fahrenheit';

    console.log(`A temperatura equivalente em ${escalaDestino} é ${resultado.toFixed(2)}.`);
}

function iniciarConversao() {
    const rl = criarInterface();

    perguntarEscala(rl, (escala) => {
        perguntarTemperatura(rl, escala, (temperatura) => {
            apresentarResultado(escala, temperatura);
            rl.close();
        });
    });
}

iniciarConversao();