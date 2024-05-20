function verificarMaior(num1, num2, num3) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        throw new Error('Dados inválidos! Digite números válidos.');
    }

    return Math.max(n1, n2, n3);
}

module.exports = { verificarMaior };