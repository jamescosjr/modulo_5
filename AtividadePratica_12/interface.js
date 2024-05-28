const { perguntar, perguntarNomeAluno, perguntarIdadeAluno, perguntarCursoAluno, perguntarMediaAluno, perguntarDetalhesAluno, perguntarChaveBusca, fecharInterface } = require('./input');
const { adicionarAluno, buscarChaveEmAlunos } = require('./alunos');
const MENSAGENS = require('./constantes');

function mostrarMenu() {
    console.log(MENSAGENS.MENU_PRINCIPAL);
    perguntar("Escolha uma opção: ", escolhaMenu);
}

const acoesMenu = {
    '1': adicionarNovoAluno,
    '2': buscarChaveAluno,
    '3': sair
};

function escolhaMenu(opcao) {
    const acao = acoesMenu[opcao];
    if (acao) {
        acao();
    } else {
        console.log(MENSAGENS.OPCAO_INVALIDA);
        mostrarMenu();
    }
}

function adicionarNovoAluno() {
    perguntarNomeAluno(nome => {
        perguntarIdadeAluno(idade => {
            perguntarCursoAluno(curso => {
                perguntarMediaAluno(media => {
                    perguntarDetalhesAluno(detalhes => {
                        adicionarAluno(nome, idade, curso, parseFloat(media), detalhes);
                        console.log(MENSAGENS.ALUNO_ADICIONADO);
                        mostrarMenu();
                    });
                });
            });
        });
    });
}

function buscarChaveAluno() {
    perguntarChaveBusca(chave => {
        const alunosEncontrados = buscarChaveEmAlunos(chave);
        if (alunosEncontrados.length === 0) {
            console.log(MENSAGENS.NENHUM_ALUNO_ENCONTRADO);
        } else {
            console.log("Aluno(s) encontrado(s):");
            alunosEncontrados.forEach(aluno => {
                console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Média: ${aluno.media}`);
                console.log(`Detalhes: ${JSON.stringify(aluno.detalhes)}`);
            });
        }
        mostrarMenu();
    });
}

function sair() {
    console.log(MENSAGENS.SAINDO);
    fecharInterface();
}

module.exports = { mostrarMenu };