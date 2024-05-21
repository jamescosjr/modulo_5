function validarEntrada(numero) {
    return !isNaN(numero) && numero >= 0 && numero.toString().match(/^\d+$/);
}

function calcularFatorial(numero) {
    if (numero === 0) {
        return 1;
    }
    return numero * calcularFatorial(numero - 1);
}

module.exports = { calcularFatorial, validarEntrada };