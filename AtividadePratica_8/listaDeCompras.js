const { mostrarMenu } = require('./menu');
const listaDeCompras = [];
const { perguntarNomeItem, perguntarNomeParaMarcarComoComprado, perguntarNomeParaRemover, perguntarPrecoItem } = require('./input')



function finalizarAcao(mostrarMenu) {
    mostrarMenu();
}

function adicionarItem() {
  perguntarNomeItem((nomeItem) => {
    perguntarPrecoItem((precoItem) => {
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
  perguntarNomeParaRemover((nomeItem) => {
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
  perguntarNomeParaMarcarComoComprado((nomeItem) => {
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