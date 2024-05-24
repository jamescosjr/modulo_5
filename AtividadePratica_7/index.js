const { pedirNumero } = require('./input');
const { calcularFibonacci, formatarResultado } = require('./fibonacci');

async function mostrarFibonacci() {
    const numeroElementos = await pedirNumero();
    const sequenciaFibonacci = calcularFibonacci(numeroElementos);
    const resultadoFormatado = formatarResultado(sequenciaFibonacci, numeroElementos);
  
    console.log(resultadoFormatado);
  }
  
  mostrarFibonacci();