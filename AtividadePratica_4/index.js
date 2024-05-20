const { obterValores } = require('./input');
const { verificarMaior } = require('./logicaMaior');

obterValores((num1, num2, num3) => {
    try {
        const maior = verificarMaior(num1, num2, num3);
        console.log('O maior valor é ' + maior + '!');
    } catch (error) {
        console.log(error.message);
    }
});