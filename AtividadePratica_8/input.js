const { rl } = require('./menu');

function perguntarNomeItem(callback) {
  rl.question("Digite o nome do item: ", (nomeItem) => {
    callback(nomeItem);
  });
}

function perguntarPrecoItem(callback) {
  rl.question("Digite o preço do item: ", (precoItem) => {
    callback(precoItem);
  });
}

function perguntarNomeParaRemover(callback) {
  rl.question('Digite o nome do item que deseja remover: ', (nomeItem) => {
    callback(nomeItem);
  });
}

function perguntarNomeParaMarcarComoComprado(callback) {
  rl.question('Digite o nome do item que deseja marcar como comprado: ', (nomeItem) => {
    callback(nomeItem);
  });
}

module.exports = {
  perguntarNomeItem,
  perguntarPrecoItem,
  perguntarNomeParaRemover,
  perguntarNomeParaMarcarComoComprado,
};