function validarNumeros(numeros) {
    const arrayNumero = numeros.split(' ').map(Number);
    const todosSaoNumeros = arrayNumero.every(num => !isNaN(num));
    return todosSaoNumeros ? arrayNumero : null;
}

function separarParesImpares(arrayNumero) {
    const pares = arrayNumero.filter(num => num % 2 === 0);
    const impares = arrayNumero.filter(num => num % 2 !== 0);
    return pares.concat(impares);
}

module.exports = { validarNumeros, separarParesImpares };