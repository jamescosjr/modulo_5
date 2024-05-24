const { criarInterface } = require('../readlineInterface');

async function pedirNumero(callback) {
  const rl = criarInterface();

  try {
    const input = await new Promise((resolve, reject) => {
      rl.question('Quantos elementos da sequência de Fibonacci você quer? ', input => {
        rl.close();
        const numero = parseInt(input);

        if (isNaN(numero) || numero <= 0) {
          reject(new Error('Número inválido. Digite um número inteiro positivo.'));
          return;
        }

        resolve(numero);
      });
    });

    return input;
  } catch (error) {
    console.error(error.message);
    return pedirNumero(callback);
  }
}

module.exports = {
  pedirNumero
};