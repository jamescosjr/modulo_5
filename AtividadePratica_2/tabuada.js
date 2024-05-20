function calcularTabuada(numero) {
    const resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push({ multiplicador: i, resultado: numero * i });
    }
    return resultados;
}

function imprimirTabuada(numero, resultados) {
    console.log(`Tabuada de ${numero}:`);
    resultados.forEach(item => {
        console.log(`${numero} x ${item.multiplicador} = ${item.resultado}`);
    });
}

function fazerTabuada(numero) {
    const resultados = calcularTabuada(numero);
    imprimirTabuada(numero, resultados);
}

module.exports = { fazerTabuada, calcularTabuada, imprimirTabuada };