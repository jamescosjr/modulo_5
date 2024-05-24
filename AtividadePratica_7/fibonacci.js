function validarNumeroElementos(numero) {
    return !isNaN(numero) && numero > 0;
  }
  
  function calcularFibonacci(numeroElementos) {
    if (!validarNumeroElementos(numeroElementos)) {
      return [];
    }
  
    const fibonacci = new Array(numeroElementos);
    fibonacci[0] = 1;
    fibonacci[1] = 1;
  
    for (let i = 2; i < numeroElementos; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    return fibonacci;
  }
  
  function formatarResultado(sequenciaFibonacci, numeroElementos) {
    if (sequenciaFibonacci.length === 0) {
      return 'Número inválido. Digite um número inteiro positivo.';
    }
  
    const resultadoFormatado = sequenciaFibonacci.slice(0, numeroElementos).join(', ');
    return `Os ${numeroElementos} primeiros termos da sequência de Fibonacci são: ${resultadoFormatado}`;
  }
  
  module.exports = {
    validarNumeroElementos,
    calcularFibonacci,
    formatarResultado
  };