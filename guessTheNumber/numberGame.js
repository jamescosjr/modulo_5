class NumberGame {
    constructor(secretNumber) {
        this.secretNumber = secretNumber;
    }

    checkGuess(guess) {
        if (guess === this.secretNumber) {
            return "correct";
        } else if (guess < this.secretNumber) {
            return "low";
        } else {
            return "high";
        }
    }
}

module.exports = NumberGame;