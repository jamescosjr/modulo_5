function adicao(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}

function percentual(num1, num2) {
    return (num1 * num2) / 100;
}

module.exports = { adicao, subtracao, multiplicacao, divisao, percentual };