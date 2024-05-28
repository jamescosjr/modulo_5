const { perguntarNumeros, fecharInterface } = require('./input');
const { validarNumeros, separarParesImpares } = require('./processamentoNumeros');

function iniciarPrograma() {
    perguntarNumeros((numeros) => {
        const arrayNumero = validarNumeros(numeros);
        if (arrayNumero) {
            const arrayReorganizado = separarParesImpares(arrayNumero);
            console.log("Array reorganizado com pares primeiro:", arrayReorganizado);
            fecharInterface();
        } else {
            console.log("Entrada inválida. Por favor, digite apenas números separados por um espaço.");
            iniciarPrograma();
        }
    });
}

iniciarPrograma();