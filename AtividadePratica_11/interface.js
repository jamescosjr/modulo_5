const { perguntar, perguntarNomeUsuario, perguntarEmailUsuario, perguntarIdadeUsuario, fecharInterface } = require('./input');
const { adicionarUsuario, buscarPorEmail } = require('./usuarios');
const MENSAGENS = require('./constantes');

function mostrarMenu() {
    console.log(MENSAGENS.MENU_PRINCIPAL);
    perguntar("Escolha uma opção: ", escolhaUsuario);
}

const acoesMenu = {
    '1': adicionarNovoUsuario,
    '2': buscarUsuarioPorEmail,
    '3': sair
};

function escolhaUsuario(opcao) {
    const acao = acoesMenu[opcao];
    if (acao) {
        acao();
    } else {
        console.log(MENSAGENS.OPCAO_INVALIDA);
        mostrarMenu();
    }
}

function adicionarNovoUsuario() {
    perguntarNomeUsuario((nome) => {
        perguntarEmailUsuario((email) => {
            perguntarIdadeUsuario((idade) => {
                if (adicionarUsuario(nome, email, idade)) {
                    console.log(MENSAGENS.USUARIO_ADICIONADO);
                } else {
                    console.log("Idade inválida. Por favor, digite um número positivo.");
                }
                mostrarMenu();
            });
        });
    });
}

function buscarUsuarioPorEmail() {
    perguntarEmailUsuario((email) => {
        const usuarioEncontrado = buscarPorEmail(email);
        if (!usuarioEncontrado) {
            console.log(MENSAGENS.NENHUM_USUARIO_ENCONTRADO);
        } else {
            console.log("Usuário encontrado:");
            console.log(`Nome: ${usuarioEncontrado.nome}, Email: ${usuarioEncontrado.email}, Idade: ${usuarioEncontrado.idade}`);
        }
        mostrarMenu();
    });
}

function sair() {
    console.log(MENSAGENS.SAINDO);
    fecharInterface();
}

module.exports = { mostrarMenu };