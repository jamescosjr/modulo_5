const NumberGame = require('./numberGame');
const GameIO = require('./gameIO');
const { criarInterface } = require('../readlineInterface');
const rl = criarInterface();


const LEVELS = {
    "1": 10,
    "2": 8,
    "3": 6,
    "4": 4,
    "5": 2,
    "6": "quit"
};

const WELCOME_MESSAGE = `
=============== Bem-vindo ao Jogo de Adivinhação ===============
1. Muito Fácil
2. Fácil
3. Normal
4. Difícil
5. Muito Difícil
6. Sair
`;

function showMenu() {
    console.log(WELCOME_MESSAGE);
    rl.question("Escolha o nível: ", handleLevelSelection);
}

function handleLevelSelection(level) {
    if (LEVELS[level]) {
        if (level === '6') {
            console.log("Obrigado por jogar! Até mais.");
            rl.close();
            return;
        }

        const attempts = LEVELS[level];
        const secretNumber = Math.floor(Math.random() * 100) + 1;
        const game = new NumberGame(secretNumber);
        const gameIO = new GameIO(game, attempts, rl);
        gameIO.startGame();
    } else {
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        showMenu();
    }
}

showMenu();