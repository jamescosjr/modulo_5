const { criarInterface } = require('../readlineInterface');
const rl = criarInterface();

const MENU_MESSAGE = `
=============== Lista de Compras ===============
1. Adicionar item
2. Remover item
3. Marcar item como comprado
4. Exibir lista de compras
5. Sair
===============================================
`;

function mostrarMenu() {
    console.log(MENU_MESSAGE);

    rl.question("Escolha uma opção: ", (opcao) => {
        const { adicionarItem, removerItem, marcarItemComoComprado, exibirListaDeCompras } = require('./listaDeCompras');
        const opcoesMenu = {
            '1': adicionarItem,
            '2': removerItem,
            '3': marcarItemComoComprado,
            '4': exibirListaDeCompras,
            '5': () => rl.close()
        };

        const opcaoSelecionada = opcoesMenu[opcao.trim()];
        if (opcaoSelecionada) {
            opcaoSelecionada();
        } else {
            console.log("Opção inválida. Escolha uma opção válida.\n");
            mostrarMenu();
        }
    });
}

module.exports = { mostrarMenu, rl };