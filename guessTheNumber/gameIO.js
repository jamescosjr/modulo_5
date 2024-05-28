class GameIO {
    constructor(game, attempts, readlineInterface) {
        this.game = game;
        this.attempts = attempts;
        this.rl = readlineInterface;
    }

    startGame() {
        console.log("\nBem-vindo ao Jogo de Adivinhação!\n");
        console.log("Você tem", this.attempts, "tentativas para adivinhar o número entre 1 e 100.");
        console.log("Digite 'sair' para encerrar o jogo.\n");

        this.askGuess();
    }

    askGuess() {
        this.rl.question("Digite o seu palpite: ", (guess) => {
            if (guess.toLowerCase() === 'sair') {
                console.log("Obrigado por jogar! Até mais.");
                this.rl.close();
                return;
            }

            const guessedNumber = parseInt(guess);
            if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
                console.log("Entrada inválida. Por favor, digite um número válido entre 1 e 100.");
                this.askGuess();
            } else {
                const result = this.game.checkGuess(guessedNumber);
                if (result === "correct") {
                    console.log("Parabéns! Você adivinhou o número correto:", this.game.secretNumber);
                    this.rl.close();
                } else {
                    this.attempts--;
                    if (this.attempts === 0) {
                        console.log("Fim de jogo! O número correto era:", this.game.secretNumber);
                        this.rl.close();
                    } else {
                        if (result === "low") {
                            console.log("Muito baixo! Tente novamente.");
                        } else {
                            console.log("Muito alto! Tente novamente.");
                        }
                        this.askGuess();
                    }
                }
            }
        });
    }
}

module.exports = GameIO;