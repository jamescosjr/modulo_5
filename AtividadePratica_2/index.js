const { criarInterface } = require('./readlineInterface');
const { fazerTabuada } = require('./tabuada');
const { pedirNumero } = require('./input')

const rl = criarInterface();
pedirNumero(rl, fazerTabuada);