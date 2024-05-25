const { mostrarMenu } = require('./menu');
const listaDeCompras = [];
const { rl } = require('./menu');



function finalizarAcao(mostrarMenuCallback) {
    mostrarMenuCallback();
}

function adicionarItem() {
    rl.question("Digite o nome do item: ", (nomeItem) => {
        rl.question("Digite o preço do item: ", (precoItem) => {
            const preco = parseFloat(precoItem);
            if (!isNaN(preco) && preco >= 0) {
                listaDeCompras.push({ nome: nomeItem, preco, comprado: false });
                console.log(`Item "${nomeItem}" adicionado à lista.`);
            } else {
                console.log("Preço inválido. Digite um valor numérico positivo.");
            }
            finalizarAcao(mostrarMenu);
        });
    });
}

function removerItem() {
    rl.question('Digite o nome do item que deseja remover: ', (nomeItem) => {
        const itemIndex = listaDeCompras.findIndex((item) => item.nome === nomeItem);
        if (itemIndex !== -1) {
          listaDeCompras.splice(itemIndex, 1);
          console.log(`Item "${nomeItem}" removido da lista.`);
        } else {
          console.log(`O item "${nomeItem}" não está na lista.`);
        }
        finalizarAcao(mostrarMenu);
    });
}

function marcarItemComoComprado() {
rl.question('Digite o nome do item que deseja marcar como comprado: ', (nomeItem) => {
    const itemIndex = listaDeCompras.findIndex((item) => item.nome === nomeItem);
    if (itemIndex !== -1) {
      listaDeCompras[itemIndex].comprado = true;
      console.log(`Item "${nomeItem}" marcado como comprado.`);
    } else {
      console.log(`O item "${nomeItem}" não está na lista.`);
    }
    finalizarAcao(mostrarMenu);
  });
}

function exibirListaDeCompras() {
    console.log('\n=============== Lista de Compras ===============\n');
    listaDeCompras.forEach((item) => {
      const status = item.comprado ? ' (comprado)' : '';
      console.log(`${item.nome}: R$ ${item.preco.toFixed(2)}${status}`);
    });
    console.log('\n===============================================\n');
    finalizarAcao(mostrarMenu);
  }
  
  function iniciarMenu() {
    mostrarMenu();
  }
  
  module.exports = {
    adicionarItem,
    removerItem,
    marcarItemComoComprado,
    exibirListaDeCompras,
    iniciarMenu,
  };